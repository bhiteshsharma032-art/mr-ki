'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'automation-audit'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative pt-32 pb-20 bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-[#ff6b35] uppercase tracking-wider mb-4">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business<br />
            with <span className="text-[#ff6b35]">AI Automation?</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss how we can save you 40+ hours per week with custom AI automation solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff6b35] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff6b35] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff6b35] transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  What are you interested in?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#ff6b35] transition-colors"
                >
                  <option value="automation-audit">Free Automation Assessment</option>
                  <option value="consultation">Business Consultation</option>
                  <option value="custom-ai">Custom AI Development</option>
                  <option value="chatbot">AI Chatbot Solutions</option>
                  <option value="workflow">Workflow Automation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff6b35] transition-colors resize-none"
                  placeholder="Describe your current challenges and what you'd like to automate..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-[#ff6b35] hover:bg-[#ff7d4d] disabled:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email Us</h4>
                    <p className="text-gray-400">hello@mrki.ai</p>
                    <p className="text-gray-400">support@mrki.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Call Us</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400">San Francisco, CA</p>
                    <p className="text-gray-400">Remote-First Company</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Response Time</h4>
                    <p className="text-gray-400">Within 24 hours</p>
                    <p className="text-gray-500 text-sm">Usually much faster</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">Quick Questions?</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-[#ff6b35] pl-4">
                  <h4 className="font-semibold text-white mb-1">How long does implementation take?</h4>
                  <p className="text-gray-400 text-sm">Most projects are completed within 2-4 weeks.</p>
                </div>
                
                <div className="border-l-4 border-[#ff6b35] pl-4">
                  <h4 className="font-semibold text-white mb-1">What's included in the service?</h4>
                  <p className="text-gray-400 text-sm">Complete development, deployment, training, and ongoing support.</p>
                </div>
                
                <div className="border-l-4 border-[#ff6b35] pl-4">
                  <h4 className="font-semibold text-white mb-1">Do you offer guarantees?</h4>
                  <p className="text-gray-400 text-sm">Yes, we offer a 30-day satisfaction guarantee on all projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendly Booking Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Schedule a <span className="text-[#ff6b35]">Free Consultation</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Book a 30-minute call to discuss your automation needs and see how we can help transform your business.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/mrkiglobal/30min?hide_gdpr_banner=1" 
              style={{ minWidth: '320px', height: '800px', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}