import React, { useState } from 'react';
import { LeadSubmission } from '../types';
import { CheckCircle, AlertTriangle, Send, ShieldAlert, Sparkles } from 'lucide-react';

interface LeadFormProps {
  initialType?: 'Enterprise Client' | 'Accredited Partner' | 'Professional Specialist';
  title?: string;
  subtitle?: string;
  isAispInterest?: boolean;
}

const COUNTRIES = [
  'Germany',
  'Netherlands',
  'United Kingdom',
  'Singapore',
  'Australia',
  'Japan',
  'India',
  'France',
  'Spain',
  'Belgium',
  'United States',
  'Other / Global'
];

export default function LeadForm({
  initialType = 'Enterprise Client',
  title = "Secure Your Enterprise AI Governance Strategy Today",
  subtitle = "Whether you are looking to certify your organisation's workforce or expand your training academy's portfolio as an accredited partner, our managers will contact you within one business day.",
  isAispInterest = false
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organisation: '',
    country: '',
    type: initialType as 'Enterprise Client' | 'Accredited Partner' | 'Professional Specialist',
    interest: 'AISP' as 'AISP' | 'Other AI Certification' | 'Partner Program' | 'General Enquiry',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [integrationStatus, setIntegrationStatus] = useState<'local_storage_only' | 'activecampaign_synced' | 'activecampaign_failed_fallback_local' | string>('local_storage_only');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (type: typeof formData.type) => {
    setFormData(prev => ({ ...prev, type }));
  };

  const handleInterestChange = (interest: typeof formData.interest) => {
    setFormData(prev => ({ ...prev, interest }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.organisation || !formData.country) {
      setErrorMsg('Please fill in all core fields (First Name, Last Name, Email, Organisation, Country).');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid work email.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();
      
      if (response.ok && resData.success) {
        setIntegrationStatus(resData.integration || 'local_storage_only');
        setIsSubmitted(true);
      } else {
        setErrorMsg(resData.error || 'Server rejected lead submission.');
      }
    } catch (err: any) {
      console.error('Lead submit connection error:', err);
      setErrorMsg('Network error connecting to lead engine. Please check system logging.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div id="lead-success-card" className="bg-white text-gray-800 rounded-xl p-8 shadow-xl max-w-xl mx-auto text-center border-t-4 border-brand-green animate-in zoom-in-95 duration-200">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-brand-green/10 text-brand-green mb-6">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-3">Enquiry Received Successfully!</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you, <strong className="text-brand-navy">{formData.firstName}</strong>. We have logged your request on behalf of <strong className="text-brand-navy">{formData.organisation}</strong>.
        </p>

        {/* Data Persistence Pipeline Status Bar */}
        <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100 text-left text-xs">
          <span className="block font-bold text-slate-700 uppercase tracking-widest text-[9px] mb-2.5">CRM Storage Status Mapping</span>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="flex-shrink-0 inline-flex items-center justify-center p-0.5 rounded-full bg-green-100 text-green-700">✓</span>
              <span className="text-slate-600">
                <strong className="text-slate-800">Secure Lead Registry:</strong> Saved in the secure, high-integrity node database registry.
              </span>
            </div>
            {integrationStatus === 'activecampaign_synced' && (
              <div className="flex items-center space-x-2">
                <span className="flex-shrink-0 inline-flex items-center justify-center p-0.5 rounded-full bg-blue-100 text-blue-700">✓</span>
                <span className="text-slate-600">
                  <strong className="text-slate-800">ActiveCampaign Sync:</strong> Contact successfully dispatched to ActiveCampaign CRM! Mapped with custom tag segments.
                </span>
              </div>
            )}
            {integrationStatus === 'activecampaign_failed_fallback_local' && (
              <div className="flex items-start space-x-2">
                <span className="flex-shrink-0 mt-0.5 text-amber-500 font-bold">!</span>
                <span className="text-slate-500 italic">
                  <strong className="text-slate-700 not-italic">ActiveCampaign Sync Warning:</strong> Saved on lead registry, but failed to reach CRM. Verify your API Key configuration has read/write privileges in .env.
                </span>
              </div>
            )}
            {integrationStatus === 'local_storage_only' && (
              <div className="flex items-start space-x-2">
                <span className="flex-shrink-0 mt-0.5 text-blue-500 text-[10px]">ℹ</span>
                <span className="text-slate-500">
                  <strong className="text-slate-700">ActiveCampaign Link:</strong> Sandbox test mode active. Add <code className="bg-slate-200 px-1 py-0.5 rounded text-[10px] font-mono select-all">ACTIVECAMPAIGN_URL</code> and <code className="bg-slate-200 px-1 py-0.5 rounded text-[10px] font-mono select-all">ACTIVECAMPAIGN_KEY</code> to your environment settings to stream leads directly into your marketing funnel.
                </span>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-brand-bg rounded-lg p-4 mb-6 text-left text-sm border border-brand-blue/10">
          <p className="font-bold text-brand-navy mb-1">What happens next?</p>
          <ul className="space-y-2 text-gray-600 mt-2 list-disc pl-4">
            <li>We will route your ticket to our team in <span className="font-semibold">{formData.country}</span>.</li>
            <li>A certified EXIN Account Planner will respond with custom curriculum options or partner onboarding packs within <span className="font-semibold text-brand-blue">1 business day</span>.</li>
            <li>We have sent a confirmation packet to <span className="font-semibold underline text-brand-navy">{formData.email}</span>.</li>
          </ul>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              organisation: '',
              country: '',
              type: initialType,
              interest: isAispInterest ? 'AISP' : 'AISP',
              message: ''
            });
            setIntegrationStatus('local_storage_only');
          }}
          className="bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold py-2 px-6 rounded transition-colors text-sm"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white rounded-xl p-6 sm:p-10 shadow-2xl border border-white/10 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-brand-yellow/15 text-brand-yellow px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border border-brand-yellow/20">
          <ShieldAlert className="h-3.5 w-3.5 text-brand-yellow" />
          <span>INITIATE BUSINESS ALIGNMENT CONVERSATION</span>
        </div>
        <h2 id="lead-form-title" className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">{title}</h2>
        <p className="text-gray-300 mt-2 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      </div>

      {errorMsg && (
        <div className="bg-red-500/20 border border-red-500 text-red-100 rounded-lg p-3 mb-6 text-sm flex items-center space-x-2">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form id="exin-lead-form" onSubmit={handleSubmit} className="space-y-6">
        
        {/* Identity & Interest Selectors */}
        <div className="space-y-6 text-left">
          
          {/* Identity Grid */}
          <div>
            <span className="block text-xs font-bold text-gray-350 tracking-wider uppercase mb-3">I am inquiring as:</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { value: 'Enterprise Client', label: 'Enterprise / Corporate Client' },
                { value: 'Accredited Partner', label: 'Accredited Partner' },
                { value: 'Professional Specialist', label: 'Professional Practitioner' }
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center space-x-3 p-3.5 rounded border cursor-pointer transition-all ${
                    formData.type === option.value
                      ? 'bg-brand-blue/20 border-brand-blue text-white ring-1 ring-brand-blue'
                      : 'bg-white/5 border-white/10 text-gray-350 hover:bg-white/10'
                  }`}
                >
                  <input
                    type="radio"
                    name="type"
                    checked={formData.type === option.value}
                    onChange={() => handleTypeChange(option.value as typeof formData.type)}
                    className="text-brand-blue focus:ring-brand-blue bg-gray-800 border-gray-750 h-4 w-4"
                  />
                  <span className="text-xs sm:text-sm font-medium">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Interest Grid */}
          <div>
            <span className="block text-xs font-bold text-gray-350 tracking-wider uppercase mb-3">I am interested in:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { value: 'AISP', label: 'EXIN AISP Flagship' },
                { value: 'Other AI Certification', label: 'AI Certificate Portfolio' },
                { value: 'Partner Program', label: 'Partner Program' },
                { value: 'General Enquiry', label: 'General Enquiry' }
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center space-x-3 p-3 rounded border cursor-pointer transition-all ${
                    formData.interest === option.value
                      ? 'bg-brand-blue/20 border-brand-blue text-white ring-1 ring-brand-blue'
                      : 'bg-white/5 border-white/10 text-gray-350 hover:bg-white/10'
                  }`}
                >
                  <input
                    type="radio"
                    name="interest"
                    checked={formData.interest === option.value}
                    onChange={() => handleInterestChange(option.value as typeof formData.interest)}
                    className="text-brand-blue focus:ring-brand-blue bg-gray-800 border-gray-750 h-4 w-4"
                  />
                  <span className="text-xs font-medium">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Main Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">First Name *</label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Jane"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">Last Name *</label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">Work Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane.doe@organisation.com"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">Organisation *</label>
              <input
                type="text"
                name="organisation"
                required
                value={formData.organisation}
                onChange={handleChange}
                placeholder="Enterprise or Training Organisation"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">Country *</label>
              <select
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-blue text-sm"
              >
                <option value="" disabled className="text-gray-400">Select your country of operation</option>
                {COUNTRIES.map(c => (
                  <option key={c} value={c} className="bg-slate-900 text-white">{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 text-left">Your Message (Optional)</label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your team's training objectives, required student licenses, or registration timeline..."
            className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue text-sm text-left"
          ></textarea>
        </div>

        <div className="flex flex-col items-center pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/95 disabled:bg-brand-orange/70 text-white font-bold px-10 py-4 rounded text-xs uppercase tracking-wider shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Processing B2B Alignment...</span>
              </>
            ) : (
              <>
                <span>Initiate Business Discussion</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
          
          <p className="text-xs text-gray-400 mt-4 text-center">
            No spam. Response within one business day. Strictly aligned with professional B2B compliance standards.
          </p>
        </div>
      </form>
    </div>
  );
}
