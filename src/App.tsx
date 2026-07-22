import React, { useState } from 'react';
import { LoanData } from './types';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [calculatorState, setCalculatorState] = useState<LoanData>({
    loanAmount: 15000000, // 15 Millones COP default
    loanTerm: 12,
  });

  const [activeTab, setActiveTab] = useState<'inicio' | 'solicitud'>('inicio');

  const handleScrollToWaitlist = (loanOverride?: number) => {
    if (loanOverride !== undefined) {
      setCalculatorState((prev) => ({ ...prev, loanAmount: loanOverride }));
    }
    setActiveTab('solicitud');
    const element = document.getElementById('solicitud');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900 scroll-smooth antialiased relative overflow-hidden">
      {/* Background Ambient Blurs for Frosted Glass Aesthetic */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] left-[-150px] w-[500px] h-[500px] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-100px] w-[500px] h-[500px] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none -z-10" />

      {/* Main Navbar */}
      <Navbar
        onJoinClick={() => handleScrollToWaitlist()}
        activeSection={activeTab}
      />

      {/* Hero Section */}
      <HeroSection
        onCtaClick={() => handleScrollToWaitlist()}
      />

      {/* Pre-Aprobación Express Application Form */}
      <WaitlistForm
        initialLoanAmount={calculatorState.loanAmount}
      />

      {/* Footer */}
      <Footer />

      {/* Floating Static WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

