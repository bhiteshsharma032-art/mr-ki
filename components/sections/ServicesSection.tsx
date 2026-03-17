'use client';

import { Bot, Workflow, FileSearch, BarChart3, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FloatingCard } from '@/components/ui/FloatingCard';

const SERVICES = [
  {
    title: "Intelligent Chatbots & Assistants",
    description: "Custom AI agents that handle customer support, lead qualification, and internal queries — 24/7, in any language.",
    features: ["GPT-4 Powered", "Multi-language", "CRM Integration", "Analytics Dashboard"],
    icon: Bot,
    bgGradient: "from-accent-primary/20 to-transparent",
    borderClass: "hover:border-accent-primary/50",
    shadowClass: "hover:shadow-[0_8px_32px_rgba(232,85,61,0.15)]",
    iconBg: "bg-accent-primary/10",
    iconColor: "text-accent-primary",
  },
  {
    title: "Workflow Automation",
    description: "End-to-end process automation that connects your tools, eliminates manual steps, and runs flawlessly.",
    features: ["Zapier/Make Alternative", "Custom Logic", "Error Handling", "Real-time Monitoring"],
    icon: Workflow,
    bgGradient: "from-accent-secondary/20 to-transparent",
    borderClass: "hover:border-accent-secondary/50",
    shadowClass: "hover:shadow-[0_8px_32px_rgba(74,222,128,0.15)]",
    iconBg: "bg-accent-secondary/10",
    iconColor: "text-accent-secondary",
  },
  {
    title: "Document Processing & OCR",
    description: "AI-powered extraction, classification, and processing of invoices, contracts, and forms at scale.",
    features: ["99.2% Accuracy", "Any Format", "Auto-Classification", "Compliance Ready"],
    icon: FileSearch,
    bgGradient: "from-accent-tertiary/20 to-transparent",
    borderClass: "hover:border-accent-tertiary/50",
    shadowClass: "hover:shadow-[0_8px_32px_rgba(251,191,36,0.15)]",
    iconBg: "bg-accent-tertiary/10",
    iconColor: "text-accent-tertiary",
  },
  {
    title: "Predictive Analytics & Reporting",
    description: "Automated dashboards and AI-driven insights that turn your raw data into strategic decisions.",
    features: ["Real-time Dashboards", "Anomaly Detection", "Custom Reports", "Forecasting"],
    icon: BarChart3,
    bgGradient: "from-accent-primary/20 to-transparent",
    borderClass: "hover:border-accent-primary/50",
    shadowClass: "hover:shadow-[0_8px_32px_rgba(232,85,61,0.15)]",
    iconBg: "bg-accent-primary/10",
    iconColor: "text-accent-primary",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-accent-primary uppercase tracking-wider mb-4">
            WHAT WE DO
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            AI Solutions That Actually Work
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We build custom AI automations that save time, reduce costs, and scale with your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <FloatingCard
                key={index}
                intensity="medium"
                className={cn(
                  "relative p-8 group",
                  service.borderClass
                )}
              >
                <div className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-700 bg-gradient-to-br",
                  service.bgGradient
                )} />
                
                {/* Icon */}
                <div className={cn(
                  "w-16 h-16 rounded-3xl flex items-center justify-center border border-border/50 mb-6 transition-all duration-300 group-hover:scale-110",
                  service.iconBg
                )}>
                  <Icon className={cn("w-8 h-8", service.iconColor)} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-accent-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
