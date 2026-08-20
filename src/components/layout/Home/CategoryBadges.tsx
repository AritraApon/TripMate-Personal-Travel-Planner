'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Palmtree, Trees, Building2, Compass, Sparkles } from 'lucide-react';

const categories = [
  { name: 'All', icon: Sparkles },
  { name: 'Beach', icon: Palmtree },
  { name: 'Nature', icon: Trees },
  { name: 'City', icon: Building2 },
  { name: 'Adventure', icon: Compass },
];

export default function CategoryBadges() {
  const router = useRouter();

  const handleCategoryClick = (categoryName: string) => {
    if (categoryName === 'All') {
      router.push('/explore');
    } else {
      router.push(`/explore?category=${encodeURIComponent(categoryName)}`);
    }
  };

  return (
    <section className="py-10 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-slate-200 mb-6 text-center sm:text-left">
          Browse by Category
        </h2>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-teal-500/50 text-slate-300 hover:text-teal-400 font-medium text-sm transition-all shadow-md group"
              >
                <Icon className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}