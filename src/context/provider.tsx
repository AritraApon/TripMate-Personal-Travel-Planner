// src/context/provider.tsx
'use client';

import { createContext, useState, useEffect, ReactNode } from "react";

export interface Activity {
  id: string;
  title: string;
  cost: number;
  day?: string;
}

interface ItineraryContextType {
  itinerary: Activity[];
  addToItinerary: (activity: Activity) => void;
  removeFromItinerary: (id: string) => void;
  updateActivityCost: (id: string, newCost: number) => void; // <-- New
}

export const ItineraryContext = createContext<ItineraryContextType | undefined>(undefined);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [itinerary, setItinerary] = useState<Activity[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("my_itinerary");
    if (saved) {
      try {
        setItinerary(JSON.parse(saved));
      } catch (err) {
        console.error("Failed to parse local storage", err);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("my_itinerary", JSON.stringify(itinerary));
    }
  }, [itinerary, isLoaded]);

  const addToItinerary = (activity: Activity) => {
    setItinerary((prev) => {
      if (prev.some((item) => item.id === activity.id)) return prev;
      return [...prev, activity];
    });
  };

  const removeFromItinerary = (id: string) => {
    setItinerary((prev) => prev.filter((item) => item.id !== id));
  };

  // Price আপডেট করার ফাংশন
  const updateActivityCost = (id: string, newCost: number) => {
    setItinerary((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cost: newCost } : item))
    );
  };

  return (
    <ItineraryContext.Provider
      value={{ itinerary, addToItinerary, removeFromItinerary, updateActivityCost }}
    >
      {children}
    </ItineraryContext.Provider>
  );
};

export default Provider;