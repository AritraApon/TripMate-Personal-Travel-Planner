'use client';

import React from 'react';
import { Compass, ShieldCheck, DollarSign, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Compass,
    title: 'Smart Itinerary',
    description: 'Effortlessly organize your daily travel schedule and manage trips in one place.',
  },
  {
    icon: DollarSign,
    title: 'Cost Estimator',
    description: 'Get accurate daily expense projections so you can travel within budget.',
  },
  {
    icon: MapPin,
    title: 'Destinations',
    description: 'Discover top-rated hidden gems, historical spots, and natural landscapes.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Activities',
    description: 'Explore safe, curated activities with real cost breakdowns and pricing.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-950/60 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
            Why Plan with <span className="text-teal-500">TripMate</span>?
          </h2>
          <p className="mt-3 text-slate-400 text-sm md:text-base">
            Everything you need for a seamless journey, designed for modern travelers.
          </p>
        </motion.div>

        {/* --- TREE NETWORK CONTAINER --- */}
        <div className="relative flex flex-col items-center">

          {/* Root Node (Tree Top Header) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="z-10 flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-teal-500/50 shadow-lg shadow-teal-500/10 text-teal-400 font-bold text-sm"
          >
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>TripMate Core Features</span>
          </motion.div>

          {/* Root Stem Line (Vertical Trunk) */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-0.5 h-12 bg-gradient-to-b from-teal-500 to-teal-500/40 origin-top"
          />

          {/* Horizontal Branching Bar (Only Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden lg:block w-[75%] h-0.5 bg-slate-800 origin-center relative"
          >
            {/* Small Glowing Node Dots on Branch Junctions */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-400 shadow-sm shadow-teal-400" />
            <div className="absolute left-[33.33%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-400 shadow-sm shadow-teal-400" />
            <div className="absolute left-[66.66%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-400 shadow-sm shadow-teal-400" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-400 shadow-sm shadow-teal-400" />
          </motion.div>

          {/* Tree Leaf Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4 lg:mt-0">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex flex-col items-center">

                  {/* Vertical Connector Line from Horizontal Branch to Card */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + idx * 0.15 }}
                    className="w-0.5 h-8 bg-gradient-to-b from-slate-800 to-teal-500/50 origin-top"
                  />

                  {/* Leaf Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 + idx * 0.15 }}
                    className="w-full p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/50 hover:bg-slate-900 transition duration-300 group shadow-xl relative"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                      <Icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}