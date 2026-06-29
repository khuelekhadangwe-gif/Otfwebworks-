import React from "react";
import { 
  Check, 
  Info, 
  CreditCard, 
  Shield, 
  Smartphone, 
  Globe, 
  Search, 
  MessageSquare, 
  Heart,
  FileText
} from "lucide-react";

export default function StarterPricing() {
  const buildFeatures = [
    { text: "5–7 page modern, mobile-first website", icon: Smartphone },
    { text: "Your own professional .co.za domain (registered via Hostinger)", icon: Globe },
    { text: "Fast global CDN hosting (Netlify) — loads instantly for SA customers", icon: Shield },
    { text: "Free automatic SSL security (HTTPS padlock)", icon: Shield },
    { text: "Working contact form + WhatsApp click-to-chat button", icon: MessageSquare },
    { text: "Basic SEO setup so Google can find you", icon: Search },
    { text: "Google Business Profile setup help", icon: Globe },
    { text: "Full POPIA compliance (privacy policy + secure handling)", icon: FileText },
    { text: "1 round of revisions Included", icon: Check },
    { text: "Live in 5–10 working days guaranteed", icon: Check },
  ];

  const maintenanceFeatures = [
    { text: "I handle ALL minor updates and changes for you (text, photos, prices, new sections, etc.)" },
    { text: "Global CDN hosting + daily backups + security checks" },
    { text: "Performance monitoring and speed optimisation" },
    { text: "Ongoing SEO tweaks and Google Business Profile updates" },
    { text: "Quarterly simple performance report (visitors, top pages, tips)" },
    { text: "Priority WhatsApp/email support with extremely fast responses" },
    { text: "Automatic code redeploys whenever changes are made" },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50/50 relative border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header containing title and subhead */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full w-fit border border-amber-150 tracking-wider uppercase">
            Pricing & Packages
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Small Business Starter Package
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Perfect for small South African businesses that currently have no website or only Facebook. 
            Professional, fast, and affordable — with everything handled for you.
          </p>
        </div>

        {/* Highlighted pricing card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden grid lg:grid-cols-12 gap-0 relative">
            
            {/* Visual accent badge */}
            <div className="absolute top-5 right-5 lg:top-8 lg:right-8 bg-amber-500 text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-md z-15">
              Hassle-Free Solution
            </div>

            {/* Left Pricing / Call to Action column (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900 p-8 sm:p-12 text-white flex flex-col justify-between relative">
              <div className="absolute inset-0 bg-dot-grid opacity-5 pointer-events-none"></div>
              
              <div className="relative z-10 space-y-8">
                <div>
                  <span className="text-amber-400 text-xs font-bold tracking-widest uppercase block">All-In-One Deal</span>
                  <div className="mt-4 space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white">R2,500</span>
                      <span className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Once-Off Build</span>
                    </div>
                    <div className="text-2xl text-amber-400 font-bold block">+ R200 <span className="text-sm font-semibold text-slate-300">every 2 months</span></div>
                  </div>
                  <div className="text-xs text-slate-400 mt-2 font-medium">Full hosting, domain, updates & security included</div>
                </div>

                {/* Bullet details on terms */}
                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <div className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <p className="text-xs text-slate-300">
                      <strong className="text-white">R1,250 deposit</strong> to start the build
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <p className="text-xs text-slate-300">
                      <strong className="text-white">R1,250 balance</strong> when your site goes live
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <p className="text-xs text-slate-300">
                      Recurring <strong className="text-white">R200</strong> auto-charged every 2 months via Secure PayFast
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="relative z-10 space-y-3 pt-8 lg:pt-12">
                <a 
                  href="https://wa.me/27818255340"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="btn-press w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-2xl shadow-lg shadow-amber-500/20 transition-all text-sm uppercase tracking-wide"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.004 2C6.478 2 2 6.478 2 12c0 1.93.546 3.731 1.492 5.275L2.016 22l4.89-.1.29-.18C8.59 22.42 10.25 22.75 12 22.75c5.523 0 10-4.478 10-10S17.523 2 12.004 2zm0 18.25c-1.63 0-3.21-.43-4.6-1.25l-.33-.2-.55.04-2.27.05.06-2.26.04-.54-.21-.35c-.88-1.42-1.35-3.07-1.35-4.74 0-4.83 3.92-8.75 8.75-8.75s8.75 3.92 8.75 8.75-3.922 8.75-8.75 8.75z"/>
                  </svg>
                  WhatsApp Me to Get Started
                </a>
                <a 
                  href="#contact"
                  className="btn-press w-full inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all text-xs"
                >
                  Or Submit a Spec Proposal
                </a>
              </div>
            </div>

            {/* Right Detailed deliverables lists column (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-8 flex flex-col justify-between">
              
              {/* Box 1: Build Package */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block border-b border-slate-100 pb-2">
                  What's Included in the R2,500 Build:
                </span>
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                  {buildFeatures.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="h-5 w-5 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-indigo-600" />
                        </span>
                        <span className="text-xs text-slate-700 leading-normal">{feat.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Box 2: Management Package */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block border-b border-slate-100 pb-2">
                  What's Included in the R200 Every 2 Months:
                </span>
                <div className="space-y-3">
                  {maintenanceFeatures.map((mFeat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="h-4 w-4 bg-emerald-50 rounded flex items-center justify-center shrink-0 mt-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      </span>
                      <span className="text-xs text-slate-600 leading-normal">{mFeat.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote Footer / Guarantee line */}
              <div className="bg-slate-50 rounded-2xl p-4 flex gap-3 items-center border border-slate-100">
                <span className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <Info className="h-4 w-4" />
                </span>
                <p className="text-xs text-slate-600 italic">
                  “Most clients say the best part is that I handle everything — you never have to touch the tech.”
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
