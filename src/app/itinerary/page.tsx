'use client';

import { useContext } from "react";
import { ItineraryContext, Activity } from "@/context/provider";
import { Trash2, DollarSign, CalendarX, Calendar } from "lucide-react";

const MyItineraryPage = () => {
  const context = useContext(ItineraryContext);

  if (!context) {
    throw new Error("MyItineraryPage must be used within a Provider");
  }

  const { itinerary, updateActivityCost, removeFromItinerary } = context;

  // Total cost calculation
  const totalAmount = itinerary.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);

  const handleCostChange = (id: string, newCost: string) => {
    const numericCost = parseFloat(newCost) || 0;
    if (updateActivityCost) {
      updateActivityCost(id, numericCost);
    }
  };

  // Group items by Day (e.g., 'Day 1', 'Day 2', etc.)
  const groupedItinerary = itinerary.reduce((acc, item) => {
    const dayKey = item.day || 'Unscheduled';
    if (!acc[dayKey]) acc[dayKey] = [];
    acc[dayKey].push(item);
    return acc;
  }, {} as Record<string, Activity[]>);

  // Sort days in natural order (Day 1, Day 2, Day 3...)
  const sortedDays = Object.keys(groupedItinerary).sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
  );

  return (
    <div className="bg-[#000000] min-h-screen text-slate-100">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Top Bar Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">My Itinerary</h1>
            <p className="text-xs text-slate-400 mt-1">Manage your trip schedule and estimated costs</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
            Total Items: <strong className="text-teal-400 text-sm ml-1">{itinerary.length}</strong>
          </div>
        </div>

        {itinerary.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-14 bg-slate-950/60 rounded-2xl border border-slate-800/80 text-center">
            <div className="p-4 rounded-full bg-slate-900 text-slate-600 mb-4">
              <CalendarX className="w-10 h-10" />
            </div>
            <p className="text-slate-300 font-semibold text-lg">Your itinerary is empty.</p>
            <p className="text-xs text-slate-500 mt-1 max-w-xs">Explore destinations and add activities to build your trip plan!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Grouped by Day Cards */}
            {sortedDays.map((day) => {
              const dayItems = groupedItinerary[day];
              const dayTotal = dayItems.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);

              return (
                <div key={day} className="space-y-3">
                  {/* Day Header */}
                  <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 px-4 py-2.5 rounded-xl">
                    <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{day}</span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      Subtotal: <strong className="text-slate-200 font-semibold">${dayTotal.toFixed(2)}</strong>
                    </span>
                  </div>

                  {/* Activity List under this Day */}
                  <div className="space-y-3  pl-0 sm:pl-2">
                    {dayItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center  justify-between p-4 bg-slate-950 border border-slate-800/80 rounded-xl hover:border-slate-700 transition group"
                      >
                        <h3 className="font-semibold text-slate-200 text-sm sm:text-base group-hover:text-teal-400 transition">
                          {item.title}
                        </h3>

                        <div className="flex items-center gap-3 sm:gap-4">
                          {/* Price Edit Input */}
                          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 focus-within:border-teal-500 transition">
                            <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                            <input
                              type="number"
                              min="0"
                              value={item.cost}
                              onChange={(e) => handleCostChange(item.id, e.target.value)}
                              className="w-16 sm:w-20 bg-transparent text-slate-100 font-bold text-xs sm:text-sm focus:outline-none ml-1"
                            />
                          </div>

                          {/* Delete Button */}
                          <button
                            type="button"
                            onClick={() => removeFromItinerary && removeFromItinerary(item.id)}
                            className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition cursor-pointer"
                            title="Remove activity"
                          >
                            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Total Estimated Cost Grand Summary */}
            <div className="flex items-center justify-between p-5 bg-teal-950/20 border border-teal-500/30 rounded-2xl mt-8 shadow-lg shadow-teal-950/20">
              <div>
                <span className="text-slate-200 font-bold text-base sm:text-lg block">Total Estimated Cost</span>
                <span className="text-xs text-slate-400">Sum of all scheduled activities</span>
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-teal-400 tracking-tight">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyItineraryPage;