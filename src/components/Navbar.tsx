import React, { useState } from 'react';
import { PageId } from '../types';
import { ChevronDown, Menu, X, ArrowRight, Award, ShieldAlert, BookOpen, Layers } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (pageId: PageId) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'portfolio', label: 'AI Portfolio' },
    { id: 'risk-owasp', label: 'AI Risk & OWASP' },
    { id: 'partner', label: 'Partner With Us' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'case-studies', label: 'Case Studies' },
  ];

  const certifications = [
    { id: 'essentials', name: 'EXIN BCS AI Essentials', level: 'Entry Level', color: 'text-brand-green' },
    { id: 'foundation', name: 'EXIN BCS AI Foundation', level: 'Foundation', color: 'text-brand-blue' },
    { id: 'generative-ai', name: 'EXIN BCS Generative AI Award', level: 'Award', color: 'text-brand-yellow' },
    { id: 'machine-learning', name: 'EXIN BCS Machine Learning Award', level: 'Award', color: 'text-brand-yellow' },
    { id: 'compliance', name: 'EXIN AI Compliance Professional', level: 'Professional', color: 'text-brand-orange' },
    { id: 'aisp', name: 'EXIN AISP - AI Security', level: 'Coming Soon', color: 'text-brand-yellow font-bold' },
  ];

  const handleCertClick = (id: string) => {
    onNavigate(id as PageId);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav id="exin-main-navbar" className="bg-brand-navy text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Homepage Trigger */}
          <div className="flex-shrink-0 cursor-pointer flex items-center space-x-2" onClick={() => handleNavClick('home')}>
            <div className="bg-white p-2 rounded-md shadow-sm transition-transform hover:scale-105">
              <img
                src="https://www.exin.com/app/uploads/2022/08/Logo-EXIN-colored.svg"
                alt="EXIN Logo"
                className="h-9 w-auto"
              />
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            
            {/* Dropdown Menu for AI Certifications */}
            <div className="relative">
              <button
                id="nav-dropdown-btn"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-brand-blue focus:outline-none ${
                  ['essentials', 'foundation', 'generative-ai', 'machine-learning', 'compliance', 'aisp'].includes(currentPage)
                    ? 'text-brand-blue'
                    : 'text-white'
                }`}
              >
                <span>AI Certifications</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Mega-menu Styled Dropdown */}
              {isDropdownOpen && (
                <div
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-80 bg-white rounded-lg shadow-xl py-3 text-gray-800 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-4 py-2 border-b border-gray-100 mb-2">
                    <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">EXIN 6-Tier AI Portfolio</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1 px-2">
                    {certifications.map((cert) => (
                      <button
                        key={cert.id}
                        onClick={() => handleCertClick(cert.id)}
                        className="w-full text-left px-3 py-2.5 rounded-md hover:bg-brand-bg transition-colors flex justify-between items-center group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                            {cert.name}
                          </p>
                          <span className="text-11px text-gray-500 font-medium">
                            {cert.level}
                          </span>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                    <div className="mt-2 pt-2 px-3 border-t border-gray-100">
                      <button
                        onClick={() => handleNavClick('learning-paths')}
                        className="w-full bg-brand-bg hover:bg-brand-blue/10 text-brand-blue text-xs font-bold py-2 rounded text-center block transition-colors"
                      >
                        Explore Interactive Learning Paths →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* General Pages */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as PageId)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-brand-blue ${
                  currentPage === item.id ? 'text-brand-blue font-semibold' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Quick Link to Paths */}
            <button
              onClick={() => handleNavClick('learning-paths')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-brand-blue ${
                currentPage === 'learning-paths' ? 'text-brand-blue font-semibold' : 'text-gray-200'
              }`}
            >
              Learning Paths
            </button>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('partner')}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-4 py-2 rounded shadow-sm text-sm transition-colors"
            >
              Partner Program
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center pr-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-navy/60 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-navy-light/30 bg-brand-navy shadow-inner">
          <div className="px-2 pt-2 pb-4 space-y-1">
            
            {/* Quick Dashboard */}
            <div className="px-3 py-2 border-b border-white/10 mb-2">
              <span className="text-xs text-blue-300 font-bold tracking-wider uppercase">MAIN MENU</span>
            </div>

            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-semibold hover:bg-brand-blue/20"
            >
              Home Portal
            </button>

            {/* Mobile Dropdown Header */}
            <div className="px-3 py-1 mt-2 text-xs font-bold text-gray-400 uppercase">
              AI Certifications Portfolio
            </div>

            <div className="pl-4 space-y-1">
              {certifications.map((cert) => (
                <button
                  key={cert.id}
                  onClick={() => handleCertClick(cert.id)}
                  className={`w-full text-left block px-3 py-1.5 rounded text-sm hover:bg-white/10 transition-colors ${
                    currentPage === cert.id ? 'text-brand-blue font-bold border-l-2 border-brand-blue pl-2' : 'text-gray-300'
                  }`}
                >
                  {cert.name} <span className="text-xs text-gray-500 font-normal">({cert.level})</span>
                </button>
              ))}
            </div>

            <div className="h-px bg-white/10 my-2"></div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as PageId)}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-semibold hover:bg-white/10 ${
                  currentPage === item.id ? 'text-brand-blue border-l-2 border-brand-blue pl-2' : ''
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('learning-paths')}
              className={`w-full text-left block px-3 py-2 rounded-md text-base font-semibold hover:bg-white/10 ${
                currentPage === 'learning-paths' ? 'text-brand-blue border-l-2 border-brand-blue pl-2' : ''
              }`}
            >
              AI Learning Paths
            </button>

            <div className="mt-4 pt-4 border-t border-white/10 px-3 flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick('partner')}
                className="w-full bg-brand-orange hover:bg-brand-orange/95 text-white text-center font-bold py-2.5 rounded text-sm transition-colors"
              >
                Become an Accredited Partner
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
