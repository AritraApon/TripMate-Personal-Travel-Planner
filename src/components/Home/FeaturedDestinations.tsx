'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { destinationsData } from '../../../public/data/destinations';
import DestinationCard from '@/components/Home/DestinationCard';

export default function FeaturedDestinations() {

  const featured = destinationsData.slice(0, 4);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-teal-400 font-semibold text-sm tracking-wider uppercase">
            Top Picks
          </span>
          <h2 className="text-3xl font-extrabold text-slate-100 mt-1">
            Featured Destinations
          </h2>
        </div>
        <Link
          href="/explore"
          className="flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition"
        >
          <span>Explore All Places</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>

    </section>
  );
}
