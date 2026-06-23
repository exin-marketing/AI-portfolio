import React, { useState } from 'react';
import { PageId } from '../types';
import {
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Download,
  BookOpen,
  FolderLock,
  ChevronDown,
  Percent,
  CheckCircle,
  Gem,
  Award
} from 'lucide-react';

interface PartnerProps {
  onNavigate: (pageId: PageId) => void;
}

export default function PartnerView({ onNavigate }: PartnerProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Kit Form Submitting state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    country: ''
  });
  const [isKitSent, setIsKitSent] = useState(false);
  const [kitError, setKitError] = useState('');

  const benefits = [
    {
      title: 'Ready-made curriculum',
      desc: 'Full courseware, sample exams, slides and study guides. You focus on delivering class excellence — we manage the technical publishing and standards core.',
      icon: <BookOpen className="h-6 w-6 text-brand-blue" />
    },
    {
      title: 'Marketing support',
      desc: 'Co-branded assets, social content packages, and email matrices. We act as your physical marketing alignment team to maximize candidate enrollments.',
      icon: <Gem className="h-6 w-6 text-brand-orange" />
    },
    {
      title: 'Revenue share model',
      desc: 'Competitive business pricing matrices on exam licensing. High-volume discount grids available. The more you deliver, the more you return. Simple and transparent.',
      icon: <Percent className="h-6 w-6 text-brand-green" />
    }
  ];

  const partnerFaqs = [
    {
      q: "What does becoming an accredited training partner involve?",
      a: "Acquisition of Accredited Partner status requires validating your trainers' competence credentials, registering your legal corporate entity with EXIN, and subscribing to our code of exam delivery standardizations."
    },
    {
      q: "Is there a cost?",
      a: "There is a standard institutional accreditation standard, which provides trainer audits and immediate licensing on the multi-tier AI curriculum package. Student exam licensing works on wholesale corporate margins with no minimum commitment."
    },
    {
      q: "Do I need to be a tech-focused academy?",
      a: "No. Many of our most successful training partners are general management, financial auditing, or corporate L&D academies who pitch digital literacy and compliance (AICP) to non-technical advisory boards."
    },
    {
      q: "What support does EXIN give?",
      a: "We assign a dedicated regional Account Director to onboard your faculty, assist in drafting commercial sales proposals, customize co-branded landing assets, and provide 24/7 global tech ticketing support for proctored exams."
    }
  ];

  const handleKitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organisation || !formData.country) {
      setKitError('Please fill in all 4 mandatory fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setKitError('Please enter a valid business email.');
      return;
    }
    setKitError('');
    setIsKitSent(true);
  };

  return (
    <div id="partner-view-container" className="bg-[#fbfcff] min-h-screen pb-20">
      
      {/* 2. HERO */}
      <section className="bg-gradient-to-r from-brand-navy to-[#063366] text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="bg-brand-orange/20 text-brand-orange text-xs font-bold px-3 py-1.5 rounded-full border border-brand-orange/30 uppercase tracking-widest inline-block">
                For Accredited Training Organisations
              </span>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
                Grow your training business <br />
                with EXIN AI certifications
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Join 300+ training organisations delivering globally recognised AI certifications. Add high-margin revenue streams, expand your portfolio, and give your corporate clients the credentials they need.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('ato-kit-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-brand-orange hover:bg-brand-orange/95 text-white font-bold py-3.5 px-8 rounded shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Apply to partner
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="border border-white/25 hover:bg-white/5 hover:border-white font-semibold py-3.5 px-8 rounded transition-all"
                >
                  View certifications
                </button>
              </div>
            </div>

            {/* Right graphic boxes */}
            <div className="lg:col-span-5 h-full flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative max-w-sm w-full divide-y divide-white/10 text-xs">
                <div className="pb-4">
                  <p className="text-brand-yellow font-bold text-sm">Partner Fast-Track Program</p>
                  <p className="text-gray-400 mt-1">Get licensed and ready to deliver in 10 business days.</p>
                </div>
                
                <div className="py-4 space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    <span>Instant training slides & guides</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    <span>Free trainer accreditation licenses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                    <span>Tiered wholesale license discounts</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center text-slate-300 font-medium">
                  <span>EU AI Act mapped core curriculum</span>
                  <Award className="h-4 w-4 text-brand-blue" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STATS ROW */}
      <section className="bg-brand-navy border-t border-b border-white/10 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl font-extrabold text-brand-blue font-display">300+</p>
              <p className="text-xs text-slate-300 mt-1 uppercase tracking-widest font-semibold">Accredited Partners</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand-green font-display">165+</p>
              <p className="text-xs text-slate-300 mt-1 uppercase tracking-widest font-semibold">Countries reached</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand-yellow font-display">6</p>
              <p className="text-xs text-slate-300 mt-1 uppercase tracking-widest font-semibold">AI certs to deliver</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-brand-orange font-display">High Demand</p>
              <p className="text-xs text-slate-300 mt-1 uppercase tracking-widest font-semibold">Rising every quarter</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="py-20 bg-[#f3f9ff]/50 border-b border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold font-display text-brand-navy tracking-tight">
              What you get as an EXIN partner
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base font-sans">
              We provide the underlying pedagogical architecture and proctoring engines, enabling you to focus purely on selling and hosting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 p-8 flex flex-col space-y-4">
                <div className="p-3 bg-brand-bg rounded-lg w-12 h-12 flex items-center justify-center shrink-0 border border-brand-blue/10">
                  {b.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold font-display text-brand-navy">{b.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">{b.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIAL GRID */}
      <section className="bg-brand-navy py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-4xl text-brand-yellow font-serif opacity-40">“</span>
          
          <blockquote className="mt-2 text-base sm:text-lg italic leading-relaxed text-slate-200">
            "Adding EXIN AI certifications was one of the best decisions we made. Demand from corporate clients was immediate and the EXIN team made onboarding genuinely easy."
          </blockquote>
          
          <div className="mt-6">
            <p className="text-sm font-bold text-brand-yellow font-display">David Lim</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Training Director, APAC Partner — Sydney</p>
          </div>
        </div>
      </section>

      {/* 6. ATO KIT DOWNLOAD FORM */}
      <section id="ato-kit-section" className="py-20 px-4 bg-gradient-to-br from-brand-orange to-[#e0540d] text-white">
        <div className="max-w-4xl mx-auto">
          
          {isKitSent ? (
            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-xl text-center border-t-4 border-brand-green animate-in zoom-in-95 duration-150">
              <CheckCircle className="h-12 w-12 text-brand-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy">Partner Kit Request Sent!</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Thank you, <strong className="text-brand-navy">{formData.name}</strong>. We have dispatched the evaluation prospectus bundle on behalf of <strong className="text-brand-navy">{formData.organisation}</strong>.
              </p>
              <div className="bg-brand-bg rounded-lg p-4 mt-6 text-xs text-left border text-gray-600 border-brand-blue/10">
                <p className="font-bold text-brand-navy mb-1">What to expect in your inbox:</p>
                <ul className="list-disc pl-4 space-y-1 mt-1">
                  <li>Full wholesaling pricing index sheets</li>
                  <li>Draft curriculum slide samples for instructor evaluations</li>
                  <li>Accreditation application forms</li>
                  <li>Step-by-step trainer alignment blueprints</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setIsKitSent(false);
                  setFormData({ name: '', email: '', organisation: '', country: '' });
                }}
                className="mt-6 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold py-2 px-6 rounded text-xs transition-colors"
              >
                Request Another Brochure
              </button>
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 sm:p-12 shadow-xl">
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-1.5 bg-white/15 text-white px-3 py-1 rounded-full text-xs font-bold border border-white/10">
                  <Download className="h-3.5 w-3.5 text-white/80" />
                  <span>Immediate Evaluation PDF</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-3">
                  Download the EXIN AI Partner Kit
                </h2>
                <p className="text-gray-200 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
                  Everything you need to evaluate the EXIN partner program — pricing, curriculum overview, co-marketing examples and onboarding steps.
                </p>
              </div>

              {kitError && (
                <div className="bg-red-500 text-white rounded p-3 mb-6 text-xs font-semibold text-center border-l-4 border-white">
                  {kitError}
                </div>
              )}

              <form onSubmit={handleKitSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                
                <div>
                  <label className="block text-xs font-bold text-gray-200 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Heiko Weber"
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-navy text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-200 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="heiko@academy-partners.de"
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-navy text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-200 mb-1">Organisation *</label>
                  <input
                    type="text"
                    required
                    value={formData.organisation}
                    onChange={(e) => setFormData(prev => ({ ...prev, organisation: e.target.value }))}
                    placeholder="Veridian L&D GmbH"
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-navy text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-200 mb-1">Country *</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                    placeholder="Germany"
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-navy text-sm"
                  />
                </div>

                <div className="md:col-span-2 text-center pt-4">
                  <button
                    type="submit"
                    className="bg-brand-navy hover:bg-brand-navy/95 text-white font-bold py-3.5 px-8 rounded shadow text-sm transition-all inline-flex items-center space-x-2"
                  >
                    <span>Send me the Partner Kit →</span>
                    <Download className="h-4 w-4 shrink-0" />
                  </button>
                  <p className="text-11px text-gray-300 mt-2">We'll send it to your inbox within one business day. No sales pressures.</p>
                </div>

              </form>

            </div>
          )}

        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-brand-navy tracking-tight">
              Partner Onboarding FAQs
            </h2>
            <p className="text-gray-500 text-sm mt-1">Understanding the contractual and technical accreditation steps.</p>
          </div>

          <div className="space-y-4">
            {partnerFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="border border-gray-150 rounded-lg">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex justify-between items-center text-brand-navy font-bold focus:outline-none hover:text-brand-blue"
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-gray-400 shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-gray-600 bg-slate-50 border-t border-gray-100 leading-relaxed font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
