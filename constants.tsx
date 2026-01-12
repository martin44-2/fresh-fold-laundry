
import React from 'react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'wash-fold',
    name: 'Wash & Fold',
    description: 'Perfect for everyday laundry. We wash, dry, and neatly fold your clothes.',
    price: 'GH₵ 35.00 / kg',
    basePrice: 35.00,
    icon: '🧺'
  },
  {
    id: 'dry-cleaning',
    name: 'Dry Cleaning',
    description: 'Specialized care for delicate fabrics, suits, and formal wear.',
    price: 'GH₵ 85.00 / item',
    basePrice: 85.00,
    icon: '👔'
  },
  {
    id: 'ironing',
    name: 'Ironing',
    description: 'Professional pressing service to keep your garments crisp and wrinkle-free.',
    price: 'GH₵ 45.00 / item',
    basePrice: 45.00,
    icon: '💨'
  },
  {
    id: 'express',
    name: 'Express Service',
    description: 'Need it fast? Same-day turnaround for urgent laundry needs.',
    price: '+50% Surcharge',
    basePrice: 1.5, // multiplier
    icon: '⚡'
  }
];

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Order Now', path: '/order' },
  { name: 'Contact', path: '/contact' }
];
