/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, FileText, Sparkles, Flame, Clock, RefreshCw } from 'lucide-react';

interface ContactFormProps {
  appliedSpecSummary?: string;
  appliedSpecCost?: number;
  onClearSpec?: () => void;
}

export default function ContactForm({ 
  appliedSpecSummary = '', 
  appliedSpecCost = 0, 
  onClearSpec = () => {} 
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: '',
  });

  const [loadingStep, setLoadingStep] = useState<string | null>(null);
  const [successResponse, setSuccessResponse] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // When a spec summary changes, append it to the message or show it in state
  useEffect(() => {
    if (appliedSpecSummary) {
      setFormData(prev => ({
        ...prev,
        message: prev.message 
          ? prev.message + '\n\n' + appliedSpecSummary 
          : appliedSpecSummary
      }));
    }
  }, [appliedSpecSummary]);

  const messagePresets = [
    'Redesign custom business mockup',
    'Launch complete web startup MVP',
    'Configure custom scheduling booking system',
    'E-commerce migration from Squarespace/Shopify'
  ];

  const handleApplyPreset = (preset: string) => {
    setFormData(prev => ({
      ...prev,
      message: `Hi OTF WEBWORKS, I'm reaching out to help me: ${preset}.\n\n` + (prev.message ? prev.message : '')
    }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.businessName.trim()) errs.businessName = 'Please mention your business name';
    if (!formData.message.trim()) errs.message = 'Please specify brief project expectations';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate sending progress with high fidelity state changes
    const steps = [
      'Establishing connection with WebWorks...',
      'Validating custom project requirements...',
      'Compiling estimated budget sheet details...',
      'Formatting incoming proposal payload...'
    ];

    let currentStep = 0;
    setLoadingStep(steps[0]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setLoadingStep(steps[currentStep]);
      } else {
        clearInterval(interval);
        setLoadingStep(null);
        
        // Formulated simulated custom response based on customer data
        const clientEmail = formData.email;
        const clientName = formData.name;
        const biz = formData.businessName;
        const codePriceDetail = appliedSpecCost > 0 
          ? `at the estimated R${appliedSpecCost} tier`
          : 'budget parameters';

        const customReply = `
          🚀 Hi ${clientName}, check your inbox! 

          I have received your custom proposal query for "${biz}" ${codePriceDetail}. I'm already reviewing your layout needs. 

          A full, high-fidelity project scope schedule and interactive Figma wireframe draft will be delivered to you at "${clientEmail}" in less than 3 hours (before standard 24h limits!). 

          Let's design and code something beautiful together. Talk soon! — OTF WEBWORKS
        `;
        setSuccessResponse(customReply);

        // Compose and trigger direct email draft via mailto
        const mailtoLink = `mailto:otfwebworks@gmail.com?subject=${encodeURIComponent(
          `Inquiry: Custom Project Spec for ${biz}`
        )}&body=${encodeURIComponent(
          `Hi OTF WEBWORKS,

I would like to inquire about a custom project specification for my business.

--- PROJECT DETAILS ---
Client Name: ${clientName}
Business Name: ${biz}
Contact Email: ${clientEmail}
Estimated Cost Target: ${appliedSpecCost > 0 ? `R${appliedSpecCost}` : 'To be estimated'}

--- EXPECTATIONS / SPECIFICATIONS ---
${formData.message}

---
Inquiry submitted via OTF WebWorks`
        )}`;
        
        window.location.href = mailtoLink;
      }
    }, 1000);
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', businessName: '', message: '' });
    setSuccessResponse(null);
    setLoadingStep(null);
    setErrors({});
    onClearSpec();
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-dot-grid relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left instructions block */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-600">
                <Flame className="h-4 w-4" /> Start Colding
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
                Let's get website <span className="text-accent">built right</span>.
              </h2>
              <p className="text-slate-650 text-base leading-relaxed">
                Fill in standard details below. I respond to all queries with a custom price draft, target timelines, and wireframe blueprint within <strong className="text-slate-900">24 hours</strong>.
              </p>

              {/* Verified badges */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white border border-slate-100 shadow-sm rounded-xl">
                  <span className="block text-2xl font-bold font-display text-navy-900">100%</span>
                  <span className="text-xs text-slate-500 block mt-1 tracking-tight">On-time Completion</span>
                </div>
                <div className="p-4 bg-white border border-slate-100 shadow-sm rounded-xl">
                  <span className="block text-2xl font-bold font-display text-navy-900">&lt; 3h</span>
                  <span className="text-xs text-slate-550 block mt-1 tracking-tight">Average response</span>
                </div>
              </div>
            </div>

            {/* OTF WEBWORKS' responsive quotes badge */}
            <div className="p-6 rounded-[1.5rem] bg-white border border-slate-100 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full border-2 border-emerald-500 overflow-hidden bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=120"
                    alt="OTF WEBWORKS" 
                    className="h-full w-full object-cover"
                  />
                </span>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">OTF WEBWORKS — Lead Web Architects</h4>
                  <p className="text-xs text-slate-500">OTF WEBWORKS Development Team</p>
                </div>
              </div>
              <blockquote className="text-xs text-slate-600 leading-relaxed italic">
                "We don't play telemarketing games or send boilerplate templates. When you inquire, we outline a real wireframe preview and performance budget for your layout."
              </blockquote>
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-x-4 gap-y-1 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="font-bold text-slate-700">Email:</span>
                  <a href="mailto:otfwebworks@gmail.com" className="text-amber-600 hover:underline">otfwebworks@gmail.com</a>
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-bold text-slate-700">WhatsApp:</span>
                  <a href="https://wa.me/27818255340" target="_blank" referrerPolicy="no-referrer" className="text-emerald-600 hover:underline font-semibold">081 825 5340</a>
                </span>
              </div>
            </div>
          </div>

          {/* Right hand interactive form card */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] border border-slate-100 shadow-md overflow-hidden flex flex-col justify-center min-h-[500px]">
            <AnimatePresence mode="wait">
              
              {/* Sending / Loading Progress Overlay */}
              {loadingStep && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 text-center flex flex-col items-center justify-center space-y-4 h-full"
                >
                  <RefreshCw className="animate-spin h-10 w-10 text-amber-500" />
                  <h4 className="font-display font-bold text-slate-900 text-lg">Submitting custom proposal...</h4>
                  <p className="text-xs text-slate-550 animate-pulse">{loadingStep}</p>
                </motion.div>
              )}

              {/* Submitted success state presentation page */}
              {successResponse && !loadingStep && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 space-y-6"
                >
                  <div className="text-center space-y-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                      <CheckCircle className="h-6 w-6" />
                    </span>
                    <h3 className="font-display font-extrabold text-slate-900 text-xl sm:text-2xl">Proposal Request Compiled!</h3>
                    <p className="text-xs text-slate-500">Simulating live direct response channel in real-time...</p>
                  </div>

                  <div className="p-5 sm:p-6 bg-slate-900 text-slate-100 font-sans rounded-2xl text-xs sm:text-sm leading-relaxed border border-orange-500/20 whitespace-pre-line shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]">
                    {successResponse}
                  </div>

                  <div className="text-center pt-2">
                    <button
                      onClick={handleResetForm}
                      className="btn-press font-semibold text-slate-600 hover:text-slate-900 transition text-xs border border-slate-200 px-4 py-2.5 rounded-xl hover:bg-slate-50"
                    >
                      Configure another specification
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Standard active contact input form */}
              {!loadingStep && !successResponse && (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 sm:p-8 space-y-5"
                >
                  {/* Estimator custom specs header warnings if loaded */}
                  {appliedSpecCost > 0 && (
                    <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <FileText className="h-5 w-5 text-amber-650" />
                        <div>
                          <span className="block text-xs font-bold text-slate-900">Custom Planner Spec Loaded!</span>
                          <span className="block text-[10px] text-slate-500">Grand Total Estimate: ${appliedSpecCost} USD</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={onClearSpec}
                        className="text-[10px] text-rose-600 font-semibold hover:underline"
                      >
                        Reset Option
                      </button>
                    </div>
                  )}

                  {/* Preset clips helper for quick inputs */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Quick Query Presets (Click to autofill):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {messagePresets.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleApplyPreset(preset)}
                          className="px-2 py-1 text-[10px] font-medium border border-slate-200 scroll-smooth rounded-lg text-slate-650 hover:bg-slate-50 transition active:scale-95 text-left"
                        >
                          + {preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Arthur Sterling"
                        className={`w-full px-4 py-2.5 text-slate-800 text-sm rounded-xl border bg-slate-50 focus:bg-white transition-all outline-none ${
                          errors.name ? 'border-rose-450 focus:border-rose-500' : 'border-slate-200 focus:border-accent'
                        }`}
                      />
                      {errors.name && <span className="text-[10px] text-rose-600 block font-medium">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="arthur@brewbloomcafe.com"
                        className={`w-full px-4 py-2.5 text-slate-800 text-sm rounded-xl border bg-slate-50 focus:bg-white transition-all outline-none ${
                          errors.email ? 'border-rose-450 focus:border-rose-500' : 'border-slate-200 focus:border-accent'
                        }`}
                      />
                      {errors.email && <span className="text-[10px] text-rose-600 block font-medium">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Business Name */}
                  <div className="space-y-1">
                    <label htmlFor="contact-business" className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                      Business Name & Web Domain (if any)
                    </label>
                    <input
                      type="text"
                      id="contact-business"
                      value={formData.businessName}
                      onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="Brew & Bloom Coffee Co."
                      className={`w-full px-4 py-2.5 text-slate-800 text-sm rounded-xl border bg-slate-50 focus:bg-white transition-all outline-none ${
                        errors.businessName ? 'border-rose-450 focus:border-rose-500' : 'border-slate-200 focus:border-accent'
                      }`}
                    />
                    {errors.businessName && <span className="text-[10px] text-rose-600 block font-medium">{errors.businessName}</span>}
                  </div>

                  {/* Project description or specs */}
                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest">
                      What are your expectations for the web project?
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We want to clean up our mobile ordering experience and launch a new reservations system. We need complete ownership of code."
                      className={`w-full px-4 py-3 text-slate-800 text-sm rounded-xl border bg-slate-50 focus:bg-white transition-all outline-none resize-none font-sans ${
                        errors.message ? 'border-rose-450 focus:border-rose-500' : 'border-slate-200 focus:border-accent'
                      }`}
                    />
                    {errors.message && <span className="text-[10px] text-rose-600 block font-medium">{errors.message}</span>}
                  </div>

                  {/* Actions footer submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="submit-proposal-btn"
                      className="w-full btn-press py-3.5 px-6 rounded-xl bg-navy-900 hover:bg-navy-950 transition duration-200 text-white font-bold flex items-center justify-center gap-2 shadow-soft text-sm"
                    >
                      <Send className="h-4 w-4" />
                      Inquire Custom Project Spec
                    </button>
                    <p className="text-[10px] text-slate-400 text-center mt-3">
                      🔒 Your email and business ideas are kept completely private. No spam or advertising.
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-700">Email:</span>
                        <a href="mailto:otfwebworks@gmail.com" className="text-amber-600 hover:underline font-medium">otfwebworks@gmail.com</a>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-700">WhatsApp:</span>
                        <a href="https://wa.me/27818255340" target="_blank" referrerPolicy="no-referrer" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12.004 2C6.478 2 2 6.478 2 12c0 1.93.546 3.731 1.492 5.275L2.016 22l4.89-.1.29-.18C8.59 22.42 10.25 22.75 12 22.75c5.523 0 10-4.478 10-10S17.523 2 12.004 2zm0 18.25c-1.63 0-3.21-.43-4.6-1.25l-.33-.2-.55.04-2.27.05.06-2.26.04-.54-.21-.35c-.88-1.42-1.35-3.07-1.35-4.74 0-4.83 3.92-8.75 8.75-8.75s8.75 3.92 8.75 8.75-3.922 8.75-8.75 8.75z"/>
                          </svg>
                          081 825 5340
                        </a>
                      </div>
                    </div>
                  </div>

                </motion.form>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
