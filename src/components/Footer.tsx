import React from 'react';
import { PageId } from '../types';
import { Globe, Award, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (pageId: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer id="exin-main-footer" className="bg-brand-navy border-t border-brand-navy/60 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-white/10">
          
          {/* Logo & Brief Mission */}
          <div className="flex flex-col space-y-3 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <div className="bg-white p-2 rounded inline-block">
                <img
                  src="https://www.exin.com/app/uploads/2022/08/Logo-EXIN-colored.svg"
                  alt="EXIN Logo"
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-400 text-xs max-w-sm font-sans">
              Global IT certification body trusted in 165+ countries with 3M+ certified professionals. Building resilient, compliant workforce competence.
            </p>
          </div>

          {/* Quick Core Links */}
          <div className="flex justify-center space-x-6 text-sm font-medium">
            <button
              onClick={() => onNavigate('portfolio')}
              className="text-gray-300 hover:text-brand-blue transition-colors"
            >
              AI Portfolio
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => onNavigate('partner')}
              className="text-gray-300 hover:text-brand-blue transition-colors"
            >
              Partner With Us
            </button>
            <span className="text-white/20">|</span>
            <a
              href="https://www.exin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-blue transition-colors flex items-center space-x-1"
            >
              <span>EXIN.com</span>
              <Globe className="h-3 w-3 inline" />
            </a>
          </div>

          {/* Standards & Cert Bodies Badge UI */}
          <div className="flex justify-center md:justify-end space-x-4">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/5 rounded border border-white/10 text-xs">
              <Award className="h-4 w-4 text-brand-yellow" />
              <span className="text-gray-300 font-bold">100% Vendor Neutral</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/5 rounded border border-white/10 text-xs">
              <Shield className="h-4 w-4 text-brand-blue" />
              <span className="text-gray-300 font-bold">ISO 42001 & AI Act Ready</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>© 2026 EXIN Holding B.V.</p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <a href="https://www.exin.com/privacy" className="hover:underline hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="https://www.exin.com/terms" className="hover:underline hover:text-white transition-colors">General Terms</a>
            <span>•</span>
            <span className="text-gray-500">Official Certification Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
