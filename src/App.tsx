/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Zap, 
  Check, 
  MapPin, 
  Calendar, 
  Monitor, 
  Compass, 
  Heart, 
  ArrowUpRight,
  Phone,
  Rocket,
  Settings
} from 'lucide-react';

import PortfolioShowcase from './components/PortfolioShowcase';
import StarterPricing from './components/StarterPricing';
import InteractiveMockup from './components/InteractiveMockup';
import FaqSection from './components/FaqSection';
import ContactForm from './components/ContactForm';
import Helmet from './components/Helmet';
import PolicyModal, { PolicyType } from './components/PolicyModal';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);

  const stepItems = [
    {
      num: '01',
      title: 'Free 15-minute Discovery Call',
      days: 'Step 1',
      desc: 'We chat about your business, goals, and content. I review your current online presence (Facebook, Google, etc.) and give honest feedback. No obligation.',
      icon: 'phone',
    },
    {
      num: '02',
      title: 'I Build It Fast with AI',
      days: 'Step 2',
      desc: 'I create a clean, modern 5–7 page website using advanced AI tools + my design expertise. You’ll get a private preview link within a few days. Includes your branding, contact form, WhatsApp button, and more. One round of revisions included.',
      icon: 'sparkles',
    },
    {
      num: '03',
      title: 'Launch with Your Domain',
      days: 'Step 3',
      desc: 'Pay the balance. I register or point your professional .co.za domain (via Hostinger) and deploy the site to a global CDN (Netlify) so it loads instantly for customers anywhere in South Africa. Full security (HTTPS) included.',
      icon: 'rocket',
    },
    {
      num: '04',
      title: 'Ongoing Management (R200 every 2 months)',
      days: 'Step 4',
      desc: 'This is what most clients love. I handle all updates, security, performance, SEO tweaks, and minor changes for you. You just WhatsApp or email me what you need (e.g. “update prices” or “add a new service”). I do it and redeploy — no hassle.',
      icon: 'settings',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans select-none text-slate-700 bg-[#fcfcfe]">
      <Helmet 
        title="Baston — Handcrafted Custom Web Design & WebWorks" 
        description="Premium, fast, and high-converting custom-coded websites built from scratch using React, Vite, and Tailwind CSS by Baston. Stand out dynamically in South Africa."
      />
      
      {/* Sticky Glass Header Navigation */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
          <nav className="glass rounded-2xl shadow-soft flex items-center justify-between px-4 sm:px-5 py-3 relative z-50">
            <a href="#" className="flex items-center gap-3 group animate-fade-in">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-glow group-hover:scale-[1.03] transition-transform overflow-hidden border border-slate-100">
                <img 
                  src="https://i.ibb.co/gG5G1km/designarena-image-j768ugqm.png" 
                  alt="OTF WebWorks Logo" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </span>
              <span className="leading-tight">
                <span className="block font-display font-bold text-slate-900 text-[15px] -mb-1">OTF WebWorks</span>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">Design • Develop • Grow</span>
              </span>
            </a>

            {/* Desktop link navigation */}
            <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-slate-600/90">
              <a href="#work" className="hover:text-slate-900 transition-colors">Portfolio</a>
              <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
              <a href="#timeline" className="hover:text-slate-900 transition-colors">Our Process</a>
              <a href="#faq" className="hover:text-slate-900 transition-colors">FAQs</a>
              <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            </div>

            {/* Desktop CTA actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href="#contact" 
                className="btn-press inline-flex items-center gap-2 text-[13px] font-bold px-4.5 py-2.5 rounded-xl bg-amber-500 text-white shadow-[0_10px_25px_-10px_rgba(245,158,11,0.6)] hover:bg-amber-600 hover:shadow-soft transition-all"
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Mobile menu panel trigger button */}
            <button 
              id="menu-toggle-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {/* Smooth sliding mobile navigation panel */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                id="mobile-drawer"
                initial={{ opacity: 0, y: -15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden mt-2 glass rounded-2xl shadow-soft border border-slate-200/70 p-4 absolute inset-x-4 z-40"
              >
                <div className="grid gap-1.5 text-[14px] font-semibold text-slate-700">
                  <a href="#work" onClick={() => setMobileMenuOpen(false)} className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition text-slate-800">Portfolio</a>
                  <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition text-slate-800">Pricing</a>
                  <a href="#timeline" onClick={() => setMobileMenuOpen(false)} className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition text-slate-800">Our Process</a>
                  <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition text-slate-800">FAQs</a>
                  <hr className="border-slate-150 my-1" />
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3.5 py-3 rounded-xl bg-amber-500 text-white font-bold text-center hover:bg-amber-600 shadow-soft transition">
                    Get a custom quote
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* HERO SECTION CONTAINER */}
      <section className="hero-grid pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden relative border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left intro copy block */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full w-fit border border-emerald-100">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                AVAILABLE FOR JUNE PROJECTS
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-black leading-[1.15] tracking-[-0.02em] text-slate-900">
                Professional websites for small South African businesses —{" "}
                <span className="text-amber-500 block mt-2 font-black lg:text-[42px] tracking-tight">R2,500 once-off + only R200 every 2 months</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                Get a modern 5–7 page site live in 5–10 days. I use AI for fast, high-quality results, set up your .co.za domain, host it on a global CDN for instant loading, and handle all updates, security, and minor changes for you.
                <span className="block mt-2.5 font-bold text-slate-800">Perfect if you currently have no website or only Facebook.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://wa.me/27818255340" 
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="btn-press bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_8px_20px_-6px_rgba(245,158,11,0.5)] transition-all text-sm z-10"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.004 2C6.478 2 2 6.478 2 12c0 1.93.546 3.731 1.492 5.275L2.016 22l4.89-.1.29-.18C8.59 22.42 10.25 22.75 12 22.75c5.523 0 10-4.478 10-10S17.523 2 12.004 2zm0 18.25c-1.63 0-3.21-.43-4.6-1.25l-.33-.2-.55.04-2.27.05.06-2.26.04-.54-.21-.35c-.88-1.42-1.35-3.07-1.35-4.74 0-4.83 3.92-8.75 8.75-8.75s8.75 3.92 8.75 8.75-3.922 8.75-8.75 8.75z"/>
                  </svg>
                  WhatsApp Me to Get Started
                </a>
                <a href="#work" className="btn-press bg-slate-900 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl hover:bg-slate-950 transition-all text-sm">
                  View Portfolio
                </a>
                <a href="#timeline" className="btn-press border border-slate-200 bg-slate-50 text-slate-700 px-6 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all text-center text-sm">
                  How It Works
                </a>
              </div>

              {/* Achievements stats ticks / small trust line */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 pt-3 border-t border-slate-200/60 max-w-xl font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                <span>30+ projects delivered • 5–10 day turnaround • Full ongoing management included</span>
              </div>
            </div>

            {/* Right side Interactive Browser Adaptation Showcase widget */}
            <div className="lg:col-span-5 space-y-3">
              <InteractiveMockup />
              <p className="text-center lg:text-left text-xs text-slate-500 italic mt-3 font-medium">
                "Real example built for a small business — live in 7 days with 100/100 speed score"
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* REASONS / ABOUT SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent-700">
                <Compass className="h-4 w-4 animate-spin-slow" /> Real Results
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Websites built for real small businesses — fast and results-driven.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                I help small South African businesses that currently have no website (or only Facebook) get a clean, modern, professional online presence quickly. Using AI tools combined with clean custom development, I deliver fast-loading sites in 5–10 days — without the bloated templates or long timelines of traditional agencies.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="rounded-[1.25rem] border border-sky-100 bg-sky-50/40 p-4 space-y-1 shadow-sm flex flex-col justify-between">
                  <div className="text-xl sm:text-2xl font-display font-black text-sky-950">&lt; 1.8s</div>
                  <div className="text-[9px] text-sky-700 font-bold uppercase tracking-wider leading-snug">Average FCP Mobile Speed</div>
                </div>
                <div className="rounded-[1.25rem] border border-amber-100 bg-amber-50/40 p-4 space-y-1 shadow-sm flex flex-col justify-between">
                  <div className="text-xl sm:text-2xl font-display font-black text-amber-950">0</div>
                  <div className="text-[9px] text-amber-700 font-bold uppercase tracking-wider leading-snug">Missed Launch Deadlines</div>
                </div>
                <div className="rounded-[1.25rem] border border-indigo-100 bg-indigo-50/40 p-4 space-y-1 shadow-sm flex flex-col justify-between">
                  <div className="text-xl sm:text-2xl font-display font-black text-indigo-950">100%</div>
                  <div className="text-[9px] text-indigo-700 font-bold uppercase tracking-wider leading-snug">Source Code Ownership</div>
                </div>
                <div className="rounded-[1.25rem] border border-emerald-100 bg-emerald-50/40 p-4 space-y-1 shadow-sm flex flex-col justify-between">
                  <div className="text-xl sm:text-2xl font-display font-black text-emerald-950">5–10</div>
                  <div className="text-[9px] text-emerald-700 font-bold uppercase tracking-wider leading-snug">Day Reliable Delivery</div>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic font-medium pt-2 block pl-1 decoration-amber-500/30">
                “I keep overhead low so small businesses get premium quality without the premium price tag.”
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FILTERABLE PORTFOLIO SHOWCASE */}
      <PortfolioShowcase />

      {/* STARTER PACKAGE PRICING SECTION */}
      <StarterPricing />

      {/* STEP-BY-STEP DEV WORK TIMELINE */}
      <section id="timeline" className="py-16 sm:py-24 bg-white border-b border-indigo-50/20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent">
              Let's align expectations
            </span>
            <h2 className="font-display text-2.5xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 leading-tight">
              Get Your Professional Website Live in 5–10 Days — Here’s Exactly How It Works
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base">
              No tech skills needed from you. I handle everything using AI for speed and quality.
            </p>
          </div>

          {/* Visual card sequence timeline */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepItems.map((step, idx) => (
              <motion.div 
                key={idx}
                id={`timeline-card-${idx}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-8 rounded-[2rem] bg-white border border-slate-100 relative space-y-4 shadow-sm hover:shadow-md hover:border-slate-200/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100/50">
                      {step.icon === 'phone' && <Phone className="h-5 w-5 text-emerald-500" />}
                      {step.icon === 'sparkles' && <Sparkles className="h-5 w-5 text-amber-500" />}
                      {step.icon === 'rocket' && <Rocket className="h-5 w-5 text-sky-500" />}
                      {step.icon === 'settings' && <Settings className="h-5 w-5 text-indigo-500" />}
                    </div>
                    <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">{step.days}</span>
                  </div>
                  
                  <div className="space-y-1.5">
                    <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Strong CTA Block */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl border border-white/5">
            <div className="absolute inset-0 bg-dot-grid opacity-5 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight">
                Ready to get started?
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                Let's build a high-performance website that works for you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                <a 
                  href="https://wa.me/27818255340" 
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.004 2C6.478 2 2 6.478 2 12c0 1.93.546 3.731 1.492 5.275L2.016 22l4.89-.1.29-.18C8.59 22.42 10.25 22.75 12 22.75c5.523 0 10-4.478 10-10S17.523 2 12.004 2zm0 18.25c-1.63 0-3.21-.43-4.6-1.25l-.33-.2-.55.04-2.27.05.06-2.26.04-.54-.21-.35c-.88-1.42-1.35-3.07-1.35-4.74 0-4.83 3.92-8.75 8.75-8.75s8.75 3.92 8.75 8.75-3.922 8.75-8.75 8.75z"/>
                  </svg>
                  WhatsApp Me Now
                </a>
                <a 
                  href="#contact" 
                  className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all text-sm"
                >
                  Book Free 15-min Discovery
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* ACCORDION FAQ BLOCK */}
      <FaqSection />

      {/* INTEGRATED PROPOSAL CONTACT FORM */}
      <ContactForm />

      {/* CLEAN FOOTER SCHEME */}
      <footer className="bg-navy-950 text-white py-12 sm:py-16 border-t border-white/5 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/5">
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white overflow-hidden border border-white/10">
                  <img 
                    src="https://i.ibb.co/gG5G1km/designarena-image-j768ugqm.png" 
                    alt="OTF WebWorks Logo" 
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </span>
                <span className="leading-tight">
                  <span className="block font-display font-bold text-white text-[15px] -mb-1">OTF WebWorks</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold block">Design • Develop • Grow</span>
                </span>
              </a>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                We craft custom design packages and fast hand-coded digital sites for ambitious small businesses looking to double client signups online.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-slate-400 font-semibold">
              <a href="#work" className="hover:text-white transition-colors">Selected Projects</a>
              <a href="#pricing" className="hover:text-white transition-colors">Starter Pricing</a>
              <a href="#timeline" className="hover:text-white transition-colors">Our Dev Path</a>
              <a href="#faq" className="hover:text-white transition-colors">Support Q&As</a>
              <a href="#contact" className="hover:text-accent transition-colors">Submit Spec Proposals</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-white/5 pt-6">
            <div>
              © 2025 OTF WebWorks • All rights reserved. Hand-coded from scratch using React, Vite & Tailwind.
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-red-500 fill-red-500" />
                Limpopo, South Africa
              </span>
              <a href="#contact" className="hover:text-white flex items-center gap-0.5">
                Baston Direct Inbound <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* highly responsive legal buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 pt-4 border-t border-white/5 text-[11px] text-slate-500">
            <span className="text-slate-600 uppercase tracking-wider text-[9px] font-bold">South Africa Compliance:</span>
            <button
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-amber-400 transition-all cursor-pointer font-medium hover:scale-102 focus:outline-none text-left"
              id="privacy-policy-btn"
            >
              Privacy Policy (POPIA)
            </button>
            <span className="text-white/10 hidden sm:inline">•</span>
            <button
              onClick={() => setActivePolicy('terms')}
              className="hover:text-amber-400 transition-all cursor-pointer font-medium hover:scale-102 focus:outline-none text-left"
              id="terms-service-btn"
            >
              Terms of Service & Logistics (EFT/Courier)
            </button>
            <span className="text-white/10 hidden sm:inline">•</span>
            <button
              onClick={() => setActivePolicy('refund')}
              className="hover:text-amber-400 transition-all cursor-pointer font-medium hover:scale-102 focus:outline-none text-left"
              id="refund-return-btn"
            >
              Refund & CPA Sanitary Policy
            </button>
          </div>

        </div>
      </footer>

      {/* Corporate Policy Modal with Motion Animations */}
      <AnimatePresence>
        {activePolicy && (
          <PolicyModal
            isOpen={activePolicy !== null}
            initialType={activePolicy}
            onClose={() => setActivePolicy(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
