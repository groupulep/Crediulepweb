import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, LogIn } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
  activeSection?: string;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-purple-100/60 shadow-lg shadow-purple-900/5 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div>
            <span className="font-display text-2xl font-black tracking-tight text-purple-950">CrediULEP</span>
            <span className="block text-[9px] text-purple-700 font-bold tracking-widest uppercase">Colombia Fintech</span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 bg-white/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/80 shadow-sm">
          <button
            onClick={() => scrollToSection('inicio')}
            className="text-xs font-bold text-slate-600 hover:text-purple-600 transition-colors cursor-pointer"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('solicitud')}
            className="text-xs font-bold text-slate-600 hover:text-purple-600 transition-colors cursor-pointer"
          >
            Pre-Aprobación Express
          </button>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://groupulep.github.io/credito/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full border border-purple-200 hover:border-purple-300 text-purple-950 font-bold text-xs hover:bg-purple-50/80 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5 text-purple-600" />
            Iniciar sesión
          </a>
          <button
            onClick={onJoinClick}
            className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-full transition-all shadow-lg shadow-purple-200 hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
          >
            Pre-Aprobación Express
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-purple-950 hover:bg-purple-50 transition-colors"
          aria-label="Abrir menú"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-purple-100 shadow-2xl px-6 py-6 flex flex-col gap-4 animate-in fade-in duration-200">
          <button
            onClick={() => scrollToSection('inicio')}
            className="text-left font-bold text-slate-700 py-1 hover:text-purple-600"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('solicitud')}
            className="text-left font-bold text-slate-700 py-1 hover:text-purple-600"
          >
            Pre-Aprobación Express
          </button>
          <hr className="border-purple-100" />
          <a
            href="https://groupulep.github.io/credito/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3 rounded-full border border-purple-200 text-purple-950 font-bold text-center hover:bg-purple-50 flex items-center justify-center gap-2 text-xs"
          >
            <LogIn className="w-4 h-4 text-purple-600" />
            Iniciar sesión
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onJoinClick();
            }}
            className="w-full py-3 rounded-full bg-purple-600 text-white font-bold text-center shadow-lg shadow-purple-200 flex items-center justify-center gap-2 text-xs"
          >
            Pre-Aprobación Express
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}

