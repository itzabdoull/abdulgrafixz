import React from 'react';
import { Project, ProjectCategory } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Viral Gaming Thumbnail',
    category: ProjectCategory.THUMBNAIL,
    imageUrl: 'https://picsum.photos/seed/gaming1/640/360',
    description: 'High CTR thumbnail design for a gaming channel.',
  },
  {
    id: 2,
    title: 'Summer Sale Post',
    category: ProjectCategory.INSTAGRAM,
    imageUrl: 'https://picsum.photos/seed/insta1/600/600',
    description: 'Vibrant social media post for a seasonal sale.',
  },
  {
    id: 3,
    title: 'Music Festival Poster',
    category: ProjectCategory.POSTER,
    imageUrl: 'https://picsum.photos/seed/poster1/600/800',
    description: 'Typographic poster design for an electronic music event.',
  },
  {
    id: 4,
    title: 'Tech Review Thumbnail',
    category: ProjectCategory.THUMBNAIL,
    imageUrl: 'https://picsum.photos/seed/tech1/640/360',
    description: 'Clean and modern thumbnail for gadget reviews.',
  },
  {
    id: 5,
    title: 'Motivational Quote',
    category: ProjectCategory.INSTAGRAM,
    imageUrl: 'https://picsum.photos/seed/quote1/600/600',
    description: 'Minimalist layout focusing on typography and brand colors.',
  },
  {
    id: 6,
    title: 'Movie Premiere Poster',
    category: ProjectCategory.POSTER,
    imageUrl: 'https://picsum.photos/seed/movie1/600/800',
    description: 'Cinematic composition for an indie film launch.',
  },
];

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  email: 'mailto:contact@abdulgraffix.com'
};