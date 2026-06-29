/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Shield, FileText, RotateCcw, CheckCircle2, AlertTriangle, Truck, CreditCard } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | 'refund';

interface PolicyModalProps {
  isOpen: boolean;
  initialType: PolicyType;
  onClose: () => void;
}

export default function PolicyModal({ isOpen, initialType, onClose }: PolicyModalProps) {
  const [activeTab, setActiveTab] = useState<PolicyType>(initialType);

  useEffect(() => {
    setActiveTab(initialType);
  }, [initialType]);

  if (!isOpen) return null;

  const tabs = [
    { id: 'privacy' as PolicyType, label: 'Privacy (POPIA)', icon: Shield },
    { id: 'terms' as PolicyType, label: 'Terms & Logistics', icon: FileText },
    { id: 'refund' as PolicyType, label: 'Refunds (CPA)', icon: RotateCcw },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop blur effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        id="policy-backdrop"
      />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]"
        id="policy-container"
      >
        {/* Header Block */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">Legal Documents</span>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mt-0.5">Corporate Policies</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all hover:scale-105 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-3 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive 
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/15' 
                    : 'bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-h-[50vh]">
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="flex items-start gap-3 bg-blue-50/50 dark:bg-blue-950/20 p-4 rounded-2xl border border-blue-100/60 dark:border-blue-900/30">
                <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">POPI Act Compliance Statement</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    In compliance with the Protection of Personal Information Act (POPIA), Act No. 4 of 2013 of South Africa, OTF WEBWORKS ensures total transparency and data security.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <section className="space-y-2">
                  <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500">1</span>
                    Information Collection Limits
                  </h5>
                  <p className="pl-7 text-xs text-slate-600 dark:text-slate-400">
                    We collect only the essential personal identifier details (e.g. name, professional email, business telephone numbers, WhatsApp numbers, and design briefs) supplied voluntarily by you during interactive contact form submissions or direct discovery call sessions.
                  </p>
                </section>

                <section className="space-y-2">
                  <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500">2</span>
                    Processing Purpose & Safety Measures
                  </h5>
                  <p className="pl-7 text-xs text-slate-600 dark:text-slate-400">
                    Your information is strictly used for drafting custom proposals, preparing high-fidelity wireframes, and aligning design styles with your brand targets. Data is securely stored within isolated cloud servers with strict cryptographic controls. We never distribute or sell database access to third-party advertising operations.
                  </p>
                </section>

                <section className="space-y-2">
                  <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500">3</span>
                    Consent and Data Subject Rights
                  </h5>
                  <p className="pl-7 text-xs text-slate-600 dark:text-slate-400">
                    By submitting our forms or scheduling an inbound call, you explicitly consent to the lawful storage and processing of your details. Under POPIA regulations, you retain full rights to query, access, correct, or request the complete deletion of your files from our active workspace records at any point.
                  </p>
                </section>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div className="flex items-start gap-3 bg-amber-50/50 dark:bg-amber-950/20 p-4 rounded-2xl border border-amber-100/60 dark:border-amber-900/30">
                <CreditCard className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">EFT Secure Payment Safeguards</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    All digital services and product design processes are governed by official, cleared financial transactions.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <section className="space-y-2">
                  <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500">1</span>
                    EFT Requirements & Project Queue
                  </h5>
                  <p className="pl-7 text-xs text-slate-600 dark:text-slate-400">
                    To lock in a handcrafted web design slot, a 50% upfront retainer must be paid directly via Electronic Funds Transfer (EFT). The code production phase and custom development sprint will commence exclusively once the EFT transaction has cleared in our bank account and official proof of payment is verified.
                  </p>
                </section>

                <section className="space-y-2">
                  <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500">2</span>
                    Courier & Logistics Policies
                  </h5>
                  <p className="pl-7 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <Truck className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span>
                      For any delivery of physical items (including custom brand guides, printed wireframe specs, or system guidelines packets), we partner with premium South African courier services (such as The Courier Guy or Aramex) to ship packages within 2 to 4 business days. Accurate delivery details and a contact phone number are required before physical dispatch.
                    </span>
                  </p>
                </section>
              </div>
            </div>
          )}

          {activeTab === 'refund' && (
            <div className="space-y-6">
              <div className="flex items-start gap-3 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-2xl border border-emerald-100/60 dark:border-emerald-900/30">
                <AlertTriangle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Consumer Protection Act (CPA) Sanitary Guidelines</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Our refund policies comply with Section 20 of the South African Consumer Protection Act (CPA), Act No. 68 of 2008, maintaining strict hygienic protocols for physical items.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <section className="space-y-2">
                  <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500">1</span>
                    Sanitary Guidelines (Unused Checklists)
                  </h5>
                  <div className="pl-7 text-xs text-slate-600 dark:text-slate-400 space-y-2">
                    <p>
                      Due to the sanitary and high-hygiene nature of specialized personal hardware or customized beauty products (including HD lace elements, wearables, and pristine tag accessories), returns are only accepted if:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-500">
                      <li>The <strong className="text-slate-700 dark:text-slate-300">HD lace remains uncut and unmodified</strong> in any physical form.</li>
                      <li>Original tag seals and secure adhesive tapes are 100% intact and untampered with.</li>
                      <li>The product is in its original, sealed box packaging without signs of handling.</li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-2">
                  <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500">2</span>
                    7-Day Return Timeframe
                  </h5>
                  <p className="pl-7 text-xs text-slate-600 dark:text-slate-400">
                    Returned items must be officially logged and registered in our database within a strict <strong className="text-slate-900 dark:text-white">7-day calendar window</strong> from the date of confirmed courier delivery. Packages sent back after the 7-day period will not be eligible for inspection or refunds.
                  </p>
                </section>

                <section className="space-y-2">
                  <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500">3</span>
                    Restocking Fees & Returns
                  </h5>
                  <p className="pl-7 text-xs text-slate-600 dark:text-slate-400">
                    Return transit courier costs are solely at the client's expense. Approved returns that successfully pass all physical sanitary inspect checks will be fully refunded, minus original delivery fees and a standard 10% restocking/hygiene-reprocessing fee.
                  </p>
                </section>
              </div>
            </div>
          )}
        </div>

        {/* Footer info banner */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Official South African Compliance Checked</span>
          </div>
          <div>
            OTF WebWorks • Reg 2025/110943/07
          </div>
        </div>
      </motion.div>
    </div>
  );
}
