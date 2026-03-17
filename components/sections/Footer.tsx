'use client';

import { useState } from 'react';
import { Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';

const footerLinks = {
  services: [
    'Chatbot Development',
    'Workflow Automation',
    'Document Processing',
    'Predictive Analytics',
    'Custom Integrations'
  ],
  company: [
    'About Us',
    'Case Studies',
    'Blog',
    'Careers',
    'Contact'
  ],
  legal: [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'SOC 2 Compliance'
  ]
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' }
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-bg-secondary border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              Stay ahead of the automation curve
            </h3>
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-full bg-bg-card border text-text-primary placeholder:text-text-secondary focus:outline-none transition-all duration-300 shadow-soft-sm ${
                    isFocused 
                      ? 'border-accent-primary shadow-soft-lg shadow-accent-primary/20' 
                      : 'border-border'
                  }`}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-accent-primary hover:bg-accent-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-soft-md hover:shadow-soft-lg flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              MR KI
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Intelligent automation solutions that deliver measurable results.
            </p>
            <div className="flex gap-4">
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

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-display font-semibold text-text-primary mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-300 relative group inline-block"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-display font-semibold text-text-primary mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-300 relative group inline-block"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-lg font-display font-semibold text-text-primary mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-300 relative group inline-block"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
            <p>© 2024 Mr Ki. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with precision in San Francisco <span className="text-lg">🌉</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
