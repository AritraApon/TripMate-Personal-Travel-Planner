'use client';

import { useState, useMemo } from 'react';
import DestinationCard from '@/components/Home/DestinationCard';
import { destinationsData, Destination } from '../../../public/data/destinations';
import { Search, Filter, X } from 'lucide-react';

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = destinationsData.map((dest) => dest.category);
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  const filteredDestinations = useMemo(() => {
    return destinationsData.filter((dest: Destination) => {
      const matchesSearch =
        dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-[#000000] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* Header Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Explore Destinations
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Find and plan your next perfect trip activity
          </p>
        </div>

        {/* Search & Category Filter UI */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80">

          {/* Search Input Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by destination or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-2.5 bg-slate-900 border border-slate-700/70 rounded-xl text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-teal-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden lg:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition border ${
                  selectedCategory === cat
                    ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-lg shadow-teal-500/20'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Destinations Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 bg-slate-950/40 rounded-2xl border border-slate-800/60 text-center space-y-3">
            <p className="text-slate-300 font-medium text-lg">No destinations found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/30 rounded-lg hover:bg-teal-500/20 transition"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredDestinations.map((destination: Destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ExplorePage;