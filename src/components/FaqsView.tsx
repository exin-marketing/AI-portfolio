import React, { useState, useMemo } from 'react';
import { PageId } from '../types';
import { FAQS } from '../data';
import { Search, ChevronDown, BookOpen, Layers, ShieldCheck, Mail, HelpCircle } from 'lucide-react';

interface FaqsProps {
  onNavigate: (pageId: PageId) => void;
}

export default function FaqsView({ onNavigate }: FaqsProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'General', label: 'General / Recognition' },
    { id: 'Enterprise', label: 'Enterprise / Corporate L&D' },
    { id: 'Partner', label: 'Accredited Partner Programs' },
    { id: 'AISP', label: 'AISP / Security Governance' }
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter(faq => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div id="faqs-search-view" className="bg-[#fafcff] min-h-screen pb-20">
      
      {/* HERO SECTION */}
      <section className="bg-brand-navy text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs text-brand-yellow font-extrabold uppercase bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
            EXIN Support Desk
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Find answers to program credentials, corporate licensing programs, partner onboarding procedures, and proctored examinations.
          </p>

          {/* Core Live Search Input */}
          <div className="max-w-xl mx-auto pt-4 relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search questions or keyword answers (e.g. EU AI Act, proctoring)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-gray-800 rounded-lg pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-blue shadow text-xs sm:text-sm"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY SELECTOR & LIST ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-xl border border-gray-150 p-6 sm:p-8 shadow-sm">
          
          {/* Tabs header */}
          <div className="flex flex-wrap gap-1.5 pb-6 border-b border-gray-100 mb-8 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveFaq(null);
                }}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-slate-50 text-gray-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQS dynamic render */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map(faq => {
                const isOpen = activeFaq === faq.id;
                return (
                  <div key={faq.id} className="border border-gray-150 rounded-lg transition-all overflow-hidden bg-slate-50/20">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                      className="w-full text-left p-5 flex justify-between items-center text-brand-navy font-bold focus:outline-none hover:text-brand-blue transition-colors"
                    >
                      <div className="flex items-center space-x-3.5 pr-4">
                        <HelpCircle className="h-5.5 w-5.5 text-brand-blue shrink-0 hidden sm:inline" />
                        <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                      </div>
                      <ChevronDown className={`h-4 w-4 text-gray-400 shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-5 pt-0 text-xs sm:text-sm text-gray-600 bg-white border-t border-gray-100 leading-relaxed font-sans">
                        <p className="mt-2">{faq.answer}</p>
                        
                        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-[10px] text-gray-400 font-semibold font-mono">
                          <span>Category: {faq.category}</span>
                          <span>Verification: Verified Global Standard</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center text-gray-500">
              <p className="text-base font-semibold">No questions matched your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-brand-blue font-bold text-xs hover:underline mt-2"
              >
                Reset filters or search terms
              </button>
            </div>
          )}

        </div>
      </section>

      {/* BOTTOM TICKETING COMPONENT */}
      <section className="max-w-4xl mx-auto px-4 mt-16">
        <div className="bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white rounded-xl p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold font-display">Still have unanswered questions?</h3>
            <p className="text-xs text-gray-300 font-sans max-w-md">
              Our regional educational account planners are on-call globally. Contact us directly. We respond within one business day.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('partner');
            }}
            className="bg-brand-orange hover:bg-brand-orange/95 text-white font-bold py-3 px-6 rounded text-xs transition-colors shrink-0 inline-flex items-center space-x-1"
          >
            <Mail className="h-4 w-4 shrink-0 text-white" />
            <span>Open Ticket & Inquiry</span>
          </button>
        </div>
      </section>

    </div>
  );
}
