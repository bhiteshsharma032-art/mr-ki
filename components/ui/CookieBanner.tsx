'use client';

import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a selection
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="bg-[#111111] border border-neutral-800 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] p-6 md:p-8 flex flex-col md:flex-row gap-6 w-full max-w-3xl relative overflow-hidden items-start animate-in zoom-in-95 duration-500">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[#ff6b35]/[0.02] pointer-events-none" />
        
        {/* Icon */}
        <div className="flex-shrink-0 hidden sm:block relative z-10">
          <div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-neutral-800 shadow-inner">
            <Cookie className="w-7 h-7 text-[#ff6b35]" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-5 relative z-10">
          <div className="flex gap-4 items-center sm:hidden mb-2">
            <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-neutral-800">
              <Cookie className="w-6 h-6 text-[#ff6b35]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Cookie-Einstellungen</h3>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 hidden sm:block tracking-tight">Cookie-Einstellungen</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Weitere Informationen finden Sie in unserer{" "}
              <Link href="/privacy" className="text-[#ff6b35] hover:text-[#ff7d4d] transition-colors underline underline-offset-4 decoration-[#ff6b35]/40 hover:decoration-[#ff7d4d]">
                Datenschutzerklärung
              </Link>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              onClick={handleAcceptAll}
              className="px-8 py-3 bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-semibold rounded-xl transition-all duration-200 text-base hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#ff6b35]/20"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={handleEssentialOnly}
              className="px-8 py-3 bg-transparent border-2 border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/50 text-gray-200 font-medium rounded-xl transition-all duration-200 text-base hover:text-white"
            >
              Nur essenzielle Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
