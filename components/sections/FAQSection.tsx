'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { FloatingCard } from '@/components/ui/FloatingCard';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How long does it take to implement an automation solution?",
    answer: "Most solutions are fully deployed within 2-4 weeks. Simple automations can be live in as little as 5 days, while complex enterprise integrations may take 6-8 weeks. We always provide a detailed timeline during our discovery call."
  },
  {
    question: "What if the automation doesn't deliver the promised ROI?",
    answer: "We stand behind our work with a performance guarantee. If the automation doesn't meet the agreed-upon metrics within 90 days, we'll optimize it at no additional cost. We've maintained a 98% client satisfaction rate because we only take on projects where we're confident in the outcome."
  },
  {
    question: "Do I need to change my existing tools and software?",
    answer: "No. We build automations that integrate with your existing tech stack — whether that's Salesforce, HubSpot, Google Workspace, Slack, or custom internal tools. We work with what you have."
  },
  {
    question: "How much does it cost?",
    answer: "Every project is custom-tailored to your specific needs. We provide detailed proposals with ROI projections after understanding your requirements. Our clients typically see significant returns within the first year. Contact us for a free consultation and custom quote."
  },
  {
    question: "Will AI replace my employees?",
    answer: "Our goal is augmentation, not replacement. We automate the tedious, repetitive tasks so your team can focus on creative, strategic, and high-value work. Most clients report higher employee satisfaction after automation."
  },
  {
    question: "What ongoing support do you provide?",
    answer: "Every project includes comprehensive support and monitoring. After the initial period, we offer flexible maintenance plans that include monitoring, updates, optimization, and priority support to ensure your AI systems continue performing at peak efficiency."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-primary">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary">
            Everything you need to know about working with us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <FloatingCard
                key={index}
                intensity="light"
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-accent-primary shadow-soft-lg' 
                    : 'hover:border-accent-primary/50'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left py-4 px-5 md:py-5 md:px-6 flex items-center justify-between gap-4 group"
                >
                  <span className="text-base md:text-lg font-semibold text-text-primary pr-4 leading-snug">
                    {faq.question}
                  </span>
                  
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                      ? 'bg-accent-primary text-white rotate-90' 
                      : 'bg-bg-secondary text-text-secondary group-hover:bg-accent-primary/10 group-hover:text-accent-primary'
                  }`}>
                    {isOpen ? (
                      <X className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                  style={{
                    overflow: 'hidden'
                  }}
                >
                  <div className="px-5 md:px-6 pb-4 md:pb-5">
                    <div className={`w-12 h-0.5 bg-accent-primary mb-4 transition-all duration-500 ${
                      isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`} />
                    <p className={`text-text-secondary leading-relaxed transition-all duration-500 delay-100 ${
                      isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FloatingCard>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">
            Still have questions?
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="text-accent-primary font-semibold hover:underline transition-all duration-300"
          >
            Schedule a call with our team →
          </button>
        </div>
      </div>
    </section>
  );
}
