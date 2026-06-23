import React, { useState } from 'react';
import { PageId } from '../types';
import LeadForm from './LeadForm';
import {
  ShieldAlert,
  AlertTriangle,
  FileCode,
  ArrowRight,
  TrendingUp,
  Globe,
  Settings,
  Scale,
  ChevronDown
} from 'lucide-react';

interface AispViewProps {
  onNavigate: (pageId: PageId) => void;
}

export default function AispView({ onNavigate }: AispViewProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: '86%', label: 'expect operations AI transformation by 2030 (WEF)' },
    { value: 'Active', label: 'EU AI Act in force since 2024' },
    { value: 'Critical', label: 'Demand for certified AI security experts' },
    { value: 'World First', label: 'Formal AI security governance credential' }
  ];

  const valueProps = [
    {
      title: 'AI Risk Management',
      desc: 'Identify, assess, and mitigate AI-specific risks (like pipeline poisoning and model inversion) across your organisation’s infrastructure.',
      icon: <AlertTriangle className="h-6 w-6 text-brand-orange" />
    },
    {
      title: 'AI Governance',
      desc: 'Design, implement, and maintain internal governance frameworks that ensure responsible, reliable, and standardized AI deployments.',
      icon: <Settings className="h-6 w-6 text-brand-blue" />
    },
    {
      title: 'EU AI Act Compliance',
      desc: 'Navigate global AI regulations, liability frameworks, and certification conformity boundaries with confidence.',
      icon: <Scale className="h-6 w-6 text-brand-green" />
    }
  ];

  const aispFaqs = [
    {
      q: "What is AISP?",
      a: "The EXIN AI Security Professional (AISP) is the world's first formal, vendor-neutral credential designed exclusively to validate an expert's competence in governing, auditing, and protecting AI infrastructures against modern threats."
    },
    {
      q: "Who is it for?",
      a: "AISP is custom-built for CISOs, Cyber Security Managers, Information Officers, IT Auditors, Compliance Officers, and Security Architects seeking to establish corporate safety protocols around AI systems."
    },
    {
      q: "When is it available?",
      a: "The AISP certification is fully live and available for scheduling. Global test-takers can register and take exams online via our secure 24/7 EXIN Anywhere proctoring platform, with access to updated study guides, blueprints, and evaluation materials."
    },
    {
      q: "Does it cover the EU AI Act?",
      a: "Yes. AISP closely couples technical defenses with statutory directives, auditing systems specifically against the security obligations enforced by the EU AI Act."
    }
  ];

  return (
    <div id="aisp-detailed-view" className="bg-[#fafcff]">
      
      {/* 2. HERO */}
      <section className="bg-brand-navy text-white pt-16 pb-20 relative overflow-hidden">
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
              <div className="inline-flex self-center lg:self-start items-center space-x-2 bg-brand-blue/20 text-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                <span>Specialized Credential Now Active</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
                EXIN AISP — <br className="hidden sm:inline" />
                <span className="text-brand-yellow">AI Security Professional</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                The world’s first certification for professionals who govern, secure and manage AI systems. Built for CISOs, Security Managers and Compliance Officers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('aisp-form-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/95 text-white font-bold py-3.5 px-8 rounded shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Register My Interest
                </button>
                <button
                  onClick={() => onNavigate('risk-owasp')}
                  className="w-full sm:w-auto border border-white/20 hover:bg-white/5 font-semibold py-3.5 px-8 rounded transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Explore OWASP LLM Top 10</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Badge Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-yellow rounded-full filter blur-xl scale-95 opacity-20 animate-pulse" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center">
                  <img
                    src="https://cdn.prod.website-files.com/6a2a838af104f027f3776788/6a39089af7734eba5c1edcdd_AI_Security_professional_certified_by.png"
                    alt="EXIN AISP Badge"
                    className="h-48 w-48 object-contain filter drop-shadow-lg mx-auto rounded-2xl bg-white p-2.5"
                    referrerPolicy="no-referrer"
                  />
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="bg-brand-yellow text-slate-950 text-xs font-bold px-3 py-1 rounded">NOW BOOKING / ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STATS ROW */}
      <section className="bg-brand-navy border-t border-b border-white/10 text-brand-yellow font-display py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-start divide-y lg:divide-y-0 lg:divide-x divide-white/10 text-center">
            {stats.map((s, i) => (
              <div key={i} className={`pt-4 lg:pt-0 ${i === 0 ? '' : 'lg:pl-4'}`}>
                <p className="text-2xl sm:text-3.5xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs text-gray-300 mt-1 uppercase tracking-widest leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT IS AISP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/15 px-3 py-1 rounded">Moment of Truth</span>
            <h2 className="text-3xl font-extrabold font-display text-brand-navy mt-3 tracking-tight">
              Built for the moment AI security became non-negotiable
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
              Propelled by consumer-facing AI models and rapid service layer deployments, IT security faces entirely new, non-standard attack paradigms. AISP addresses these technical challenges head-on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, i) => (
              <div key={i} className="bg-[#fbfcff] hover:bg-brand-bg rounded-xl p-8 border border-gray-150 shadow-sm hover:shadow-md transition-all flex flex-col space-y-4">
                <div className="p-3 bg-white rounded-lg shadow-sm w-12 h-12 flex items-center justify-center border border-gray-100">
                  {prop.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-navy font-display">{prop.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-sans">{prop.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. OWASP TIE-IN */}
      <section className="bg-brand-bg border-t border-b border-brand-blue/10 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-blue uppercase bg-white px-3.5 py-1.5 rounded-full border shadow-sm mb-4">
            <FileCode className="h-4 w-4 shrink-0 text-brand-blue" />
            <span>Standardized Risk Matrices</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-navy tracking-tight max-w-2xl mx-auto leading-tight">
            Covers the OWASP LLM Top 10
          </h2>
          
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-sans">
            AISP is built around the real technical threats facing AI systems today — including prompt injection, data poisoning, supply chain risks and excessive agency.
          </p>

          <div className="mt-8">
            <button
              onClick={() => onNavigate('risk-owasp')}
              className="bg-brand-navy hover:bg-brand-navy/90 text-white font-bold py-3.5 px-8 rounded shadow text-sm transition-colors inline-flex items-center space-x-1"
            >
              <span>Learn more about AI Risk & OWASP</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-brand-navy">AISP Frequently Answered Concerns</h2>
            <p className="text-gray-500 text-sm mt-1">Details surrounding exam structure and launching.</p>
          </div>

          <div className="space-y-4">
            {aispFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="border border-gray-200 rounded-lg bg-[#fcfdff]">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex justify-between items-center text-brand-navy font-bold focus:outline-none hover:text-brand-blue"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-gray-400 shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-sm text-gray-600 border-t border-gray-100 bg-white leading-relaxed font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. INTEREST FORM */}
      <section id="aisp-form-section" className="bg-brand-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <LeadForm
            isAispInterest={true}
            title="Register your interest in AISP"
            subtitle="Be the first to receive updates, syllabi, beta test openings, and exclusive pre-registration discounts."
          />
        </div>
      </section>

    </div>
  );
}
