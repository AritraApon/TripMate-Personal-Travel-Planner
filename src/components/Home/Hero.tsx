'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

// ব্যাকগ্রাউন্ড স্লাইডারের ৫টি ছবি
const heroImages = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop', // Beach
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop', // Mountain
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop', // Kyoto
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1600&auto=format&fit=crop', // Santorini
  'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1600&auto=format&fit=crop', // Alps
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // প্রতি ৫ সেকেন্ড পর পর ছবি অটো-চেঞ্জ হবে
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/explore?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative h-[85vh] min-h-[550px] w-full overflow-hidden flex items-center justify-center">

      {/* Background Image Slider with Motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
        />
      </AnimatePresence>

      {/* Dark Overlay Grid */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />

      {/* Hero Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-teal-500/30 text-teal-400 text-sm font-medium backdrop-blur-md mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span>Plan Your Next Journey Effortlessly</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4"
        >
          Explore the World, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
            One Day at a Time
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-normal"
        >
          Discover curated destinations, organize your day-by-day activities, and manage your travel budget seamlessly.
        </motion.p>

        {/* Search Bar Component */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-2xl max-w-2xl mx-auto shadow-2xl"
        >
          <div className="flex items-center gap-3 px-4 py-2 w-full">
            <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
            <input
              type="text"
              placeholder="Search by destination name or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-white placeholder-slate-400 outline-none text-sm sm:text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl transition flex items-center justify-center gap-2 shrink-0"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </motion.form>

      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-6 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all ${
              currentImageIndex === index ? 'w-8 bg-teal-400' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>

    </div>
  );
}