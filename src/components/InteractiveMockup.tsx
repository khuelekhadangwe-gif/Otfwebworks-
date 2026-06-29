/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, ChevronRight, Sparkles, Layout, Database, Star } from 'lucide-react';

import justiceImg from '../assets/images/justice_attorneys_mockup_1782486804204.jpg';
import ironhaulImg from '../assets/images/iron_haul_mockup_1782486819086.jpg';
import shahairImg from '../assets/images/shahair_wigs_mockup_1782486834158.jpg';
import renovationsImg from '../assets/images/luxury_renovations_mockup_1782486846948.jpg';

interface MockupTemplate {
  id: string;
  name: string;
  clientName: string;
  imageUrl: string;
  statsValue: string;
  statsLabel: string;
  featurePill: string;
  secondaryTag: string;
  performanceScore: string;
  avgLcp: string;
}

const TEMPLATES: MockupTemplate[] = [
  {
    id: 'justice',
    name: 'Justice Attorneys',
    clientName: 'justiceattorneys.co.za',
    imageUrl: justiceImg,
    statsValue: '+75%',
    statsLabel: 'increase in consultation bookings',
    featurePill: 'Direct Consultation Scheduler',
    secondaryTag: 'Polokwane & Turf Legal Roster',
    performanceScore: '100/100',
    avgLcp: '0.5s'
  },
  {
    id: 'ironhaul',
    name: 'IronHaul Logistics',
    clientName: 'ironhaul.co.za',
    imageUrl: ironhaulImg,
    statsValue: '+62%',
    statsLabel: 'freight inquiry volume growth',
    featurePill: 'Freight Rate Estimator',
    secondaryTag: 'Interactive dispatch telemetry',
    performanceScore: '99/100',
    avgLcp: '0.6s'
  },
  {
    id: 'shahair',
    name: 'Shahair Premium Wigs',
    clientName: 'shahair.co.za',
    imageUrl: shahairImg,
    statsValue: '+82%',
    statsLabel: 'mobile checkout conversion',
    featurePill: 'Dynamic Wig Builder',
    secondaryTag: 'WhatsApp Checkout Pipeline',
    performanceScore: '99/100',
    avgLcp: '0.7s'
  },
  {
    id: 'renovations',
    name: 'Luxury Renovations',
    clientName: 'luxuryrenovations.co.za',
    imageUrl: renovationsImg,
    statsValue: '+55%',
    statsLabel: 'leads generated from local search',
    featurePill: 'Interactive galleries & estimates',
    secondaryTag: 'Local high-trust reviews',
    performanceScore: '98/100',
    avgLcp: '0.7s'
  }
];

export default function InteractiveMockup() {
  const [activeId, setActiveId] = useState<string>('justice');
  const [autoplay, setAutoplay] = useState<boolean>(true);

  // Cycle through layouts unless user makes a manual selection
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveId(prev => {
        const idx = TEMPLATES.findIndex(t => t.id === prev);
        const nextIdx = (idx + 1) % TEMPLATES.length;
        return TEMPLATES[nextIdx].id;
      });
    }, 6000); // cycle every 6 seconds

    return () => clearInterval(interval);
  }, [autoplay]);

  const active = TEMPLATES.find(t => t.id === activeId) || TEMPLATES[0];

  return (
    <div className="relative">
      {/* Decorative neon ambient glow */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-accent/15 via-accent/5 to-transparent rounded-[2rem] blur-2xl pointer-events-none"></div>

      {/* Floating browser mockup box */}
      <div className="relative rounded-[1.75rem] bg-white shadow-card border border-slate-200 overflow-hidden">
        
        {/* Browser Chrome Bar UI */}
        <div className="flex items-center gap-2 px-4 py-3.5 border-b border-slate-150 bg-slate-50/90 justify-between">
          <div className="flex items-center gap-1.5 flex-1">
            <span className="h-3 w-3 rounded-full bg-rose-400"></span>
            <span className="h-3 w-3 rounded-full bg-amber-400"></span>
            <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
            
            <div className="ml-4 flex-1 max-w-[280px] sm:max-w-[340px] flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-500 font-medium">
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span>otfwebworks.com • {active.clientName} (Demo)</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wide">Live Compiled</span>
          </div>
        </div>

        {/* Browser Viewport Window wrapper */}
        <div className="p-3 sm:p-4">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-gradient-to-b from-slate-50 to-white relative">
            
            {/* Live adaptation transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Main Hero Shot Image */}
                <div className="relative h-[240px] sm:h-[280px] overflow-hidden bg-slate-100">
                  <img
                    src={active.imageUrl}
                    alt={active.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle dark layout gradient layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                </div>

                {/* Grid analytics detail labels below shot */}
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white">
                  <div className="col-span-2 space-y-2">
                    <div className="h-2 w-3/4 rounded bg-slate-200"></div>
                    <div className="h-2 w-5/6 rounded bg-slate-100"></div>
                    <div className="h-2 w-2/3 rounded bg-slate-100"></div>
                    
                    {/* Feature badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="px-2 py-1 rounded-md bg-accent/10 text-accent text-[10px] font-bold tracking-wide flex items-center gap-1">
                        <Layout className="h-2.5 w-2.5" />
                        {active.featurePill}
                      </span>
                      <span className="px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium">
                        {active.secondaryTag}
                      </span>
                    </div>
                  </div>

                  {/* Highlight live statistics panel */}
                  <div className="bg-navy-950 text-white rounded-xl p-3 flex flex-col justify-between shadow-soft">
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1 leading-none">
                      <Star className="h-2.5 w-2.5 text-amber-500 fill-amber-500" /> Live metrics
                    </span>
                    <div className="mt-2.5">
                      <div className="text-xl sm:text-2xl font-display font-black text-amber-400 leading-none">
                        {active.statsValue}
                      </div>
                      <div className="text-[9px] text-slate-300 mt-1 leading-snug">
                        {active.statsLabel}
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Performance scorecard footer bar */}
          <div className="mt-3 py-2 px-3 bg-slate-50 rounded-xl border border-slate-150 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
            <span className="font-semibold text-slate-700 flex items-center gap-1">
              <Database className="h-3 w-3 text-emerald-600" />
              Core Web Vitals: {active.performanceScore}
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Secure • Fast (LCP: {active.avgLcp})
            </span>
          </div>
        </div>

      </div>

      {/* Manual selection buttons below mock container representing visual adaptations */}
      <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-2 relative z-10">
        {TEMPLATES.map(t => (
          <button
            key={t.id}
            id={`mockup-btn-${t.id}`}
            onClick={() => {
              setActiveId(t.id);
              setAutoplay(false); // Stop cycling on user interact
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 border btn-press ${
              activeId === t.id
                ? 'bg-amber-500 border-amber-500 text-white shadow-soft'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {activeId === t.id && <Sparkles className="h-3 w-3 text-white fill-white" />}
            {t.name.split(' ')[0]}
          </button>
        ))}
      </div>
    </div>
  );
}
