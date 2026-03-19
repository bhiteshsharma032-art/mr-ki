'use client';

import { Twitter, Linkedin, Github } from 'lucide-react';

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

  return (
    <footer className="bg-bg-secondary border-t border-border">
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
