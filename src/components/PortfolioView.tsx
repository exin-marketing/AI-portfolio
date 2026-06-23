import React, { useState } from 'react';
import { PageId } from '../types';
import { EXIN_CERTS } from '../data';
import LeadForm from './LeadForm';
import { Award, Layers, ArrowRight, BrainCircuit, ShieldAlert, Sparkles, Sliders, CheckCircle, ChevronDown } from 'lucide-react';

interface PortfolioProps {
  onNavigate: (pageId: PageId) => void;
}

export default function PortfolioView({ onNavigate }: PortfolioProps) {
  const [selectedProfile, setSelectedProfile] = useState<string>('all');
  
  // Interactive Diagnostic state
  const [diagnosticAudience, setDiagnosticAudience] = useState<string>('');
  const [diagnosticTechLevel, setDiagnosticTechLevel] = useState<string>('');
  const [diagnosticResult, setDiagnosticResult] = useState<any | null>(null);

  const filters = [
    { id: 'all', label: 'All Certifications' },
    { id: 'entry', label: 'Entry & Literacy' },
    { id: 'developer', label: 'Technical & Developers' },
    { id: 'governance', label: 'Governance & Audits' }
  ];

  const filteredCerts = EXIN_CERTS.filter(cert => {
    if (selectedProfile === 'all') return true;
    if (selectedProfile === 'entry') return ['essentials', 'generative-ai'].includes(cert.id);
    if (selectedProfile === 'developer') return ['foundation', 'machine-learning', 'aisp'].includes(cert.id);
    if (selectedProfile === 'governance') return ['compliance', 'aisp'].includes(cert.id);
    return true;
  });

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!diagnosticAudience || !diagnosticTechLevel) return;

    let pathTitle = "";
    let certChain: string[] = [];
    let priorityFocus = "";

    if (diagnosticAudience === 'business') {
      pathTitle = "Enterprise AI Literacy & Productivity Course";
      certChain = ['essentials', 'generative-ai'];
      priorityFocus = "Equipping staff with non-coding text tools and general automated compliance safety to protect intellectual property.";
    } else if (diagnosticAudience === 'engineering') {
      pathTitle = "Systems Integration & Modelling Path";
      certChain = (diagnosticTechLevel === 'expert') ? ['foundation', 'machine-learning', 'aisp'] : ['foundation', 'machine-learning'];
      priorityFocus = "Building model orchestration pipelines, validating predictive indicators, and defending models from mechanical failures.";
    } else {
      pathTitle = "Risk Audit & Legal Compliance Path";
      certChain = ['essentials', 'compliance'];
      if (diagnosticTechLevel === 'expert') {
        certChain.push('aisp');
      }
      priorityFocus = "Preparing conformity maps under the European Union AI Act and establishing ISO 42001 governance management frameworks (AIMS).";
    }

    setDiagnosticResult({
      title: pathTitle,
      certChain,
      priorityFocus
    });
  };

  return (
    <div id="portfolio-master-view" className="bg-[#fcfdfe] min-h-screen pb-20">
      
      {/* 2. HERO */}
      <section className="bg-brand-navy text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs text-brand-yellow font-extrabold uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            EXIN Global IT Standards
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight">
            EXIN 6-Tier AI Portfolio
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From basic digital literacy to highly technical defense and litigation audits. Select a profile below or try our interactive pathways generator.
          </p>
        </div>
      </section>

      {/* THREE-COLUMN GRAPHICAL MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-xl border border-gray-150 p-6 sm:p-10 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-navy text-center mb-8">
            The Complete AI Competency Matrix
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            
            {/* Column 1 */}
            <div className="pt-6 md:pt-0 pb-6 md:pb-0 md:px-4">
              <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded">Level 1: Literacy & Prompting</span>
              <h3 className="text-base font-bold text-brand-navy font-display mt-3">Universal Business Capability</h3>
              <p className="text-xs text-gray-500 mt-1 mb-4 leading-normal">Required for all staff handling corporate databases or text assets.</p>
              
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />
                  <span>Jargon-free AI terminology mapping</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />
                  <span>Responsible, non-leakage prompt frameworks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />
                  <span>Basics of algorithmic biases and privacy</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="pt-6 pb-6 md:py-0 md:px-6">
              <span className="text-xs font-bold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded">Level 2: Systems Modeling</span>
              <h3 className="text-base font-bold text-brand-navy font-display mt-3">Engineering & Data Modeling</h3>
              <p className="text-xs text-gray-500 mt-1 mb-4 leading-normal">Tailored for IT teams building predictive software packages.</p>
              
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>Supervised, reinforcement, and tree algorithms</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>Validation indicators (F1, Precision-Recall)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>Optimizing parameters & cleaning training bases</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="pt-6 pb-6 md:py-0 md:px-6">
              <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded">Level 3: Safe Governance</span>
              <h3 className="text-base font-bold text-brand-navy font-display mt-3">Legal Conformity & Cybersecurity</h3>
              <p className="text-xs text-gray-500 mt-1 mb-4 leading-normal">Engineered for regulatory gatekeepers, CISOs, and legal councils.</p>
              
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Conformity files for EU AI Act high-risk tiers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Mitigating OWASP LLM prompt injections</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Designing ISO 42001 governance systems (AIMS)</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FILTER DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center md:text-left md:flex items-center justify-between mb-8 pb-4 border-b border-gray-150">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-navy">Explore Certifications Directory</h2>
            <p className="text-sm text-gray-500 mt-1">Filtering matches across specialized functional requirements.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 justify-center">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setSelectedProfile(f.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all border ${
                  selectedProfile === f.id
                    ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-blue/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert) => {
            const isAisp = cert.id === 'aisp';
            return (
              <div
                key={cert.id}
                className={`bg-white rounded-xl border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all p-6 flex flex-col justify-between ${
                  isAisp ? 'ring-2 ring-brand-navy' : ''
                }`}
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className={`text-[10px] px-2.5 py-0.5 rounded font-bold uppercase ${cert.levelColor}`}>
                      {cert.levelTag}
                    </span>
                    <img
                      src={cert.badgeUrl}
                      alt={cert.name}
                      className="h-12 w-12 object-contain bg-white rounded-xl p-0.5 shadow-sm border border-gray-50"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <h3 className="text-base font-bold text-brand-navy font-display mt-4 leading-snug">{cert.name}</h3>
                  <p className="text-xs text-gray-600 font-sans mt-3 leading-relaxed">{cert.shortDesc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(cert.id)}
                    className="text-xs font-bold text-brand-blue hover:underline flex items-center space-x-1"
                  >
                    <span>Program Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                  <span className="text-[10px] text-gray-400 font-medium">Accredited BCS Portfolio</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DYNAMIC PATHWAY GENERATOR WIDGET (B2B Evaluation Quiz) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-20">
        <div className="bg-gradient-to-br from-[#113155] to-brand-navy text-white rounded-xl p-6 sm:p-10 shadow-xl border border-white/10">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-1 bg-brand-yellow/15 text-brand-yellow px-3 py-1 rounded-full text-xs font-semibold mb-3">
              <Sliders className="h-3 w-3" />
              <span>Interactive Strategic Planner</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">B2B AI Alignment Pathway Evaluator</h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-1">
              Select your organisation’s target variables below to instantly model an optimized workforce certification track.
            </p>
          </div>

          <form onSubmit={handleEvaluate} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-widest mb-3">
                  1. Staff Workload / Mission Area:
                </label>
                <div className="flex flex-col space-y-2">
                  {[
                    { val: 'business', label: 'Commercial staff (Adoption & Efficiency)' },
                    { val: 'engineering', label: 'IT Solutions, SysOps & DBAs (Modeling)' },
                    { val: 'audit', label: 'Risk Officers, Audit & Legal (Governance)' }
                  ].map(option => (
                    <label
                      key={option.val}
                      className={`flex items-center space-x-3 p-3 rounded border text-xs cursor-pointer transition-colors ${
                        diagnosticAudience === option.val
                          ? 'bg-brand-blue/20 border-brand-blue text-white'
                          : 'bg-white/5 border-white/10 text-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="da"
                        required
                        checked={diagnosticAudience === option.val}
                        onChange={() => {
                          setDiagnosticAudience(option.val);
                          setDiagnosticResult(null);
                        }}
                        className="text-brand-blue bg-neutral-800 border-neutral-700 focus:ring-brand-blue h-3.5 w-3.5"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-widest mb-3">
                  2. Required Technical Depth Level:
                </label>
                <div className="flex flex-col space-y-2">
                  {[
                    { val: 'standard', label: 'Standard Practitioners / Generalists' },
                    { val: 'expert', label: 'Advanced Architects / Specialized Inspectors' }
                  ].map(option => (
                    <label
                      key={option.val}
                      className={`flex items-center space-x-3 p-3 rounded border text-xs cursor-pointer transition-colors ${
                        diagnosticTechLevel === option.val
                          ? 'bg-brand-blue/20 border-brand-blue text-white'
                          : 'bg-white/5 border-white/10 text-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="dt"
                        required
                        checked={diagnosticTechLevel === option.val}
                        onChange={() => {
                          setDiagnosticTechLevel(option.val);
                          setDiagnosticResult(null);
                        }}
                        className="text-brand-blue bg-neutral-800 border-neutral-700 focus:ring-brand-blue h-3.5 w-3.5"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center pt-2">
              <button
                type="submit"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3 px-8 rounded text-sm shadow transition-colors block w-full sm:w-auto"
              >
                Generate Recommended Blueprint
              </button>
            </div>
          </form>

          {/* Diagnostic Result */}
          {diagnosticResult && (
            <div className="mt-8 p-6 bg-white text-gray-800 rounded-xl border border-brand-blue/15 animate-in slide-in-from-bottom-2 duration-150">
              <h3 className="text-base sm:text-lg font-bold text-brand-navy flex items-center space-x-2">
                <BrainCircuit className="h-5 w-5 text-brand-blue shrink-0" />
                <span>Recommended Course of Study:</span>
              </h3>
              
              <p className="text-sm font-extrabold text-brand-blue italic mt-2">
                {diagnosticResult.title}
              </p>

              <p className="text-xs text-gray-600 mt-2 bg-slate-50 p-3 rounded border leading-relaxed">
                <strong className="text-brand-navy">Focus Priority:</strong> {diagnosticResult.priorityFocus}
              </p>

              {/* Stack Timeline */}
              <div className="mt-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Suggested Study Sequence:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {diagnosticResult.certChain.map((cid: string, index: number) => {
                    const matched = EXIN_CERTS.find(c => c.id === cid);
                    if (!matched) return null;
                    return (
                      <div
                        key={cid}
                        onClick={() => onNavigate(matched.id as PageId)}
                        className="p-3 bg-brand-bg hover:bg-brand-blue/10 rounded-lg border border-brand-blue/5 hover:border-brand-blue cursor-pointer transition-all text-center flex flex-col items-center group relative"
                      >
                        <div className="absolute top-1.5 left-2 h-4 w-4 rounded-full bg-brand-blue text-white flex items-center justify-center text-[10px] font-bold">
                          {index + 1}
                        </div>
                        <img
                          src={matched.badgeUrl}
                          alt={matched.name}
                          className="h-10 w-10 object-contain rounded-xl my-2 bg-white p-1 shadow-sm"
                        />
                        <p className="text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors text-center line-clamp-1">
                          {matched.name.replace('EXIN BCS ', '')}
                        </p>
                        <span className="text-[10px] text-gray-500 font-semibold mt-1">({matched.levelTag})</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-150 flex flex-col sm:flex-row items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">Enterprise licensing programs available.</span>
                <button
                  onClick={() => {
                    const el = document.getElementById('portfolio-register-enquiry');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-brand-blue font-bold hover:underline flex items-center space-x-1 mt-2 sm:mt-0"
                >
                  <span>Request enterprise curriculum pricing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* REUSABLE FORM ENQUIRY INTAKE */}
      <section id="portfolio-register-enquiry" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <LeadForm
          title="Customise your team's certification schedule"
          subtitle="Submit an enquiry. Our enterprise account consultants will coordinate direct curriculum mapping sessions with your L&D teams."
        />
      </section>

    </div>
  );
}
