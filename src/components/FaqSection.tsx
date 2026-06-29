/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-100 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Title details */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold text-xs tracking-wider uppercase mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            Common Questions
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Answers to the most common questions from small business owners.
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className="rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-colors hover:border-slate-350"
              >
                {/* Accordion header button */}
                <button
                  id={`faq-toggle-btn-${index}`}
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 sm:py-5 flex items-center justify-between gap-4 font-display font-bold text-slate-900 text-sm sm:text-base transition-colors hover:text-accent select-none"
                >
                  <span>{faq.question}</span>
                  <span className="flex-shrink-0">
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-accent' : ''
                      }`}
                    />
                  </span>
                </button>

                {/* Animated expandable body height */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-150/60 pt-4 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic quote conversion call-out */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-bold text-slate-900 text-sm">Have a unique integration idea in mind?</h4>
            <p className="text-xs text-slate-500 mt-1">Whether you need an API integration, full Spanner connections, or Google Sheets hooks—let's speak directly!</p>
          </div>
          <a
            href="#contact"
            className="btn-press bg-navy-900 text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-navy-950 transition shadow-soft flex-shrink-0"
          >
            Ask Baston Directly
          </a>
        </div>

      </div>
    </section>
  );
}
