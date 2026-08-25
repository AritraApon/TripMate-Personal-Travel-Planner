'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Alex Rivera',
    role: 'Solo Traveler',
    comment: 'TripMate helped me organize my Swiss Alps tour without going over my budget. The daily cost estimates were spot on!',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Digital Nomad',
    comment: 'The activity breakdowns and easy category search made planning my Kyoto trip so seamless. Highly recommended!',
    rating: 5,
  },
  {
    name: 'David Miller',
    role: 'Backpacker',
    comment: "Clean UI, accurate recommendations, and zero clutter. It's now my go-to trip-planning app.",
    rating: 5,
  },
  {
    name: 'Emma Watson',
    role: 'Adventure Enthusiast',
    comment: 'Planning group trips used to be a headache. TripMate kept everyone on the same page effortlessly.',
    rating: 5,
  },
];

const duplicatedReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-950/40 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl font-bold font-heading text-white">Loved by Travelers</h2>
          <p className="text-slate-400 text-sm mt-2">See what our community says about their experiences</p>
        </div>

        {/* Slider Container with Side Gradients */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">

          <motion.div
            className="flex gap-6 w-max cursor-pointer py-4"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 25,
                ease: 'linear',
              },
            }}
            whileHover={{ transition: { duration: 0 } }}
          >
            {duplicatedReviews.map((rev, idx) => (
              <div
                key={idx}
                /* w-[360px] এবং min-h-[240px] দিয়ে স্ট্যান্ডার্ড বক্স প্রোপোশন দেওয়া হলো */
                className="w-[320px] sm:w-[360px] min-h-[240px] p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between shrink-0 hover:border-teal-500/50 hover:bg-slate-900 transition-all duration-300"
              >
                <div>
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-4 mt-6">
                  <h4 className="text-white font-medium text-sm">{rev.name}</h4>
                  <span className="text-xs text-slate-500 mt-0.5 block">{rev.role}</span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}