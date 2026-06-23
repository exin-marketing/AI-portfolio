import { Certification, FaqItem, CaseStudy } from './types';

export const EXIN_CERTS: Certification[] = [
  {
    id: 'essentials',
    name: 'EXIN BCS AI Essentials',
    shortDesc: 'A jargon-free introduction to AI for any professional. No technical background needed.',
    badgeUrl: 'https://cdn.prod.website-files.com/6a2a838af104f027f3776788/6a2a95660bf3f52b9dc0bb5c_exin-ai-essentials-badge.png',
    levelTag: 'Entry Level',
    levelColor: 'bg-brand-green text-white',
    longDesc: 'The EXIN BCS Artificial Intelligence Essentials certification is designed to provide candidate-level introduction to the fundamentals and implications of Artificial Intelligence. This program describes Artificial Intelligence, the potential benefits and challenges, and the ethical, legal, and standard rules associated with AI implementation.',
    targetAudience: [
      'Corporate employees across all departments (Marketing, HR, Finance)',
      'Managers seeking a solid baseline understanding of cognitive technology',
      'Individuals looking to understand how AI will reshape their daily work life'
    ],
    examInfo: {
      duration: '30 Minutes',
      questions: '20 Multiple Choice Questions (MCQ)',
      format: 'Closed-book, online proctored exam',
      passingMark: '65% (13 out of 20)',
      languages: 'English, Dutch, German, Brazilian Portuguese'
    },
    syllabusObjectives: [
      'Understand the definition, terminology, and historical roots of Artificial Intelligence (cognitive tools, weak vs. strong AI).',
      'Identify human vs. machine intelligence and describe the basic characteristics of intelligent agents.',
      'Explore the relationship between AI, Big Data, and Cloud systems.',
      'Analyze the socio-economic impacts of automation and the future of work.',
      'Apply ethical guidelines (fairness, safety, accountability) to business AI scenarios.'
    ],
    keyBenefits: [
      'Establish a universal standard vocabulary across non-technical team members.',
      'Mitigate staff resistance by demystifying AI capabilities vs. myths.',
      'Equip staff to identify low-hanging-fruit automation workflows in their own departments.'
    ]
  },
  {
    id: 'foundation',
    name: 'EXIN BCS AI Foundation',
    shortDesc: 'Deeper AI knowledge for IT and business professionals. Covers ML, intelligent systems and workplace AI.',
    badgeUrl: 'https://cdn.prod.website-files.com/6a2a838af104f027f3776788/6a2a956beae42cd68b298b99_exin-ai-foundation-badge.png',
    levelTag: 'Foundation',
    levelColor: 'bg-brand-blue text-white',
    longDesc: 'The EXIN BCS Artificial Intelligence Foundation certification tests a candidate’s knowledge of the theory, application, and governance of AI. It goes beyond awareness to explore algorithms, machine learning models, search procedures, and safety principles required to support an organisation’s IT transformation.',
    targetAudience: [
      'IT Support Executives, Business Analysts, and Software Engineers',
      'Project Managers overseeing technical teams utilizing artificial intelligence',
      'Technical Consultants advising on digitisation and data strategies'
    ],
    examInfo: {
      duration: '60 Minutes',
      questions: '40 Multiple Choice Questions (MCQ)',
      format: 'Closed-book, online proctored',
      passingMark: '65% (26 out of 40)',
      languages: 'English, Dutch, Japanese, Spanish, German'
    },
    syllabusObjectives: [
      'Deconstruct the structures of Machine Learning, Deep Learning, and Artificial Neural Networks (ANNs).',
      'Understand supervised, unsupervised, and reinforcement learning models.',
      'Execute simple search and heuristics methodologies in solving business optimization cases.',
      'Manage standard data preprocessing phases (cleaning, splitting training-test datasets).',
      'Identify risk, safety regulations (ISO/IEC 42001 alignment), and bias in datasets.'
    ],
    keyBenefits: [
      'Bridge the gap between business requirements and technical engineering execution.',
      'Confidently evaluate external software vendors claiming "AI-powered" solutions.',
      'Accelerate internal ML project delivery by understanding core model constraints.'
    ]
  },
  {
    id: 'generative-ai',
    name: 'EXIN BCS Generative AI Award',
    shortDesc: 'Master GenAI tools responsibly. Just 28 hours of study. No coding required.',
    badgeUrl: 'https://cdn.prod.website-files.com/6a2a838af104f027f3776788/6a39089ae021995a7fcdc62a_GEN%20AI.png',
    levelTag: 'Award',
    levelColor: 'bg-brand-yellow text-brand-navy font-semibold',
    longDesc: 'The EXIN BCS Generative AI Award is a targeted, application-focused credential verifying a professional’s ability to leverage Large Language Models (LLMs), text-to-image systems, and generative code partners. Emphasis is placed on engineering optimal prompts and maintaining data privacy compliance.',
    targetAudience: [
      'Content Creators, Designers, Marketers, and Business Analysts',
      'Operations Managers seeking to multiply individual contributor output',
      'Knowledge workers looking to master prompt frameworks effectively'
    ],
    examInfo: {
      duration: '45 Minutes',
      questions: '26 Multiple Choice Questions (MCQ)',
      format: 'Closed-book, multiple choice, standard proctored',
      passingMark: '65% (17 out of 26)',
      languages: 'English, German'
    },
    syllabusObjectives: [
      'Explain the underlying mechanics of generative transformers (GPT-style tokenization, self-attention).',
      'Apply advanced prompt frameworks (few-shot, chain-of-thought, role-play prompting) for consistent quality.',
      'Employ Generative AI across structured data processes, text synthesis, and multimedia creation.',
      'Identify and circumvent generative pitfalls (hallucinations, bias, copyright grey-areas).',
      'Maintain enterprise data policies by avoiding leaking IP into public, consumer-grade models.'
    ],
    keyBenefits: [
      'Achieve up to 40% efficiency gains in administrative text and report generation.',
      'Establish a formal prompt quality framework for organisational documentation.',
      'Prevent catastrophic corporate IP leaks with rigorous safety hygiene rules.'
    ]
  },
  {
    id: 'machine-learning',
    name: 'EXIN BCS Machine Learning Award',
    shortDesc: 'Practical ML knowledge covering algorithms, data processing and real-world applications.',
    badgeUrl: 'https://cdn.prod.website-files.com/6a2a838af104f027f3776788/6a39089a60934d8960c92c3d_AIF.png',
    levelTag: 'Award',
    levelColor: 'bg-brand-yellow text-brand-navy font-semibold',
    longDesc: 'This specialized award focuses on the application layer of Machine Learning. It verifies that IT staff, database administrators, and budding analysts understand how models learn from data, and can validate and deploy simple learning algorithms in business environments.',
    targetAudience: [
      'Data Coordinators, BI Analysts, Operations Officers',
      'Software developers looking to transition into machine learning logic',
      'Technical managers guiding predictive analysis initiatives'
    ],
    examInfo: {
      duration: '45 Minutes',
      questions: '26 Multiple Choice Questions (MCQ)',
      format: 'Closed-book, online proctored',
      passingMark: '65% (17 out of 26)',
      languages: 'English'
    },
    syllabusObjectives: [
      'Distinguish between regression (linear/logistic) and classification algorithms (decision trees, SVMs).',
      'Manage training bias, overfitting, and underfitting issues during development.',
      'Utilize performance indicators (precision, recall, F1-score, ROC curves) to evaluate models.',
      'Demonstrate comprehension of feature selection, cross-validation, and hyperparameter tuning.',
      'Describe neural network layers and basic deep learning configurations.'
    ],
    keyBenefits: [
      'Enable data-driven predictions on churn, sales forecasting, and stock control.',
      'Analyze analytical failures with standardized ML validation methodologies.',
      'Streamline communication with pure data science research teams.'
    ]
  },
  {
    id: 'compliance',
    name: 'EXIN AI Compliance Professional',
    shortDesc: 'Navigate the EU AI Act with confidence. For compliance officers and legal teams.',
    badgeUrl: 'https://cdn.prod.website-files.com/6a2a838af104f027f3776788/6a39089afbf903a6ea2160b2_AICP%20B.png',
    levelTag: 'Professional',
    levelColor: 'bg-brand-orange text-white',
    longDesc: 'The EXIN AI Compliance Professional (AICP) is the premier standard for practitioners charged with auditing, risk-assessing, and ensuring legislative alignment for AI platforms. Aligned fully with the landmark EU AI Act, international standards, and ISO/IEC 42001.',
    targetAudience: [
      'DPOs (Data Protection Officers), Chief Compliance Officers, Legal Counsels',
      'Risk Managers and Internal Auditors in heavily regulated sectors (Finance, Healthcare)',
      'Enterprise architects deploying automated decision-making software products'
    ],
    examInfo: {
      duration: '90 Minutes',
      questions: '40 Complex Scenario-based MCQs',
      format: 'Closed-book, advanced online proctoring with case scenarios',
      passingMark: '65% (26 out of 40)',
      languages: 'English, French, German'
    },
    syllabusObjectives: [
      'Navigate the EU AI Act risk pyramid (Prohibited practices, High-risk applications, Limited-risk disclosures).',
      'Establish a formal Artificial Intelligence Management System (AIMS) under ISO/IEC 42001.',
      'Draft conformity assessments and write Fundamental Rights Impact Assessments.',
      'Define clear lines of systemic liability between AI Providers, Deplovers, and Importers.',
      'Ensure transparency declarations and explainable AI (XAI) auditing trails.'
    ],
    keyBenefits: [
      'Insulate your enterprise from punitive non-compliance penalties reaching up to €35M or 7% of dynamic global turnover.',
      'Enable your sales team to securely leverage AI as a compliant, vetted competitive advantage.',
      'Unlock rapid deployment processes by avoiding compliance-related project bottlenecks.'
    ]
  },
  {
    id: 'aisp',
    name: 'EXIN AISP — AI Security Professional',
    shortDesc: "The world's first AI security governance certification. OWASP LLM Top 10, EU AI Act, ISO 42001.",
    badgeUrl: 'https://cdn.prod.website-files.com/6a2a838af104f027f3776788/6a39089af7734eba5c1edcdd_AI_Security_professional_certified_by.png',
    levelTag: 'Professional',
    levelColor: 'bg-brand-navy text-slate-100 font-bold border border-white/10 shadow-sm',
    longDesc: 'The EXIN AI Security Professional (AISP) is the global benchmark certification for cybersecurity professionals, CISOs, and enterprise architects engineered to cover the complete modern attack surface. By bridging deep threat mitigation (like prompt injection and data poisoning) with formal legislative standards, AISP turns reactive defense into structured governance.',
    targetAudience: [
      'CISOs, Security Directors, Incident Response Leads',
      'Cloud and Infrastructure Security Architects',
      'Security Auditors and Penetration Testers evaluating LLM integrations'
    ],
    examInfo: {
      duration: '90 Minutes',
      questions: '40 Advanced Case-study Questions',
      format: 'Closed-book, proctored (AISP is fully launched; Registrations open globally)',
      passingMark: '70% (28 out of 40)',
      languages: 'English (Launch language)'
    },
    syllabusObjectives: [
      'In-depth mastery of the OWASP Top 10 Threats for Large Language Models (Prompt Injection, Insecure Output Handling, Training Data Poisoning, etc.).',
      'Establishment of security-by-design pipelines for AI orchestration layers (Lanchain, Semantic Kernel, etc.).',
      'Vulnerability scanning and red-teaming parameters specifically crafted for neural networks.',
      'Mapping technical security policies directly to compliance matrices of the EU AI Act and ISO 42001.',
      'Continuous telemetry monitoring, logging, and security incident response parameters for generative models.'
    ],
    keyBenefits: [
      'Mitigate critical data leaks arising from prompt-based side-channel attacks.',
      'Establish an industry-standard security blueprint before connecting models to enterprise database integrations.',
      'Demonstrate premium cyber-resilience to corporate key stakeholders, clients, and underwriters.'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'q1',
    category: 'General',
    question: 'What AI certifications does EXIN offer?',
    answer: 'EXIN offers a comprehensive portfolio of six industry-aligned qualifications: AI Essentials (ideal for overall staff alignment), AI Foundation (for technical & analytical teams), Generative AI Award (for practical prompt engineering & content masters), Machine Learning Award (focused on mathematical and data-modelling pipelines), AI Compliance Professional / AICP (conforming with the EU AI Act and ISO 425001), and the advanced AISP — AI Security Professional.'
  },
  {
    id: 'q2',
    category: 'Enterprise',
    question: 'Which is best for my enterprise team?',
    answer: 'We recommend a matrixed approach to workforce empowerment: AI Essentials for general business divisions, AI Foundation for developers and systems analysts, AICP for regulatory compliance, risk, and legal experts, and the specialized AISP to secure security governance heads (CISOs and network architects).'
  },
  {
    id: 'q3',
    category: 'General',
    question: 'Are EXIN certifications globally recognised?',
    answer: 'Yes. EXIN is an independent, global IT certification body trusted in 165+ countries with over 3 million certified professionals since 1984. Our certifications are fully vendor-neutral, ensuring your staff learns fundamental principles aligned with international standards (such as ISO/IEC 42001 and the EU AI Act) rather than getting locked into proprietary vendor ecosystems.'
  },
  {
    id: 'q4',
    category: 'AISP',
    question: 'What is AISP?',
    answer: "AISP (AI Security Professional) is the world's first formal, globally recognised credential focusing exclusively on AI security governance. It unites technical risk defense (like prompt injection, model inversion, and data poisoning specified in the OWASP LLM Top 10) with corporate regulatory compliance requirements."
  },
  {
    id: 'q5',
    category: 'Partner',
    question: 'How do I become an EXIN accredited training partner?',
    answer: 'Distinguished training academies, collegiate programs, and corporate L&D agencies can elevate their status by becoming accredited training partners. To join, simply fill in the business consultation form selecting "Accredited Partner". Our onboarding team will coordinate directly to supply your complete Partner Accreditation Kit within one business day.'
  },
  {
    id: 'q6',
    category: 'Partner',
    question: 'What benefits does EXIN provide to its partners?',
    answer: 'Approved training partners receive a complete, ready-to-deliver curriculum (program guides, exam blueprints, sample exams, slides), premium marketing collateral (social packs, co-branded sheets), an automated licensing system with competitive margin shares, and a secure proctored portal for exam delivery.'
  },
  {
    id: 'q7',
    category: 'General',
    question: 'How are EXIN exams administered?',
    answer: 'Exams are taken via the EXIN Anywhere proctoring platform, allowing candidates to take their certification examinations in a secure, web-monitored environment from their office, home, or certified test centre 24/7.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apac-partner',
    title: 'APAC Partner Drives Over $140,000 in Add-on Revenue via AI Portfolios',
    organisation: 'Aegis IT Training (APAC)',
    region: 'Sydney & Singapore',
    challenge: 'Aegis IT Training faced visual margin erosion on traditional legacy infrastructure courses (COBIT, ITIL) and required a fast, highly sought-after product lineup to pitching corporate B2B clients.',
    solution: 'Integrated the 4-tier EXIN AI roadmap into their B2B Catalog. Accredited 6 trainers within 2 weeks using the EXIN ready-to-use partner materials.',
    impact: 'Enrolled 450+ professionals across 12 tier-one consulting enterprises, producing substantial high-margin add-on business within the first year of rollout.',
    quote: {
      text: "Adding EXIN AI certifications to our portfolio was one of the best decisions we made. Demand from corporate clients was immediate and onboarding took only a fraction of the time we spent with other providers.",
      author: "David Lim",
      role: "APAC Training Director & Founder"
    },
    certifiedCount: '450+',
    tags: ['Corporate Sales', 'Partner Program', 'APAC Expansion']
  },
  {
    id: 'emea-enterprise',
    title: 'Up-skilling 1,200 Multinational Professionals to Safeguard Operations',
    organisation: 'Veridian Insure (EMEA)',
    region: 'Frankfurt & Amsterdam',
    challenge: 'Unregulated employee usage of generative products threatened proprietary insurance frameworks, but standard cyber security seminars failed to address machine-specific risks.',
    solution: 'Vetted all operations heads with BCS AI Essentials, while up-skilling the systems development team with the EXIN AI Foundation exam.',
    impact: 'Reduced internal IP security incidents by 94% while actively driving operational efficiencies through safe workspace prompt methodologies.',
    quote: {
      text: "Our L&D team was impressed by how practical the certifications are. Staff actually use what they learn, bringing an instant boost in prompt security hygiene and operational confidence.",
      author: "Heike Weber",
      role: "Head of Talent & L&D Engineering"
    },
    certifiedCount: '1,200',
    tags: ['Risk Control', 'Workforce Alignment', 'InsureTech']
  },
  {
    id: 'compliance-consultancy',
    title: 'Guaranteing Conformity for a Leading Legal Tech SaaS Platform',
    organisation: 'LexMinds Systems',
    region: 'Brussels & Paris',
    challenge: 'Required rapid auditing compliance alignment ahead of the stringent enforcement phases of the European Union AI Act.',
    solution: 'Successfully certified the entire Legal and Data Governance team as EXIN AI Compliance Professionals (AICP).',
    impact: 'Established an audit-ready Artificial Intelligence Management System (AIMS) under ISO/IEC 42001, streamlining software verification processes by months.',
    quote: {
      text: "AICP gave our compliance and audit team the exact structured risk-pyramid framework and registry templates we needed to confidently certify under the strict rules of the EU AI Act.",
      author: "Stéphanie Giraud",
      role: "Chief Compliance & Legal Risk Officer"
    },
    certifiedCount: '34 Compliance Leads',
    tags: ['EU AI Act', 'ISO 42001', 'Legal Audits']
  }
];

export const LEARNING_PATHS = [
  {
    title: "Category 1: General Enterprise Enablement",
    subtitle: "Built to drive safe base adoption and productivity across non-technical departments.",
    audience: "Marketing, HR, Operations, Legal Assistants, Accountants, Executive Staff",
    steps: [
      {
        certId: "essentials",
        importance: "Core Requirement",
        desc: "Establishes standard AI lexicon, debunks automation fears, and covers data protection principles."
      },
      {
        certId: "generative-ai",
        importance: "Productivity Specialization",
        desc: "Equips business staff with immediate prompt engineering strategies while avoiding corporate asset leakage."
      }
    ]
  },
  {
    title: "Category 2: Systems & Engineering Path",
    subtitle: "Engineered to empower developers, system architects, and technical analysts to design models.",
    audience: "Software Devs, Cloud Architects, System Analysts, Big Data Consultants",
    steps: [
      {
        certId: "foundation",
        importance: "Core Architecture Requirement",
        desc: "Covers algorithmic foundations, training-test data partitioning, predictive metrics, and heuristics."
      },
      {
        certId: "machine-learning",
        importance: "Practical Implementation",
        desc: "Deepens expertise in feature tuning, overfitting controls, neural networks, and model validation."
      },
      {
        certId: "aisp",
        importance: "Advanced Cybersecurity",
        desc: "Enables cyber professionals to proactively defend models against advanced attacks like model poisonings."
      }
    ]
  },
  {
    title: "Category 3: Governance & Liability Path",
    subtitle: "Designed for regulatory gatekeepers who ensure systems are compliant, ethical, and secure.",
    audience: "DPOs, Chief Compliance Officers, Risk Officers, Board Advisors, CISOs",
    steps: [
      {
        certId: "essentials",
        importance: "Fundamentals baseline",
        desc: "Provides basic awareness of terms, bias, and ethics before proceeding to statutory studies."
      },
      {
        certId: "compliance",
        importance: "Regulatory Compliance Integration (AICP)",
        desc: "Provides total expertise in navigating the EU AI Act risk-tiers, drafting impact assessments, and conformities."
      },
      {
        certId: "aisp",
        importance: "Technical Defense Audit",
        desc: "Perfects compliance verification by auditing systems against physical or digital threat matrices."
      }
    ]
  }
];
