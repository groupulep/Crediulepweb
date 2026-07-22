import React, { useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleLegalClick = (e: React.MouseEvent, docName: string) => {
    e.preventDefault();
    setActiveModal(docName);
  };

  return (
    <footer className="bg-purple-950 text-white pt-16 pb-12 relative overflow-hidden border-t border-purple-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-purple-800/80">
          {/* Brand Col - 5 Cols */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div>
                <span className="font-display text-2xl font-black tracking-tight text-white">CrediULEP</span>
                <span className="block text-[9px] text-purple-400 font-bold tracking-widest uppercase">Colombia Fintech</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-purple-300 pt-2">
              <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0" />
              <span className="text-xs font-semibold text-purple-200/80">Trámites Digitales Seguros con Encriptación SSL</span>
            </div>
          </div>

          {/* Links - 3 Cols */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-400">Navegación</h4>
            <ul className="space-y-2 text-xs text-purple-200/70 font-bold">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#solicitud" className="hover:text-white transition-colors">Pre-Aprobación Express</a>
              </li>
              <li>
                <a
                  href={`https://wa.me/573169008561?text=${encodeURIComponent(
                    'Hola CrediULEP, quisiera solicitar información sobre la pre-aprobación de mi crédito express.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-emerald-400 font-extrabold flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  WhatsApp: +57 316 900 8561
                </a>
              </li>
              <li>
                <a
                  href="https://groupulep.github.io/credito/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-purple-300 font-extrabold flex items-center gap-1 mt-1"
                >
                  Iniciar sesión →
                </a>
              </li>
            </ul>
          </div>

          {/* Legal and Disclaimer - 4 Cols */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-400">Aviso Regulatorio</h4>
            <p className="text-xs text-purple-200/50 leading-relaxed">
              CrediULEP Colombia opera como plataforma digital de crédito. Operaciones de financiamiento directo con tasa de interés fija mensual.
            </p>
            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-2">
              <button
                onClick={(e) => handleLegalClick(e, 'Aviso de Privacidad')}
                className="text-xs text-purple-300 hover:text-white font-bold cursor-pointer"
              >
                Privacidad
              </button>
              <button
                onClick={(e) => handleLegalClick(e, 'Términos y Condiciones')}
                className="text-xs text-purple-300 hover:text-white font-bold cursor-pointer"
              >
                Términos
              </button>
              <button
                onClick={(e) => handleLegalClick(e, 'Metodología Tasa Fija 2.5%')}
                className="text-xs text-purple-300 hover:text-white font-bold cursor-pointer"
              >
                Metodología Tasa Fija
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-purple-300/40 font-semibold">
          <span>&copy; {currentYear} software GROUP ULEP S.A.S. Todos los derechos reservados.</span>
        </div>
      </div>

      {/* Legal Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-purple-950/80 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-in fade-in duration-200">
          <div className="bg-white max-w-md w-full rounded-[32px] p-6 text-purple-950 space-y-4 shadow-2xl relative border border-purple-100">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-purple-950 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-1">
              <span className="text-[10px] text-purple-700 font-extrabold uppercase tracking-wider block">Documentación Fintech Colombia</span>
              <h3 className="font-display font-black text-xl">{activeModal}</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Términos legales y reglamentación aplicable para la pre-aprobación de créditos express con CrediULEP.
            </p>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-2xl transition-all cursor-pointer shadow-md"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

