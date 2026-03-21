'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Services', href: '/#services-section' },
  { name: 'Command Center', href: '/command-center' },
  { name: 'Community', href: '/community' },
  { name: 'Privacy Policy', href: '/privacy' },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-4xl">
        <nav className="bg-[#1a1a1a]/95 backdrop-blur-xl rounded-full border border-white/10 px-5 py-2.5 flex items-center justify-between shadow-lg">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <img 
              src="/logo.png" 
              alt="Mr Ki Logo" 
              className="h-8 w-auto"
            />
            <span className="md:hidden text-white font-bold text-lg">MR KI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 relative z-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white font-normal text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center relative z-10">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-semibold px-5 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 flex items-center gap-1.5"
            >
              Contact Us
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-white/80 relative z-10"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-[#1a1a1a]/95 backdrop-blur-xl rounded-3xl shadow-lg p-6 border border-white/10">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 hover:text-white font-medium text-sm transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="w-full bg-[#ff6b35] hover:bg-[#ff7d4d] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
