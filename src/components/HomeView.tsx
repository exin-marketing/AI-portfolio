import React, { useState } from 'react';
import { PageId } from '../types';
import { EXIN_CERTS } from '../data';
import LeadForm from './LeadForm';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  ShieldAlert, 
  Sparkles, 
  Lock, 
  CheckCircle, 
  Building2, 
  GraduationCap, 
  TrendingUp, 
  Award, 
  Scale, 
  CheckCircle2 
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (pageId: PageId) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedHeroCert, setSelectedHeroCert] = useState<string>('aisp');

  const selectedCertData = EXIN_CERTS.find(c => c.id === selectedHeroCert) || EXIN_CERTS.find(c => c.id === 'aisp') || EXIN_CERTS[0];

  const faqs = [
    {
      q: "What is AISP compliance and when is it available?",
      a: "The EXIN AI Security Professional (AISP) certification is the world's first AI security governance qualification. Organisations registering interest now will receive priority access to draft curriculum resources, safety frameworks, and registration slots."
    },
    {
      q: "How can my organisation certify a team at scale?",
      a: "We offer tailored B2B bulk licensing programs. Our team will coordinate directly with your L&D leads to schedule secure proctored exams through our automated platform."
    },
    {
      q: "Which certification should we choose for EU AI Act obligations?",
      a: "For legally binding regulatory requirements, the EXIN AI Compliance Professional (AICP) is structured for legal, compliance, and risk teams. For operational teams, AI Essentials establishes general baseline standards."
    },
    {
      q: "How does our company become an Accredited Training Partner?",
      a: "Eligible colleges, bootcamps, and training corporations can complete the partnership form. We supply complete turnkey curricula, slide decks, evaluation checklists, and wholesale pricing frameworks."
    },
    {
      q: "Are these credentials standard across global markets?",
      a: "Yes, EXIN certifications are globally recognized and fully vendor-neutral. They are actively adopted across EMEA, the Americas, and APAC regions as the leading independent assessment standard."
    }
  ];

  const testimonials = [
    {
      quote: "Adding EXIN AI certifications to our academy has allowed us to win multiple high-value enterprise accounts. The corporate appetite for objective, vendor-neutral credentials has increased exponentially across APAC.",
      role: "Managing Director",
      details: "APAC Accredited Training Partner"
    },
    {
      quote: "We unified our business division's competence in ethical generative tooling in a matter of weeks. The curriculum provided immediate, practical risk prevention.",
      role: "Vice President of Talent & L&D",
      details: "Global Logistics Corporation, EMEA"
    },
    {
      quote: "AICP supplied our internal risk and legal committee with a rigorous compliance roadmap. It turned abstract EU AI Act standards into practical, auditable skills.",
      role: "Chief Compliance Officer",
      details: "Financial Services Conglomerate, Europe"
    }
  ];

  const trustBarItems = [
    { label: '3M+', desc: 'Certified Professionals' },
    { label: '165+', desc: 'Countries Mapped' },
    { label: '300+', desc: 'Accredited Partners' },
    { label: 'Vendor Neutral', desc: 'Industry Standard' }
  ];

  // Helper mapping to display cards explicitly styled as B2B descriptions matching specs
  const cardCustomContent = [
    {
      id: 'essentials',
      name: 'EXIN BCS Artificial Intelligence Essentials',
      levelTag: 'Entry Level',
      levelColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      desc: 'For operational personnel across HR, Compliance, Finance, and Marketing departments. Establishes safe AI baseline usage and alleviates risk across general business functions.',
      ctaText: 'Get this for your team →'
    },
    {
      id: 'foundation',
      name: 'EXIN BCS Artificial Intelligence Foundation',
      levelTag: 'Foundation',
      levelColor: 'bg-blue-100 text-blue-800 border-blue-200',
      desc: 'For IT administrators, product managers, and systems analysis directors. Builds technical system alignment and covers structural AI modeling methodologies.',
      ctaText: 'Get this for your team →'
    },
    {
      id: 'generative-ai',
      name: 'EXIN BCS Generative AI Award',
      levelTag: 'Award',
      levelColor: 'bg-amber-100 text-amber-800 border-amber-200',
      desc: 'For corporate builders, knowledge specialists, and prompt-reliant divisions. Focuses on safe, productive prompt engineering frameworks without requiring programming knowledge.',
      ctaText: 'Get this for your team →'
    },
    {
      id: 'machine-learning',
      name: 'EXIN BCS Machine Learning Award',
      levelTag: 'Award',
      levelColor: 'bg-amber-100 text-amber-800 border-amber-200',
      desc: 'For technical engineers, analysts, and project supervisors. Provides hands-on machine learning mechanics and algorithm implementation benchmarks.',
      ctaText: 'Get this for your team →'
    },
    {
      id: 'compliance',
      name: 'EXIN AI Compliance Professional (AICP)',
      levelTag: 'Professional',
      levelColor: 'bg-orange-100 text-orange-855 border-orange-200',
      desc: 'For corporate legal officers, corporate risk advisors, and compliance managers. Mapped directly onto EU AI Act obligations to secure product lifecycle approval.',
      ctaText: 'Get this for your team →'
    },
    {
      id: 'aisp',
      name: 'EXIN AISP — AI Security Professional',
      levelTag: 'Coming Soon 🔐',
      levelColor: 'bg-indigo-900 text-indigo-100 border-indigo-750',
      desc: 'The premier global security certification focusing on OWASP LLM Top 10 vulnerabilities, EU AI Act obligations, and ISO/IEC 42001 architecture framework models.',
      ctaText: "Register your organisation's interest →"
    }
  ];

  return (
    <div id="home-view-container" className="flex flex-col min-h-screen">
      
      {/* SECTION 1 — HERO */}
      <section id="homepage-hero" className="bg-brand-navy text-white pt-16 pb-20 relative overflow-hidden">
        {/* Subtle Diagonal Lines Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
              <div className="inline-flex self-center lg:self-start items-center space-x-2 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest leading-none">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
                <span>PIONEERING INDEPENDENT AI Security CREDENTIALS</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display leading-[1.12] text-white">
                Enterprise AI Security <br />
                <span className="text-brand-blue">Governance is Now</span> Non-Negotiable
              </h1>
              
              <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
                Artificial intelligence systems are being deployed faster than they can be secured, leaving organisations vulnerable to regulatory penalties and systemic threats. EXIN delivers the global benchmark with the AI Security Professional (AISP) standard.
              </p>

              {/* B2B Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => {
                    const formElement = document.getElementById('enquiry-form-section');
                    formElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/95 text-white font-bold px-7 py-3.5 rounded text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center space-x-1.5 shadow-md shadow-brand-orange/10"
                >
                  <span>Register Your Organisation's Interest</span>
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('cert-portfolio-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold px-7 py-3.5 rounded text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center space-x-1"
                >
                  <span>Certify Your Team</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Regulatory Urgency Note */}
              <div className="text-slate-400 text-xs mt-2 flex items-center justify-center lg:justify-start space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span>The EU AI Act compliance timelines are now active. Prepare your workforce immediately.</span>
              </div>
            </div>

            {/* Right Column Showcase - High Contrast Interactive Explorer */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-md w-full bg-white rounded-xl p-5 shadow-2xl border border-gray-150 text-left text-slate-800">
                <div className="mb-4">
                  <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider font-display">
                    Interactive Portfolio Alignment
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    Select a badge below to map the underlying operational competence parameters:
                  </p>
                </div>

                {/* 3x2 Grid using Pristine rounded-xl frame structures */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {EXIN_CERTS.map((cert) => {
                    const isSelected = selectedHeroCert === cert.id;
                    return (
                      <button
                        key={cert.id}
                        onClick={() => setSelectedHeroCert(cert.id)}
                        className={`group relative flex flex-col items-center justify-center p-2 rounded-xl transition-all border ${
                          isSelected
                            ? 'bg-brand-bg border-brand-blue ring-2 ring-brand-blue/15'
                            : 'bg-slate-50 hover:bg-slate-100 border-gray-200'
                        }`}
                      >
                        {/* Perfect High Contrast Rounded Frame for Badges without clipping */}
                        <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-white p-1 border border-gray-150 shadow-sm transition-transform group-hover:scale-105">
                          <img
                            src={cert.badgeUrl}
                            alt={cert.name}
                            className="h-full w-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-[9px] font-extrabold text-center mt-1.5 leading-tight truncate w-full text-slate-600 group-hover:text-brand-navy">
                          {cert.id === 'generative-ai' ? 'Gen AI Award' : cert.id === 'machine-learning' ? 'ML Award' : cert.name.replace('EXIN BCS ', '').replace('EXIN ', '')}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Cert Details Preview Block */}
                <div className="bg-slate-50 rounded-xl p-4 border border-gray-150">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] px-2.5 py-0.5 rounded font-extrabold uppercase tracking-wider bg-brand-navy text-white">
                      {selectedCertData.levelTag}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider">Independent standard</span>
                  </div>

                  <h4 className="font-bold text-brand-navy text-sm font-display leading-tight line-clamp-1">
                    {selectedCertData.name}
                  </h4>
                  
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed font-sans min-h-[54px]">
                    {selectedCertData.shortDesc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-[11px]">
                    <div className="text-slate-500 font-medium">
                      <span>Evaluation: </span>
                      <strong className="text-slate-800 font-bold">{selectedCertData.examInfo.questions} questions</strong>
                    </div>
                    <button
                      onClick={() => onNavigate(selectedCertData.id as PageId)}
                      className="text-xs font-bold text-brand-blue hover:text-brand-blue/85 inline-flex items-center space-x-0.5"
                    >
                      <span>Program details</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          {/* Trust Bar below hero */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="text-[10px] font-bold text-center uppercase tracking-widest text-slate-400 mb-6">
              Empowering global technological benchmarks in 165+ countries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {trustBarItems.map((item, index) => (
                <div key={index} className="text-center py-4 bg-white/5 border border-white/10 rounded-xl">
                  <p className="text-xl sm:text-2xl font-extrabold text-brand-blue font-display leading-none">{item.label}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1.5 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 — AISP LAUNCH FEATURE */}
      <section id="aisp-launch-feature" className="bg-brand-navy text-white border-t border-white/5 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-brand-blue/10 via-[#002a5a]/20 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <div className="inline-flex self-start items-center space-x-2 bg-brand-orange/15 border border-brand-orange/20 text-brand-orange px-3.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                <span>NOW ACTIVE — THE NEW GLOBAL BENCHMARK</span>
              </div>
              
              <h2 className="text-2xl sm:text-4.5xl font-extrabold font-display leading-[1.2] text-white">
                The Definitive Security Governance Standard for Enterprise AI Systems
              </h2>
              
              {/* 3 Key Points */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <span className="h-5.5 w-5.5 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 font-extrabold text-xs">1</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">OWASP LLM Top 10 Mitigation</h4>
                    <p className="text-slate-300 text-xs sm:text-sm mt-0.5 leading-relaxed">Equips teams with practical defensive measures against critical prompt injections, data poisoning, and model safety vulnerabilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3.5">
                  <span className="h-5.5 w-5.5 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 font-extrabold text-xs">2</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Formal Regulatory Alignment</h4>
                    <p className="text-slate-300 text-xs sm:text-sm mt-0.5 leading-relaxed">Built to satisfy compliance obligations under the EU AI Act frameworks and ISO/IEC 42001 system standardizations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <span className="h-5.5 w-5.5 rounded bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 font-extrabold text-xs">3</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Engineered for Leadership</h4>
                    <p className="text-slate-300 text-xs sm:text-sm mt-0.5 leading-relaxed">Designed for senior cybersecurity champions, compliance officers, and infrastructure architects.</p>
                  </div>
                </div>
              </div>

              {/* Target Roles Tags */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] text-slate-450 uppercase font-bold tracking-wider block mb-2.5">Target Business Roles:</span>
                <div className="flex flex-wrap gap-2">
                  {['CISO', 'Security Manager', 'Compliance Officer', 'AI Governance Lead', 'IT Risk Manager'].map((role, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 text-xs px-3 py-1 rounded font-medium text-slate-300">{role}</span>
                  ))}
                </div>
              </div>

              {/* Urgency and CTA */}
              <div className="pt-4 space-y-4">
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  With EU AI Act binding requirements in effect, reactive defense is no longer a viable corporate strategy. Certified AI security experts are already in critical shortage as model threats rise exponentially.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    onClick={() => {
                      const el = document.getElementById('enquiry-form-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-brand-orange hover:bg-brand-orange/95 text-white font-bold px-8 py-3.5 rounded text-xs uppercase tracking-wider transition-colors inline-block"
                  >
                    Register Your Organisation's Interest
                  </button>
                  <span className="text-slate-400 text-xs max-w-xs leading-normal">
                    Get early access to draft blueprints, evaluations, and implementation checklists.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Display Badge Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-blue/25 rounded-2xl blur-2xl transform scale-90 pointer-events-none" />
                <div className="relative bg-[#001f44] border border-white/10 rounded-2xl p-8 max-w-sm text-center">
                  <img
                    src="https://cdn.prod.website-files.com/6a2a838af104f027f3776788/6a39089af7734eba5c1edcdd_AI_Security_professional_certified_by.png"
                    alt="EXIN AISP Logo"
                    className="h-44 w-44 mx-auto object-contain bg-white rounded-xl p-3 shadow-xl border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
                    <p className="font-extrabold uppercase tracking-widest text-[#f5ba30] text-[10px]">Flagship Certification</p>
                    <p className="font-medium mt-1">Directly incorporating compliance validations for ISO 42001 and OWASP frameworks.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Regulatory Trust Bar at the very bottom of Launch section */}
          <div className="mt-16 pt-8 border-t border-white/10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs font-bold uppercase tracking-wider text-slate-350">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                <span>EU AI Act Cybersecurity Obligations</span>
              </div>
              <div className="flex items-center justify-center space-x-2 border-t sm:border-t-0 sm:border-l sm:border-r border-white/10 py-3 sm:py-0">
                <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                <span>OWASP LLM Top 10 Safeguards</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                <span>ISO/IEC 42001 Framework Models</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 — REGULATORY URGENCY STRIP */}
      <section id="regulatory-urgency-strip" className="bg-brand-blue text-white py-4.5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <p className="text-xs sm:text-sm font-semibold tracking-wide font-sans">
            As EU AI Act enforcement deadlines draw closer, organisations must secure their operational pipelines with verified specialists.
          </p>
          <button
            onClick={() => onNavigate('aisp')}
            className="text-xs sm:text-sm font-extrabold text-brand-yellow hover:underline flex items-center space-x-0.5 whitespace-nowrap focus:outline-none"
          >
            <span>See how AISP addresses this</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      {/* SECTION 4 — AI CERTIFICATION PORTFOLIO */}
      <section id="cert-portfolio-section" className="bg-[#f3f9ff] py-20 border-b border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-blue bg-blue-100/50 border border-brand-blue/15 px-3 py-1 rounded">
              COMPLETE PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-extrabold font-display text-brand-navy tracking-tight mt-3">
              Empower Your Entire Organisation with Verified AI Skills
            </h2>
            <p className="text-slate-650 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              From operational staff to senior cybersecurity architects, EXIN provides a comprehensive alignment matrix. The flagship AISP standard forms the peak of AI safety and governance.
            </p>
          </div>

          {/* 3x2 Grid for Certs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardCustomContent.map((item) => {
              const isComingSoon = item.id === 'aisp';
              const certOriginData = EXIN_CERTS.find(c => c.id === item.id) || EXIN_CERTS[0];
              
              return (
                <div
                  key={item.id}
                  className={`group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-150 p-6 relative ${
                    isComingSoon ? 'ring-2 ring-indigo-900 shadow-indigo-900/5 bg-[#fafbff]' : ''
                  }`}
                >
                  {/* Badge & Level Frame */}
                  <div className="flex items-start justify-between mb-5">
                    <span className={`text-[10px] px-2.5 py-1 rounded font-extrabold uppercase tracking-wide border ${item.levelColor}`}>
                      {item.levelTag}
                    </span>
                    <div className="h-16 w-16 shrink-0 flex items-center justify-center rounded-xl bg-white border border-gray-150 shadow-sm p-1.5 transform group-hover:scale-105 transition-transform">
                      <img
                        src={certOriginData.badgeUrl}
                        alt={`${item.name} Badge`}
                        className="h-full w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-grow">
                    <h3 className="text-base sm:text-lg font-bold font-display leading-tight text-brand-navy group-hover:text-brand-blue transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-605 mt-3 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(item.id as PageId)}
                      className={`text-xs font-extrabold inline-flex items-center space-x-1 hover:underline focus:outline-none ${
                        isComingSoon ? 'text-indigo-999' : 'text-brand-blue'
                      }`}
                    >
                      <span>{item.ctaText}</span>
                    </button>
                    {!isComingSoon && (
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Active Standard</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Master Roadmap Config button */}
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('portfolio')}
              className="bg-brand-blue hover:bg-brand-blue/95 text-white font-bold px-8 py-3.5 rounded text-xs uppercase tracking-wider shadow-sm transition-colors"
            >
              Configure Master AI Roadmap
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 5 — TWO AUDIENCE PATHS */}
      <section id="audience-paths" className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-navy bg-slate-100 border border-gray-200 px-3 py-1 rounded">
              B2B ENGAGEMENT PIPELINES
            </span>
            <h2 className="text-3xl font-extrabold font-display text-brand-navy mt-3 tracking-tight">
              Select Your Alignment Pathway
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              We offer designated support channels optimized for enterprise deployment and educational growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Enterprise Teams */}
            <div className="bg-[#fcfdff] border border-gray-150 rounded-2xl p-8 flex flex-col justify-between hover:border-brand-blue/35 transition-all">
              <div>
                <div className="h-10 w-10 rounded bg-blue-100 flex items-center justify-center text-brand-blue mb-5">
                  <Building2 className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-xl font-bold font-display text-brand-navy">Certify Your Enterprise Team</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-sans">
                  AI adoption is outpacing governance. L&D, HR, and compliance leaders must rapidly align teams to prevent compliance breaches.
                </p>
                
                <ul className="mt-6 space-y-3">
                  {[
                    "Standardise baseline AI intelligence across all business functions",
                    "Mitigate regulatory liability with verified EU AI Act compliance paths",
                    "Establish a culture of safe, productive, and documented AI utilization"
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mr-2 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    const el = document.getElementById('enquiry-form-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-brand-navy hover:bg-brand-navy/95 text-white font-bold py-3 px-6 rounded text-xs uppercase tracking-wider transition-colors"
                >
                  Request Volume Licensing Proposals
                </button>
              </div>
            </div>

            {/* Card 2: Training Partners & Academic Institutions */}
            <div className="bg-[#fcfdff] border border-gray-150 rounded-2xl p-8 flex flex-col justify-between hover:border-brand-blue/35 transition-all">
              <div>
                <div className="h-10 w-10 rounded bg-amber-100 flex items-center justify-center text-brand-yellow mb-5">
                  <GraduationCap className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-xl font-bold font-display text-brand-navy">Expand Your Training Portfolio with EXIN</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-sans">
                  Your clients are actively seeking certified AI credentials. Stop losing business to makeshift courses and offer globally respected standards.
                </p>
                
                <ul className="mt-6 space-y-3">
                  {[
                    "Access turnkey curriculum slides, guides, mock exams, and resources",
                    "Leverage high-margin wholesale structures on exam licensing",
                    "Establish market leadership in the fast-growing corporate AI space"
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mr-2 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100">
                <button
                  onClick={() => onNavigate('partner')}
                  className="w-full border-2 border-brand-blue hover:bg-brand-blue/5 text-brand-blue font-bold py-3 px-6 rounded text-xs uppercase tracking-wider transition-all"
                >
                  Become an Accredited Partner
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — STATS */}
      <section id="homepage-stats" className="bg-brand-navy text-white py-16 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">CREDIBILITY MATRIX</h3>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white mt-1.5">
              Validated Credibility Mapped at Global Scale
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4.5xl font-extrabold text-brand-yellow font-display leading-none">3M+</span>
              <span className="text-[10px] sm:text-xs text-slate-350 font-bold mt-2 uppercase tracking-widest max-w-[150px] mx-auto">
                Certified Professionals Empowered Globally
              </span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4.5xl font-extrabold text-brand-blue font-display leading-none">165+</span>
              <span className="text-[10px] sm:text-xs text-slate-350 font-bold mt-2 uppercase tracking-widest max-w-[150px] mx-auto">
                Countries with Active EXIN frameworks
              </span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4.5xl font-extrabold text-brand-green font-display leading-none">300+</span>
              <span className="text-[10px] sm:text-xs text-slate-350 font-bold mt-2 uppercase tracking-widest max-w-[150px] mx-auto">
                Accredited Training Partners
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4.5xl font-extrabold text-brand-orange font-display leading-none">6</span>
              <span className="text-[10px] sm:text-xs text-slate-350 font-bold mt-2 uppercase tracking-widest max-w-[150px] mx-auto">
                Aligned AI Credentials In Portfolio
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section id="homepage-testimonials" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 border border-blue-100 rounded">
              VERIFIED IMPACT
            </span>
            <h2 className="text-3xl font-extrabold font-display text-brand-navy mt-3 tracking-tight">
              Corporate Outcomes Built on Verified Standards
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              See how corporate training networks and L&D pipelines utilize our certification models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="flex flex-col bg-slate-50 rounded-xl p-6 border border-slate-150 hover:border-brand-blue/20 transition-all text-left relative"
              >
                <div className="text-brand-blue/30 text-5xl font-serif absolute -top-1 left-3.5 pointer-events-none select-none">“</div>
                
                <div className="flex-grow pt-4">
                  <p className="text-slate-700 italic text-xs sm:text-sm leading-relaxed relative z-10">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-xs sm:text-sm font-bold text-brand-navy">{t.role}</p>
                  <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">{t.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('case-studies')}
              className="text-xs sm:text-sm font-bold text-brand-blue inline-flex items-center space-x-1 hover:underline"
            >
              <span>Read complete customer success stories</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section id="homepage-faq" className="bg-[#fcfdfd] py-20 border-t border-b border-gray-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">KNOWLEDGE BASE</span>
            <h2 className="text-3xl font-extrabold font-display text-brand-navy tracking-tight mt-1.5">
              Enterprise & Partner FAQ
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              Brief, direct explanations concerning our deployment models and learning paths.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 transition-all overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-brand-blue focus:outline-none transition-colors"
                  >
                    <span className="text-xs sm:text-sm pr-4 leading-normal font-display">{faq.q}</span>
                    <ChevronDown className={`h-4.5 w-4.5 text-slate-400 transform transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 border-t border-gray-100 bg-[#fbfcff] leading-relaxed font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('faqs')}
              className="text-xs font-bold text-brand-blue hover:underline bg-[#f3f9ff] px-4 py-2 rounded-lg border border-brand-blue/15 shadow-sm"
            >
              View All Categorized FAQs →
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 9 — LEAD FORM */}
      <section id="enquiry-form-section" className="bg-brand-navy py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <LeadForm 
            title="Secure Your Enterprise AI Governance Strategy Today"
            subtitle="Whether you are looking to certify your organisation's workforce or expand your training academy's portfolio as an accredited partner, our managers will contact you within one business day."
          />
        </div>
      </section>

    </div>
  );
}
