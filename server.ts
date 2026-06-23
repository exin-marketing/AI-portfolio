import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dns from "dns";

// Force local DNS resolution priority for faster container responses
dns.setDefaultResultOrder("ipv4first");

const app = express();
const PORT = 3000;

// Parse incoming request bodies as JSON
app.use(express.json());

// Memory-based fallback database for local preview/development
interface LocalLead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  country: string;
  type: string;
  interest: string;
  message?: string;
  createdAt: string;
  syncedWithActiveCampaign: boolean;
}
const localLeadsDb: LocalLead[] = [];

// Secure Server-side API endpoint for lead collection
app.post("/api/leads", async (req, res) => {
  try {
    const { firstName, lastName, email, organisation, country, type, interest, message } = req.body;

    if (!firstName || !lastName || !email || !organisation || !country) {
      return res.status(400).json({
        success: false,
        error: "Missing mandatory fields"
      });
    }

    const leadId = `lead_${Date.now()}`;
    const newLead: LocalLead = {
      id: leadId,
      firstName,
      lastName,
      email,
      organisation,
      country,
      type,
      interest,
      message,
      createdAt: new Date().toISOString(),
      syncedWithActiveCampaign: false
    };

    console.log(`[Lead Ingested] ${email} (${firstName} ${lastName}) from ${organisation}`);

    const acUrl = process.env.ACTIVECAMPAIGN_URL;
    const acKey = process.env.ACTIVECAMPAIGN_KEY;

    let integrationStatus = "local_storage_only";
    let activeCampaignId = null;

    if (acUrl && acKey) {
      console.log(`[ActiveCampaign] Initiating contact sync for: ${email}`);
      const cleanUrl = acUrl.endsWith("/") ? acUrl.slice(0, -1) : acUrl;

      try {
        // Step 1: Create or Update Contact
        // https://developers.activecampaign.com/reference/sync-a-contacts-data
        const syncResponse = await fetch(`${cleanUrl}/api/3/contact/sync`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Api-Token": acKey
          },
          body: JSON.stringify({
            contact: {
              email,
              firstName,
              lastName
            }
          })
        });

        if (!syncResponse.ok) {
          const errMsg = await syncResponse.text();
          throw new Error(`Sync contact failed with HTTP ${syncResponse.status}: ${errMsg}`);
        }

        const syncData = await syncResponse.json() as any;
        const contactId = syncData.contact?.id;
        activeCampaignId = contactId;

        if (contactId) {
          console.log(`[ActiveCampaign] Success. Contact ID is ${contactId}`);
          
          // Step 2: Helper to apply custom B2B tags for segmentation
          const tagsToApply = [
            `EXIN AI Core Lead`,
            `Type: ${type}`,
            `Interest: ${interest}`,
            `Org: ${organisation}`,
            `Country: ${country}`
          ];

          // We create/add tags sequentially to keep segmenting robust
          for (const rawTag of tagsToApply) {
            try {
              // 2a. Post the contact tag mapping
              // https://developers.activecampaign.com/reference/create-contact-tag
              await fetch(`${cleanUrl}/api/3/contactTags`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Api-Token": acKey
                },
                body: JSON.stringify({
                  contactTag: {
                    contact: contactId,
                    tag: rawTag
                  }
                })
              });
            } catch (tagErr) {
              console.warn(`[ActiveCampaign] Non-blocking tag error for "${rawTag}":`, tagErr);
            }
          }

          // If there's an optional text message, we can post a custom note on the contact's timeline
          if (message && message.trim()) {
            try {
              await fetch(`${cleanUrl}/api/3/notes`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Api-Token": acKey
                },
                body: JSON.stringify({
                  note: {
                    note: `Inquiry Message: ${message}`,
                    relid: contactId,
                    reltype: "Contact"
                  }
                })
              });
              console.log(`[ActiveCampaign] Note appended to contact timeline`);
            } catch (noteErr) {
              console.warn(`[ActiveCampaign] Non-blocking note error:`, noteErr);
            }
          }

          newLead.syncedWithActiveCampaign = true;
          integrationStatus = "activecampaign_synced";
        }
      } catch (acErr: any) {
        console.error(`[ActiveCampaign Integration Error]:`, acErr.message);
        integrationStatus = "activecampaign_failed_fallback_local";
      }
    } else {
      console.log(`[ActiveCampaign] Skipping sync. ACTIVECAMPAIGN_URL or ACTIVECAMPAIGN_KEY is not defined in environment variables.`);
    }

    // Save state to server database
    localLeadsDb.push(newLead);

    res.status(200).json({
      success: true,
      leadId: newLead.id,
      integration: integrationStatus,
      activeCampaignId,
      message: "Lead processed successfully."
    });
  } catch (error: any) {
    console.error(`[Internal Server Error]:`, error);
    res.status(500).json({
      success: false,
      error: error.message || "An unexpected error occurred processing your business request"
    });
  }
});

// Admin-level helper endpoint to retrieve lead registries inside code browser cleanly
app.get("/api/leads/registry", (req, res) => {
  res.json({
    total: localLeadsDb.length,
    activeCampaignIntegration: {
      urlConfigured: !!process.env.ACTIVECAMPAIGN_URL,
      keyConfigured: !!process.env.ACTIVECAMPAIGN_KEY
    },
    leads: localLeadsDb
  });
});

// Integrate Vite dev middleware or serve production assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("[Server Boot] Initializing Vite dev middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("[Server Boot] Running in production mode.");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`\n======================================================`);
    console.log(`🚀 EXIN B2B Server active at: http://localhost:${PORT}`);
    console.log(`🛡️  Secure ActiveCampaign API Gateway loaded`);
    console.log(`======================================================\n`);
  });
}

startServer();
