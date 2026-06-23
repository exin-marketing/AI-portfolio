import React, { useState } from 'react';
import { PageId } from '../types';
import { LEARNING_PATHS, EXIN_CERTS } from '../data';
import LeadForm from './LeadForm';
import { Compass, Users, ArrowRight, Sparkles, Trophy, Shuffle } from 'lucide-react';

interface LearningPathsProps {
  onNavigate: (pageId: PageId) => void;
}

export default function LearningPathsView({ onNavigate }: LearningPathsProps) {
  const [activePath, setActivePath] = useState<number>(0);

  return (
    <div id="learning-paths-container" className="bg-[#fbfcff] min-h-screen pb-20">
      
      {/* HERO HERO HERO */}
      <section className="bg-brand-navy text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs text-brand-yellow font-extrabold uppercase bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
            Empowerment Matrice
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight">
            Workforce AI Learning Paths
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            EXIN certifies specific professional career directories to ensure organizational consistency, high engineering resilience, and complete legislative conformity.
          </p>
        </div>
      </section>

      {/* CORE PATH FINDER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Menu Selection */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {LEARNING_PATHS.map((path, idx) => (
              <button
                key={idx}
                onClick={() => setActivePath(idx)}
                className={`text-left p-5 rounded-xl border transition-all flex flex-col justify-between ${
                  activePath === idx
                    ? 'bg-brand-navy border-brand-navy text-white shadow-md'
                    : 'bg-white border-gray-200 text-gray-800 hover:border-brand-blue/30 hover:bg-slate-50'
                }`}
              >
                <div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                    activePath === idx ? 'bg-brand-blue text-white' : 'bg-brand-bg text-brand-blue'
                  }`}>
                    Track {idx + 1}
                  </span>
                  <h3 className="font-extrabold text-sm sm:text-base font-display mt-2.5 leading-snug">
                    {path.title.split(': ')[1] || path.title}
                  </h3>
                  <p className={`text-[11px] sm:text-xs mt-2 font-sans line-clamp-2 ${
                    activePath === idx ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {path.subtitle}
                  </p>
                </div>
              </button>
            ))}

            <div className="bg-[#f3f9ff] text-gray-600 rounded-xl p-5 border border-brand-blue/10 text-xs sm:text-sm">
              <p className="font-bold text-brand-navy flex items-center space-x-1">
                <Shuffle className="h-4 w-4 text-brand-blue" />
                <span>Custom Pathways available</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed">
                Need to mix and match compliance modules (AICP) with systems modeling modules (ML)? Our curriculum planners can assemble unique corporate testing tracks.
              </p>
              <button
                onClick={() => {
                  const formElement = document.getElementById('paths-register-enquiry');
                  formElement?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-brand-blue font-bold hover:underline mt-3 block"
              >
                Inquire about custom curricula →
              </button>
            </div>
          </div>

          {/* Right Detailed Flow Timeline */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-gray-150 p-6 sm:p-10 shadow-sm">
            
            <div className="pb-6 border-b border-gray-100 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-navy">
                {LEARNING_PATHS[activePath].title}
              </h2>
              <p className="text-sm text-gray-500 mt-1 font-sans">
                {LEARNING_PATHS[activePath].subtitle}
              </p>
              
              <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-100 text-xs text-gray-600 mt-4 leading-normal flex items-start space-x-2">
                <Users className="h-4 w-4 text-brand-blue mt-0.5 shrink-0" />
                <span>
                  <strong className="text-brand-navy font-bold">Target Cohorts:</strong> {LEARNING_PATHS[activePath].audience}
                </span>
              </div>
            </div>

            {/* Steps Timeline view */}
            <div className="space-y-8 relative before:absolute before:inset-y-2 before:left-[19px] before:w-1 before:bg-brand-bg">
              {LEARNING_PATHS[activePath].steps.map((step, idx) => {
                const cert = EXIN_CERTS.find(c => c.id === step.certId);
                if (!cert) return null;
                
                return (
                  <div key={idx} className="relative pl-12 flex flex-col md:flex-row md:items-start gap-4">
                    
                    {/* Circle indicators */}
                    <div className="absolute left-0 top-1 h-10 w-10 rounded-full border-4 border-white bg-brand-navy text-white flex items-center justify-center font-bold text-xs. z-10 shadow-sm">
                      {idx + 1}
                    </div>

                    {/* Step description alongside Badge */}
                    <div className="flex-grow bg-slate-50/55 rounded-xl border border-gray-100 p-5 hover:border-brand-blue/20 hover:bg-slate-50 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                      <div className="space-y-2 max-w-lg">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[10px] px-2 py-0.5 rounded font-extrabold uppercase ${cert.levelColor}`}>
                            {cert.levelTag}
                          </span>
                          <span className="text-[10px] font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded">
                            {step.importance}
                          </span>
                        </div>
                        
                        <h4 className="font-extrabold text-brand-navy text-sm sm:text-base font-display">
                          {cert.name}
                        </h4>
                        
                        <p className="text-xs text-gray-600 leading-normal font-sans">
                          {step.desc}
                        </p>
                      </div>

                      {/* Right actions */}
                      <div className="flex flex-row sm:flex-col items-center gap-3 shrink-0 self-stretch justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-gray-150 pt-3 sm:pt-0 sm:pl-4.5 mt-2 sm:mt-0">
                        <img
                          src={cert.badgeUrl}
                          alt={cert.name}
                          className="h-10 w-10 object-contain rounded-xl bg-white p-1 shadow-sm border border-gray-100"
                          referrerPolicy="no-referrer"
                        />
                        <button
                          onClick={() => onNavigate(cert.id as PageId)}
                          className="text-[11px] font-bold text-brand-blue hover:underline inline-flex items-center space-x-0.5"
                        >
                          <span>Full Curriculum</span>
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

            {/* Bottom summary and next steps */}
            <div className="mt-12 bg-brand-bg rounded-xl p-5 border border-brand-blue/10 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm">
              <p className="text-gray-600 font-medium text-center sm:text-left mb-4 sm:mb-0">
                Planning wholesale pricing on exams for <strong className="text-brand-navy font-bold">10 to 500+ professionals</strong>?
              </p>
              <button
                onClick={() => {
                  const formElement = document.getElementById('paths-register-enquiry');
                  formElement?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-brand-navy hover:bg-brand-navy/95 text-white font-bold py-2.5 px-6 rounded text-xs transition-colors shrink-0"
              >
                Inquire for enterprise licensing
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* REUSABLE FORM ENQUIRY INTAKE */}
      <section id="paths-register-enquiry" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <LeadForm
          title="Deliver customized career progression tracks"
          subtitle="Submit an enquiry. Our partner planners will coordinate with your enterprise L&D lead to structure optimal exam licensing schedules."
        />
      </section>

    </div>
  );
}
