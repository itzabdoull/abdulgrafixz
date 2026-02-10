import React from 'react';

export enum ProjectCategory {
  ALL = 'All',
  THUMBNAIL = 'Thumbnail',
  INSTAGRAM = 'Instagram',
  POSTER = 'Poster',
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}