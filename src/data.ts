/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, TestimonialItem } from './types';
import justiceImg from './assets/images/justice_attorneys_mockup_1782486804204.jpg';
import ironhaulImg from './assets/images/iron_haul_mockup_1782486819086.jpg';
import shahairImg from './assets/images/shahair_wigs_mockup_1782486834158.jpg';
import renovationsImg from './assets/images/luxury_renovations_mockup_1782486846948.jpg';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'justice',
    title: 'Justice Attorneys',
    clientName: 'Justice Attorneys Law Firm',
    tag: 'legal',
    imageUrl: justiceImg,
    description: 'A premium, high-trust digital presence for a prominent law firm in Polokwane and Turf, featuring custom practitioner profiles, booking, and mobile-first speed.',
    challenge: 'The law firm was losing wealthy local clients to larger, nationwide firms because they lacked an authoritative online portal detailing their specializations and court track record.',
    solution: 'Designed and deployed an executive-tier, minimal interface utilizing crisp typography, deep blue backgrounds, certified credentials, and a frictionless consultation booking trigger.',
    stats: [
      { label: 'Consultation inquiries', value: '+75%' },
      { label: 'Client booking speed', value: '<2 mins' },
      { label: 'Polokwane search visibility', value: '#1 ranking' },
    ],
    beforeSpeed: 'No web presence (0s)',
    afterSpeed: '0.5s load time',
    tools: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    previewUrl: 'https://6a3ef3a7fddd6467a655b6ac--justiceattorney.netlify.app/',
  },
  {
    id: 'ironhaul',
    title: 'IronHaul Logistics',
    clientName: 'IronHaul Logistics Ltd.',
    tag: 'logistics',
    imageUrl: ironhaulImg,
    description: 'A high-performance freight transport platform with real-time dispatch telemetry mockups, interactive freight rate estimators, and custom-designed quotation pipelines.',
    challenge: 'Independent carriers struggled with lead retention because their traditional websites were slow, unreadable on mobile, and lacked an immediate quote estimation feature.',
    solution: 'Engineered a highly tailored static client-side portal featuring high-contrast visuals, responsive freight calculators, and instant click-to-dispatch messaging integrations.',
    stats: [
      { label: 'Freight query volume', value: '+62%' },
      { label: 'Mobile load speed', value: 'Instant' },
      { label: 'Quote request conversion', value: '+45%' },
    ],
    beforeSpeed: '7.4s load time',
    afterSpeed: '0.6s load time',
    tools: ['React', 'Vite', 'Tailwind CSS', 'Lucide Icons'],
    previewUrl: 'https://6a3ec1f800a9260008bf7077--ironwoo.netlify.app/',
  },
  {
    id: 'shahair',
    title: 'Shahair Premium Wigs',
    clientName: 'Shahair Boutique',
    tag: 'ecommerce',
    imageUrl: shahairImg,
    description: 'A stunning bespoke e-commerce boutique for high-end human hair wigs, boasting gorgeous lifestyle visuals, frictionless collections, and elegant touch-interactive builders.',
    challenge: 'A slow Shopify template with heavy external scripts and messy image sizes was causing a 48% drop-off on mobile checkout, dampening national marketing efforts.',
    solution: 'Re-engineered the store front-end using static compilation pipelines with beautiful custom page-transitions, smooth product scrolls, and direct WhatsApp-order automation.',
    stats: [
      { label: 'Mobile sales growth', value: '+82%' },
      { label: 'Catalog browsing depth', value: '+58%' },
      { label: 'First Contentful Paint', value: '0.7s' },
    ],
    beforeSpeed: '8.4s load time',
    afterSpeed: '0.7s load time',
    tools: ['React', 'Stripe API', 'Vite', 'Tailwind CSS'],
    previewUrl: 'https://6a3fb7d879913924cc540a26--shahair.netlify.app/',
  },
  {
    id: 'renovations',
    title: 'Luxury Renovations',
    clientName: 'Luxury Renovations Contractor',
    tag: 'contracting',
    imageUrl: renovationsImg,
    description: 'A robust, high-trust custom renovation and contracting site complete with premium project galleries, client feedback loops, and automated booking triggers.',
    challenge: 'The contractor was losing local premium leads to corporate competitors because they only had a basic Facebook page with no detailed project listings or structural galleries.',
    solution: 'Designed and launched a super-clean, high-trust contractor site detailing certified standards, local reviews, beautiful transformation galleries, and clear contact pipelines.',
    stats: [
      { label: 'Enquiry volume growth', value: '+55%' },
      { label: 'WhatsApp booking speed', value: 'Instant' },
      { label: 'Google Search visibility', value: 'Top 3 local' },
    ],
    beforeSpeed: 'No website (0s)',
    afterSpeed: '0.7s load time',
    tools: ['React', 'Vite', 'Tailwind CSS', 'Schema Markup'],
    previewUrl: 'https://6a3fb83b0939953b703b195d--luxuryrenovation.netlify.app/',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Advocate Isaac Justice',
    role: 'Senior Partner',
    company: 'Justice Attorneys',
    projectType: 'Corporate & Law',
    text: 'Baston and the OTF WebWorks team built an incredible, premium website for our law firm. Our consultation bookings in Polokwane increased by 75% in the first month alone, and the site loads instantly. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Shabangu',
    role: 'Founder & Director',
    company: 'Shahair Boutique',
    projectType: 'Custom E-Commerce',
    text: 'Our Shopify site was so slow, but OTF WebWorks redesigned our storefront to connect directly to WhatsApp orders. Our mobile sales grew by 82% and customers love the gorgeous transitions!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
  },
  {
    id: '3',
    name: 'Thomas Nkosi',
    role: 'Logistics Director',
    company: 'IronHaul Logistics',
    projectType: 'Logistics & Fleet',
    text: 'The interactive freight rate estimator is a game-changer. Clients can get quotes instantly and dispatch directly from the site. Incredible attention to detail!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
  },
  {
    id: '4',
    name: 'Abraham van der Merwe',
    role: 'Lead Architect',
    company: 'Luxury Renovations',
    projectType: 'Contracting & Trades',
    text: 'Our contracting business had zero online presence. OTF WebWorks set up an amazing project showcase gallery. We are now ranking top 3 locally in Musina!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
  },
];

export const FAQS = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Our Small Business Starter package is guaranteed to be live in 5–10 working days once we receive all your content and details.',
  },
  {
    question: 'Do I own my website and domain name?',
    answer: 'Yes, absolutely. The professional .co.za domain name is registered directly in your name, and you have full legal ownership of the completed codebase and assets.',
  },
  {
    question: 'Is there a monthly subscription fee?',
    answer: 'We keep our pricing simple. It is a one-off build fee, and optional maintenance packages. No locked-in contracts or hidden recurring costs.',
  },
  {
    question: 'Will my website look good on mobile devices?',
    answer: 'Every single project we deliver is built from the ground up to be mobile-first. Since over 70% of South African web traffic comes from phones, we optimize strictly for mobile load speeds and touch screen interfaces.',
  },
  {
    question: 'Can you help with Google search visibility (SEO)?',
    answer: 'Yes! Every website includes semantic SEO structure, site verification, meta tags, and Google Business Profile setup advice so local clients can easily find you.',
  },
];
