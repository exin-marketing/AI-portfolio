import React from 'react';
import { PageId } from '../types';
import { EXIN_CERTS } from '../data';
import LeadForm from './LeadForm';
import {
  FileText,
  Clock,
  CheckCircle,
  Users,
  Award,
  Globe,
  Compass,
  ArrowLeft,
  GraduationCap,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface CertDetailProps {
  pageId: PageId;
  onNavigate: (pageId: PageId) => void;
}

export default function CertDetailView({ pageId, onNavigate }: CertDetailProps) {
  const cert = EXIN_CERTS.find(c => c.id === pageId);

  // Fallback in case something is wrong
  if (!cert) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-brand-navy">Certification Not Found</h2>
        <button onClick={() => onNavigate('home')} className="mt-4 bg-brand-blue text-white px-4 py-2 rounded">
          Back to Safety
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#fbfcff] min-h-screen">
      
      {/* BREADCRUMB / ACCENT STRIP */}
      <div className="bg-[#f0f6fc] border-b border-brand-blue/10 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-sm">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-1.5 text-brand-blue font-bold hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center space-x-2 text-gray-400 font-medium">
            <button onClick={() => onNavigate('home')} className="hover:text-brand-navy">EXIN Home</button>
            <ChevronRight className="h-3 w-3" />
            <button onClick={() => onNavigate('portfolio')} className="hover:text-brand-navy">AI Certifications</button>
            <ChevronRight className="h-3 w-3" />
            <span className="text-brand-navy font-semibold truncate max-w-[150px] sm:max-w-none">{cert.name}</span>
          </div>
        </div>
      </div>

      {/* CORE HERO */}
      <section className="bg-brand-navy text-white pt-12 pb-16 relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Left Info */}
            <div className="lg:col-span-8 flex flex-col space-y-4 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className={`text-xs px-3 py-1 rounded font-bold uppercase tracking-wider ${cert.levelColor}`}>
                  {cert.levelTag}
                </span>
                <span className="bg-white/10 text-xs px-3 py-1 rounded font-bold text-gray-300">
                  Global Standard Certification
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold font-display leading-tight text-white">
                {cert.name}
              </h1>

              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                {cert.shortDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
                <button
                  onClick={() => {
                    const el = document.getElementById('cert-register-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/95 text-white font-bold py-3 px-8 rounded text-sm shadow-md transition-all"
                >
                  Enquire for My Team
                </button>
                <button
                  onClick={() => onNavigate('partner')}
                  className="w-full sm:w-auto border border-white/20 hover:bg-white/5 font-semibold py-3 px-8 rounded text-sm transition-all"
                >
                  Deliver as a Partner
                </button>
              </div>
            </div>

            {/* Hero Right Badge View */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center">
                <img
                  src={cert.badgeUrl}
                  alt={`${cert.name} Badge`}
                  className="h-32 w-32 object-contain filter drop-shadow-md rounded-2xl bg-white p-2"
                  referrerPolicy="no-referrer"
                />
                <span className="text-brand-yellow font-bold text-xs mt-4 uppercase tracking-widest block">Accredited Exam</span>
                <p className="text-[11px] text-gray-400 mt-1 max-w-[200px] leading-tight">
                  Examinations proctored via EXIN Anywhere. Validated globally.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED CONTENT SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main detailed blocks */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-navy flex items-center space-x-2">
                <Compass className="h-5.5 w-5.5 text-brand-blue" />
                <span>Certification Overview</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed font-sans">
                {cert.longDesc}
              </p>

              {/* Target Audience */}
              <div className="mt-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Target Audience</h3>
                <div className="mt-4 space-y-3">
                  {cert.targetAudience.map((audience, i) => (
                    <div key={i} className="flex items-start space-x-3 text-sm text-gray-600">
                      <Users className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                      <span>{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-navy flex items-center space-x-2">
                <Sparkles className="h-5.5 w-5.5 text-brand-orange" />
                <span>Enterprise Value & Key Benefits</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6">
                {cert.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-3 text-sm sm:text-base text-gray-700 bg-brand-bg/40 p-4 rounded-lg border border-brand-blue/5">
                    <CheckCircle className="h-5 w-5 text-brand-green shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Curriculum Objectives */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-navy flex items-center space-x-2 mb-4">
                <GraduationCap className="h-5.5 w-5.5 text-brand-navy" />
                <span>Core Curriculum Objectives</span>
              </h2>
              <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Course curriculum focuses on the following learning domains:</p>
              
              <div className="space-y-4">
                {cert.syllabusObjectives.map((obj, i) => (
                  <div key={i} className="flex items-start space-x-3 border-l-2 border-brand-blue pl-4 py-1">
                    <div className="text-xs font-bold text-brand-blue font-mono mt-1 shrink-0 bg-brand-blue/5 px-2 py-0.5 rounded">Domain {i + 1}</div>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">{obj}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: BLUEPRINT SIDEBAR CARD */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 sticky top-24">
              <div className="flex items-center space-x-2 pb-4 border-b border-gray-100 mb-6">
                <FileText className="h-5.5 w-5.5 text-brand-blue" />
                <h3 className="font-bold text-brand-navy text-base">Examination Blueprint</h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">Duration</span>
                  <span className="font-bold text-brand-navy flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5 text-brand-blue inline" />
                    <span>{cert.examInfo.duration}</span>
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">Exam Format</span>
                  <span className="font-bold text-brand-navy text-right">{cert.examInfo.format}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">Number of Questions</span>
                  <span className="font-bold text-brand-navy">{cert.examInfo.questions}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">Passing Threshold</span>
                  <span className="font-bold text-brand-green">{cert.examInfo.passingMark}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">Languages</span>
                  <span className="font-bold text-brand-navy text-right max-w-[150px]">{cert.examInfo.languages}</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-gray-500 font-medium">Requirements</span>
                  <span className="font-bold text-brand-navy">None (Vendor Neutral)</span>
                </div>

              </div>

              <div className="bg-brand-bg rounded-lg p-4 mt-6 border border-brand-blue/10">
                <p className="text-xs font-bold text-brand-navy flex items-center space-x-1">
                  <ShieldCheck className="h-4 w-4 text-brand-green shrink-0" />
                  <span>Proctored via EXIN Anywhere</span>
                </p>
                <p className="text-gray-500 text-11px mt-1 leading-relaxed">
                  Take your exam securely from the comfort of your home or office. A webcam, speaker, and connection are all that’s required.
                </p>
              </div>

              <div className="mt-6 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('cert-register-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-brand-orange hover:bg-brand-orange/95 text-white font-bold py-3 rounded text-center text-xs transition-colors"
                >
                  Request Group License Proposal
                </button>
                <button
                  onClick={() => onNavigate('learning-paths')}
                  className="w-full bg-slate-50 border hover:bg-slate-100 text-brand-navy font-bold py-3 rounded text-center text-xs transition-all"
                >
                  View Study Paths Mapping
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FORM ENQUIRY INTAKE */}
      <section id="cert-register-form" className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            title={`Equip your team with the ${cert.name}`}
            subtitle="Let us know how many professionals need certification, and we'll reply with volume curriculum licensing quotes within one business day."
          />
        </div>
      </section>

    </div>
  );
}
