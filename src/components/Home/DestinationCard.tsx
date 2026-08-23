'use client';

import React from 'react';
import Link from 'next/link';
import { Star, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { Destination } from '@/types/trip';

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 shadow-xl group flex flex-col justify-between">

      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-teal-400">
          {destination.category}
        </div>
        <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-semibold text-amber-400">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          <span>{destination.rating}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-2">
            <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span className="truncate">{destination.location}</span>
          </div>

          <h3 className="text-lg font-bold text-slate-100 group-hover:text-teal-400 transition-colors line-clamp-1 mb-2">
            {destination.title}
          </h3>

          <p className="text-slate-400 text-sm line-clamp-2 mb-4 font-normal">
            {destination.description}
          </p>
        </div>

        {/* Footer Details */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-2">
          <div>
            <span className="text-xs text-slate-500 block">Est. Daily</span>
            <div className="flex items-center text-teal-400 font-bold text-base">
              <DollarSign className="w-4 h-4 -mr-1" />
              <span>{destination.estimatedDailyCost}</span>
              <span className="text-xs text-slate-400 font-normal ml-0.5">/day</span>
            </div>
          </div>

          <Link
            href={`/explore/${destination.id}`}
            className="flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-slate-200 text-xs font-semibold transition-all group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
}