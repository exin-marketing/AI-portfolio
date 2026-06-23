import React, { useState } from 'react';
import { PageId } from '../types';
import { ShieldAlert, BookOpen, Lock, Sparkles, ArrowRight, Skull, FileCode, RefreshCcw } from 'lucide-react';

interface RiskOwaspProps {
  onNavigate: (pageId: PageId) => void;
}

export default function RiskOwaspView({ onNavigate }: RiskOwaspProps) {
  const [activeTab, setActiveTab] = useState<'injection' | 'poisoning' | 'agency' | 'all'>('injection');

  const owaspThreats = [
    {
      code: 'LLM01',
      name: 'Prompt Injection',
      impact: 'Critical / High',
      category: 'injection',
      desc: 'Manipulating an LLM’s behavior via engineered query inputs, causing the model to bypass system safety constraints, display protected passwords, or execute harmful commands.',
      mitigation: 'Use robust sanitization grids, execute input validation pipelines, and separate core system directives from user-facing prompts.'
    },
    {
      code: 'LLM02',
      name: 'Insecure Output Handling',
      impact: 'High',
      category: 'injection',
      desc: 'Blindly trusting model outputs without sanitization before passing them downstream to executive layers, resulting in Cross-Site Scripting (XSS), SQL Injections, or shell command executions.',
      mitigation: 'Adopt a zero-trust model for LLM-generated output; parse HTML wrappers and sanitize all variables before database or shell execution.'
    },
    {
      code: 'LLM03',
      name: 'Training Data Poisoning',
      impact: 'Critical',
      category: 'poisoning',
      desc: 'Introducing malicious data or deliberate biases into the training corpus or fine-tuning datasets, causing backdoors, degraded reasoning, or critical security bypasses.',
      mitigation: 'Vibe-verify data sources, inspect training set checksums, and perform dedicated adversarial fine-tuning runs.'
    },
    {
      code: 'LLM04',
      name: 'Model Denial of Service',
      impact: 'Medium',
      category: 'poisoning',
      desc: 'Starving system resources by transmitting highly complex context variables or continuous recursive iterations that trigger exponential computing costs.',
      mitigation: 'Establish context limits (strict token limits), throttle rapid queries, and implement hard timeouts for agent sub-processes.'
    },
    {
      code: 'LLM05',
      name: 'Supply Chain Vulnerabilities',
      impact: 'High',
      category: 'poisoning',
      desc: 'Deploying compromised third-party base models, fine-tuned adapters, insecure orchestrator packages, or corrupted public vector stores.',
      mitigation: 'Only source packages from verified model registries, sign model weights, and scan dependencies continuously.'
    },
    {
      code: 'LLM06',
      name: 'Sensitive Information Disclosure',
      impact: 'Critical',
      category: 'injection',
      desc: 'Exposing confidential variables, personal data, intellectual property, or proprietary core system metadata because data sanitization failed during the training phase.',
      mitigation: 'Employ rigorous scrubbers (PII filters) on training files and implement strict guardrails in system prompts.'
    },
    {
      code: 'LLM07',
      name: 'Insecure Plugin Design',
      impact: 'High',
      category: 'agency',
      desc: 'Extending model utility through external plugins with weak input sanitization or excessive privileges, leading to remote code execution (RCE).',
      mitigation: 'Validate plugin input schemas diligently, apply the principle of least privilege, and sandbox external tool calls.'
    },
    {
      code: 'LLM08',
      name: 'Excessive Agency',
      impact: 'Critical',
      category: 'agency',
      desc: 'Granting model agents too much authority to perform critical operations (such as deleting databases, modifying servers, or issuing invoices) without human validation.',
      mitigation: 'Require human-in-the-loop validation (HITL) for high-impact actions, restrict sandbox systems, and limit API keys.'
    },
    {
      code: 'LLM09',
      name: 'Overreliance',
      impact: 'Medium',
      category: 'agency',
      desc: 'Uncritically accepting inaccurate, hallucinated, or biased outputs as absolute facts, leading to faulty corporate reporting, legal compliance failure, or engineering breakdowns.',
      mitigation: 'Establish a systematic double-check workflow, leverage cross-referencing retrieval-augmented generation (RAG), and educate staff.'
    },
    {
      code: 'LLM10',
      name: 'Model Theft',
      impact: 'Medium',
      category: 'poisoning',
      desc: 'Unauthorized exfiltration of intellectual property by extracting model layers or weights through systemic prompt probing or competitive API cloning.',
      mitigation: 'Rate-limit public endpoints and detect systemic probing patterns using guardrail filters.'
    }
  ];

  const filteredThreats = activeTab === 'all' 
    ? owaspThreats 
    : owaspThreats.filter(t => t.category === activeTab);

  return (
    <div id="risk-owasp-view" className="bg-[#fafbfc] min-h-screen pb-20">
      
      {/* 2. HERO */}
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-1.5 text-xs bg-red-500/15 text-red-200 px-4 py-1.5 rounded-full border border-red-500/30 font-bold mb-2">
            <Skull className="h-4 w-4 text-red-400" />
            <span>AI Risk Registry Reference</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight tracking-tight text-white">
            Security Governance <br /> & the OWASP LLM Top 10
          </h1>
          
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            As enterprises connect Large Language Models to internal databases, the vulnerability surface expands. Learn how EXIN certifications mitigate AI-specific threats.
          </p>

          <div className="pt-4 flex justify-center space-x-4">
            <button
              onClick={() => onNavigate('aisp')}
              className="bg-brand-orange hover:bg-brand-orange/95 text-white font-bold py-3 px-6 rounded text-xs transition-colors"
            >
              Get Certified in AI Security (AISP)
            </button>
            <button
              onClick={() => onNavigate('compliance')}
              className="bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-6 rounded text-xs border border-white/20 transition-all"
            >
              EU AI Act Conformity
            </button>
          </div>
        </div>
      </section>

      {/* DETAILED INTERACTIVE GRIDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-xl border border-gray-150 p-6 sm:p-8 shadow-sm">
          
          <div className="text-center md:text-left md:flex justify-between items-end pb-6 border-b border-gray-100 mb-8">
            <div>
              <h2 className="text-xl font-bold font-display text-brand-navy">OWASP LLM Vulnerability Registry</h2>
              <p className="text-xs text-gray-500 mt-1">Select a threat category to view attack vectors and mitigations.</p>
            </div>
            
            {/* Tab switchers */}
            <div className="flex flex-wrap gap-1.5 mt-4 md:mt-0 justify-center">
              {[
                { id: 'injection', label: 'Inputs & Output Injections' },
                { id: 'poisoning', label: 'Corpus & Supply Poisoning' },
                { id: 'agency', label: 'Autonomous Agency Flaws' },
                { id: 'all', label: 'Show All 10 Risks' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-brand-navy text-white shadow-sm'
                      : 'bg-slate-50 text-gray-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredThreats.map(threat => (
              <div key={threat.code} className="bg-brand-bg/50 border border-brand-blue/10 rounded-xl p-6 hover:border-brand-blue/30 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-bold text-brand-navy bg-brand-blue/15 px-2 py-0.5 rounded border border-brand-blue/20">
                      {threat.code}
                    </span>
                    <h3 className="font-bold text-brand-navy text-sm sm:text-base font-display">{threat.name}</h3>
                  </div>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wide ${
                    threat.impact.includes('Critical') 
                      ? 'bg-red-500 text-white' 
                      : threat.impact.includes('High') 
                      ? 'bg-brand-orange text-white' 
                      : 'bg-brand-yellow text-brand-navy'
                  }`}>
                    {threat.impact}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed font-sans">
                  {threat.desc}
                </p>

                <div className="bg-white border text-xs text-gray-500 rounded p-4.5 mt-4 border-slate-100">
                  <p className="text-brand-navy font-bold flex items-center space-x-1 mb-1">
                    <Lock className="h-3 w-3 text-brand-green" />
                    <span>Mitigation Guidance:</span>
                  </p>
                  <span>{threat.mitigation}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONCRETE IMPACT STUDY CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-brand-navy to-[#0c315c] text-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs text-brand-yellow font-extrabold uppercase bg-white/10 px-3 py-1 rounded">Governance Integration</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display">Are your LLM orchestration layers auditable?</h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-2xl font-sans">
                Under high-risk categories of the European Union AI Act, organizations deploying automated reasoning layers must submit detailed security conformities. EXIN AICP and the upcoming AISP certifications map directly to these legal mandates.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <button
                onClick={() => onNavigate('compliance')}
                className="bg-brand-orange hover:bg-brand-orange/95 text-white font-bold py-3.5 px-8 rounded text-xs shadow transition-colors flex items-center space-x-2"
              >
                <span>Explore AICP Compliance Program</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* AISP TIE-IN PROCTOR INFORMATION */}
      <section className="max-w-4xl mx-auto px-4 mt-20 text-center space-y-6">
        <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mx-auto border border-brand-yellow/20">
          <ShieldAlert className="h-6 w-6" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-navy">Learn the mitigation frameworks via AISP</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
          Registering early for the upcoming AI Security Professional (AISP) qualification ensures your network architects understand security auditing before live deployment.
        </p>
        <button
          onClick={() => onNavigate('aisp')}
          className="bg-brand-navy hover:bg-brand-navy/90 text-white font-bold py-3 px-8 rounded text-xs transition-colors"
        >
          View AISP Coming Soon Page →
        </button>
      </section>

    </div>
  );
}
