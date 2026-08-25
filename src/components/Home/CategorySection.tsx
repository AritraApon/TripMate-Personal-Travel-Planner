'use client';

import React from 'react';
import Link from 'next/link';
import { Trees, Palmtree, Landmark, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Nature', count: '12+ Places', icon: Trees, href: '/explore?category=Nature' },
  { name: 'Beach', count: '8+ Places', icon: Palmtree, href: '/explore?category=Beach' },
  { name: 'Historical', count: '15+ Places', icon: Landmark, href: '/explore?category=Historical' },
  { name: 'Adventure', count: '10+ Places', icon: Mountain, href: '/explore?category=Adventure' },
];

// Grid Stagger Container Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Item Card Entrance Animation
const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function CategorySection() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-white">
              Explore by Category
            </h2>
            <p className="text-slate-400 text-sm mt-1">Pick your preferred trip vibe</p>
          </div>
        </motion.div>

        {/* Categories Grid with Stagger & Interactive Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div key={idx} variants={cardVariants}>
                <Link href={cat.href} className="block">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-900/80 transition duration-300 group text-center flex flex-col items-center justify-center shadow-lg"
                  >
                    <div className="p-4 rounded-full bg-slate-800/80 group-hover:bg-teal-500/20 group-hover:text-teal-400 text-slate-300 transition duration-300 mb-3 group-hover:rotate-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-white font-semibold text-base mb-1 group-hover:text-teal-400 transition-colors">
                      {cat.name}
                    </h3>
                    <span className="text-xs text-slate-500">{cat.count}</span>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}