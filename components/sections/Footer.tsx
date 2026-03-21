'use client';

import { Linkedin } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Linkedin, href: 'https://de.linkedin.com/in/heikoknoedel/en', label: 'LinkedIn' }
];

export default function Footer() {

  return (
    <footer className="bg-bg-secondary border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center">
          {/* Brand Column */}
          <div className="text-center max-w-md">
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              MR KI
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Intelligent automation solutions that deliver measurable results.
            </p>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary hover:scale-110 transition-all duration-300 shadow-soft-sm hover:shadow-soft-md"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
          <p>© 2026 Mr Ki. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-accent-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
