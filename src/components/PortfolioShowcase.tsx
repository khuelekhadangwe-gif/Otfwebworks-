/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';
import { 
  X, 
  ArrowRight, 
  Gauge, 
  Zap, 
  Layers, 
  Clock, 
  Sparkles, 
  CheckCircle,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface PortfolioShowcaseProps {}

export default function PortfolioShowcase({}: PortfolioShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'legal' | 'logistics' | 'ecommerce' | 'contracting'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100 representing percentage
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filteredItems = activeFilter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.tag === activeFilter);

  const filters: { value: typeof activeFilter; label: string }[] = [
    { value: 'all', label: 'All Works' },
    { value: 'legal', label: 'Legal & Professional' },
    { value: 'logistics', label: 'Logistics & Fleet' },
    { value: 'ecommerce', label: 'E-Commerce' },
    { value: 'contracting', label: 'Contracting & Trades' },
  ];

  return (
    <section id="work" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative dot background */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Selected Portfolio
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Real websites for real small businesses.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
            Many clients start with no professional website at all — just a Facebook page or nothing. Every project is built fast using modern tools and AI assistance for quality and speed. No cookie-cutter themes. No slow page builders. The result is a clean, fast-loading site that looks professional and actually brings in enquiries.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-100">
          {filters.map(filter => (
            <button
              key={filter.value}
              id={`filter-btn-${filter.value}`}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 btn-press ${
                activeFilter === filter.value
                  ? 'bg-navy-900 text-white shadow-soft'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Demo websites help text */}
        <div className="mb-8 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-start gap-3 shadow-sm max-w-3xl">
          <Sparkles className="h-4 w-4 text-accent animate-pulse shrink-0 mt-0.5" />
          <p className="text-sm font-medium text-slate-600 leading-relaxed">
            View some demo website we have made and have experience of them on how good our work is just tap on on project and view it live
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              // Beautiful pulsing skeleton items for high perceived performance
              Array.from({ length: Math.max(filteredItems.length, 2) }).map((_, idx) => (
                <motion.div
                  key={`portfolio-skeleton-${idx}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[2rem] bg-slate-50 border border-slate-100 overflow-hidden flex flex-col shadow-sm animate-pulse"
                >
                  {/* Thumbnail placeholder */}
                  <div className="relative aspect-video w-full bg-slate-200/80 flex items-center justify-center">
                    <Layers className="h-8 w-8 text-slate-300" />
                    <div className="absolute top-4 right-4 h-6 w-20 bg-slate-300/75 rounded-xl" />
                  </div>
                  {/* Content placeholder */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3.5">
                      <div className="h-3 w-28 bg-slate-200/90 rounded-full" />
                      <div className="h-6 w-3/4 bg-slate-200 rounded-lg" />
                      <div className="space-y-2">
                        <div className="h-3.5 w-full bg-slate-200/75 rounded" />
                        <div className="h-3.5 w-5/6 bg-slate-200/75 rounded" />
                      </div>
                    </div>
                    {/* Bottom stats details block */}
                    <div className="mt-5 grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/40 text-center bg-slate-100/50 p-3 rounded-xl">
                      <div className="space-y-2 text-left">
                        <div className="h-2 w-12 bg-slate-200 rounded" />
                        <div className="h-3.5 w-16 bg-slate-200 rounded-md" />
                      </div>
                      <div className="space-y-2 text-left">
                        <div className="h-2 w-12 bg-slate-200 rounded" />
                        <div className="h-3.5 w-16 bg-slate-200 rounded-md" />
                      </div>
                      <div className="flex flex-col justify-center items-end pr-1">
                        <div className="h-3 w-16 bg-slate-200 rounded-md" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  id={`project-card-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-[2rem] bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200/40 transition-all duration-300 flex flex-col cursor-pointer"
                  onClick={() => {
                    setSelectedProject(item);
                    setSliderPosition(50);
                  }}
                >
                  {/* Visual Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/90 text-slate-900 backdrop-blur-sm">
                        View case study & specs
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                    {/* Performance overlay badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-slate-950/80 backdrop-blur-md rounded-xl border border-white/10 text-white text-xs font-medium">
                      <Zap className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                      Speed: 100/100
                    </div>
                  </div>

                  {/* Content details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {item.tag === 'legal' && 'Corporate & Law'}
                        {item.tag === 'logistics' && 'Logistics & Fleet'}
                        {item.tag === 'ecommerce' && 'Custom E-Commerce'}
                        {item.tag === 'contracting' && 'Contracting & Trades'}
                      </span>
                      <h3 className="font-display font-bold text-xl text-slate-900 mt-1.5 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {item.previewUrl && (
                      <div className="mt-4">
                        <a
                          href={item.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-accent text-white hover:bg-accent/90 transition shadow-sm w-full justify-center"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          View Live Website Demo
                        </a>
                      </div>
                    )}

                    {/* Core Highlight stats */}
                    <div className="mt-5 grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/60 text-center bg-slate-100/50 p-3 rounded-xl">
                      {item.stats.slice(0, 2).map((stat, sIdx) => (
                        <div key={sIdx} className="text-left">
                          <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-tight">
                            {stat.label.substring(0, 15)}
                          </span>
                          <span className="block font-display font-extrabold text-sm text-slate-800 mt-0.5">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                      <div className="text-right flex flex-col justify-center">
                        <span className="block text-[10px] uppercase font-bold text-accent-600">
                          View Details
                        </span>
                        <span className="text-[12px] text-slate-500 font-medium">Click Card</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Modal Window for Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              {/* Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-navy-950/70 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-slate-100"
              >
                {/* Header title */}
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">{selectedProject.clientName}</span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">{selectedProject.title} Case Study</h3>
                  </div>
                  <button
                    id="close-modal-btn"
                    onClick={() => setSelectedProject(null)}
                    className="h-9 w-9 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition text-slate-500 hover:text-slate-900"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Main Content inside Modal - scrollable */}
                <div className="p-6 overflow-y-auto space-y-8 flex-1">
                  {/* Visual Drag Comparison Showcase (Before / After performance visualization) */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-accent" />
                        <span className="font-display font-bold text-sm text-slate-800">Dynamic Speed & Optimization comparison</span>
                      </div>
                      <div className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                        Drag the center divider to compare designs
                      </div>
                    </div>

                    <div className="relative w-full h-[280px] sm:h-[360px] rounded-[2rem] overflow-hidden border border-slate-100 select-none">
                      {/* Before State (Underlay image with gray blur or slow-loading indicators) */}
                      <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                        <img 
                          src={selectedProject.imageUrl} 
                          alt="Before custom conversion mockup" 
                          className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-40" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-red-950/35 flex flex-col justify-end p-5 text-white">
                          <div className="max-w-xs">
                            <span className="px-2 py-0.5 rounded bg-red-600 text-[10px] uppercase font-bold tracking-wider">Before WebWorks Custom Build</span>
                            <h4 className="font-display font-bold text-lg mt-1 text-red-50">Slow Template Setup</h4>
                            <p className="text-xs text-red-100 mt-1">Struggles with heavy scripts, generic theme files, and FCP score of {selectedProject.beforeSpeed}.</p>
                          </div>
                        </div>
                      </div>

                      {/* After State (Overlay image that gets revealed) */}
                      <div 
                        className="absolute inset-y-0 left-0 overflow-hidden bg-slate-950" 
                        style={{ width: `${sliderPosition}%` }}
                      >
                        <img 
                          src={selectedProject.imageUrl} 
                          alt="After custom conversion mockup" 
                          className="absolute inset-0 w-full h-full object-cover" 
                          style={{ width: '100%', height: '100%', maxWidth: 'none' }}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-white w-full">
                          <div className="max-w-xs">
                            <span className="px-2 py-0.5 rounded bg-emerald-500 text-[10px] uppercase font-bold tracking-wider">After Custom React Code</span>
                            <h4 className="font-display font-bold text-lg mt-1 text-emerald-300">Clean, Fast-loading Interface</h4>
                            <p className="text-xs text-slate-100 mt-1">Custom build static pipeline yields outstanding FCP score of {selectedProject.afterSpeed}.</p>
                          </div>
                        </div>
                      </div>

                      {/* Drag Handle Controller bar */}
                      <div 
                        className="absolute inset-y-0 w-1 bg-amber-500 cursor-ew-resize flex items-center justify-center"
                        style={{ left: `${sliderPosition}%` }}
                      >
                        <div className="h-10 w-10 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center shadow-soft text-white text-xs select-none pointer-events-none">
                          ↔
                        </div>
                      </div>

                      {/* Floating invisible input range for mobile responsiveness */}
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={sliderPosition} 
                        onChange={(e) => setSliderPosition(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                      />
                    </div>
                  </div>

                  {/* Core Challenge & Solution Column details */}
                  <div className="grid md:grid-cols-2 gap-6 pt-2">
                    <div className="p-6 rounded-[1.5rem] bg-rose-50/60 border border-rose-100/80 space-y-2">
                      <span className="font-display font-bold text-rose-800 text-sm flex items-center gap-1.5">
                        <HelpCircle className="h-4 w-4 text-rose-600" />
                        The Client's Business Challenge
                      </span>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="p-6 rounded-[1.5rem] bg-emerald-50/60 border border-emerald-100/80 space-y-2">
                      <span className="font-display font-bold text-emerald-800 text-sm flex items-center gap-1.5">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        OTF WEBWORKS' Handcrafted Code Solution
                      </span>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Achievements and metrics section */}
                  <div className="space-y-4">
                    <span className="font-display font-bold text-slate-800 text-sm block">Core Performance Achievements:</span>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {selectedProject.stats.map((stat, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                          <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</span>
                          <span className="font-display font-extrabold text-2xl text-slate-900 mt-2">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack used tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs text-slate-500 font-semibold mr-1 flex items-center gap-1">
                      <Layers className="h-3.5 w-3.5" /> Core Frameworks:
                    </span>
                    {selectedProject.tools.map((tool, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded-lg">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions inside Modal */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-slate-500 text-xs sm:text-left text-center">
                    Similar custom integrations start at <span className="font-bold text-slate-800">R2,500 once-off</span>.
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-medium hover:bg-slate-100 transition"
                    >
                      Close Specs
                    </button>
                    {selectedProject.previewUrl && (
                      <a
                        id="preview-site-modal-btn"
                        href={selectedProject.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-soft transition flex items-center gap-1.5"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View Live Site
                      </a>
                    )}
                    <a
                      id="hire-from-modal-btn"
                      href="#pricing"
                      onClick={() => {
                        setSelectedProject(null);
                      }}
                      className="btn-press px-4 py-2.5 rounded-xl bg-amber-500 text-white font-bold text-xs shadow-soft hover:bg-amber-600 transition flex items-center gap-1.5"
                    >
                      Build a Similar Site
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
