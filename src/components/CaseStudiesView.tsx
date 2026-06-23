import React from 'react';
import { PageId } from '../types';
import { CASE_STUDIES } from '../data';
import { Award, Layers, Quote, ArrowRight, CheckCircle, Flame, Building2, Globe } from 'lucide-react';

interface CaseStudiesProps {
  onNavigate: (pageId: PageId) => void;
}

export default function CaseStudiesView({ onNavigate }: CaseStudiesProps) {
  return (
    <div id="case-studies-master-container" className="bg-[#fbfcff] min-h-screen pb-20">
      
      {/* HERO HERO HERO */}
      <section className="bg-brand-navy text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs text-brand-yellow font-extrabold uppercase bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
            Real Customer Outcomes
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight">
            Enterprise Success Stories
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            See how worldwide systems training academies, financial operators, and compliance SaaS providers deploy EXIN portfolios to scale capability and mitigate liabilities.
          </p>
        </div>
      </section>

      {/* CORE Bento GRID LAYOUT OF PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {CASE_STUDIES.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-gray-150 shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left metadata / visual statistics */}
                <div className="lg:col-span-4 bg-brand-navy/5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-150">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(t => (
                        <span key={t} className="text-[10px] text-brand-navy bg-brand-blue/10 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-brand-navy font-display leading-snug">
                      {project.organisation}
                    </h3>
                    
                    <p className="text-xs text-gray-500 font-semibold flex items-center space-x-1">
                      <Globe className="h-3.5 w-3.5 text-brand-blue shrink-0" />
                      <span>{project.region}</span>
                    </p>
                  </div>

                  {/* Operational Metrics Block */}
                  <div className="mt-8 pt-6 border-t border-gray-200 text-left">
                    <p className="text-2xl font-black text-brand-blue font-display">{project.certifiedCount}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Certified Professionals</p>
                  </div>
                </div>

                {/* Right detailed narrative */}
                <div className="lg:col-span-8 p-6 sm:p-10 space-y-6">
                  
                  <h2 className="text-lg sm:text-xl font-bold font-display text-brand-navy leading-snug">
                    {project.title}
                  </h2>

                  {/* Flow breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm pt-2">
                    <div>
                      <p className="font-extrabold text-[#be3a00] uppercase tracking-wider text-[11px] mb-1">Challenge</p>
                      <p className="text-gray-650 leading-relaxed font-sans">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="font-extrabold text-brand-blue uppercase tracking-wider text-[11px] mb-1">Solution</p>
                      <p className="text-gray-650 leading-relaxed font-sans">{project.solution}</p>
                    </div>
                    <div>
                      <p className="font-extrabold text-brand-green uppercase tracking-wider text-[11px] mb-1">Result & Impact</p>
                      <p className="text-gray-650 leading-relaxed font-sans">{project.impact}</p>
                    </div>
                  </div>

                  {/* Beautiful Quote block */}
                  <div className="bg-[#f0f6fc] border-l-4 border-brand-blue p-5 rounded-r-lg relative mt-6">
                    <Quote className="h-8 w-8 text-brand-blue/15 absolute top-1 right-2" />
                    <blockquote className="text-xs italic text-gray-700 leading-relaxed relative z-10 font-sans">
                      "{project.quote.text}"
                    </blockquote>
                    <p className="text-11px font-bold text-brand-navy mt-3 text-right">
                      — {project.quote.author}, <span className="text-gray-500 font-semibold">{project.quote.role}</span>
                    </p>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* CALL TO ACTION ACCREDITED INTEGRATIONS */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <div className="bg-[#102e52] text-white rounded-xl p-8 sm:p-12 text-center border border-white/10 space-y-4">
          <Building2 className="h-10 w-10 text-brand-yellow mx-auto" />
          <h2 className="text-xl sm:text-2xl font-bold font-display">Deliver verified enterprise competence</h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-sans">
            Whether up-skilling your technical development network or registering as an accredited delivery partner, EXIN establishes optimal pathways.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('partner')}
              className="bg-brand-orange hover:bg-brand-orange/95 text-white font-bold py-3 px-8 rounded text-sm transition-colors shadow"
            >
              Deliver EXIN Exams as a Partner
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
