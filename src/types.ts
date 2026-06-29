/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  daysToDeliver: number;
  description: string;
  features: string[];
  bestFor: string;
}

export interface AddonOption {
  id: string;
  name: string;
  price: number;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  clientName: string;
  tag: 'legal' | 'logistics' | 'ecommerce' | 'contracting';
  imageUrl: string;
  mobileImageUrl?: string;
  description: string;
  challenge: string;
  solution: string;
  stats: {
    label: string;
    value: string;
  }[];
  beforeSpeed: string;
  afterSpeed: string;
  tools: string[];
  previewUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  projectType: string;
  image: string;
  rating: number;
}

export interface EstimatorState {
  selectedPackageId: string;
  selectedAddonIds: string[];
  deliverySpeed: 'standard' | 'express';
  businessType: string;
}
