import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Views
import HomeView from './components/HomeView';
import AispView from './components/AispView';
import CertDetailView from './components/CertDetailView';
import PortfolioView from './components/PortfolioView';
import RiskOwaspView from './components/RiskOwaspView';
import PartnerView from './components/PartnerView';
import LearningPathsView from './components/LearningPathsView';
import FaqsView from './components/FaqsView';
import CaseStudiesView from './components/CaseStudiesView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Automatically reset scroll position to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Render correct view based on state
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView onNavigate={setCurrentPage} />;
      case 'aisp':
        return <AispView onNavigate={setCurrentPage} />;
      case 'portfolio':
        return <PortfolioView onNavigate={setCurrentPage} />;
      case 'risk-owasp':
        return <RiskOwaspView onNavigate={setCurrentPage} />;
      case 'partner':
        return <PartnerView onNavigate={setCurrentPage} />;
      case 'learning-paths':
        return <LearningPathsView onNavigate={setCurrentPage} />;
      case 'faqs':
        return <FaqsView onNavigate={setCurrentPage} />;
      case 'case-studies':
        return <CaseStudiesView onNavigate={setCurrentPage} />;
      
      // Dynamic Certifications Products Detail Views
      case 'essentials':
      case 'foundation':
      case 'generative-ai':
      case 'machine-learning':
      case 'compliance':
        return <CertDetailView pageId={currentPage} onNavigate={setCurrentPage} />;

      default:
        return <HomeView onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-slate-800 bg-[#fbfdff]">
      
      {/* 1. NAV BAR */}
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* MAIN RENDER ENGINE */}
      <main className="flex-grow">
        {renderPageContent()}
      </main>

      {/* 8. FOOTER BAR */}
      <Footer onNavigate={setCurrentPage} />
      
    </div>
  );
}
