'use client';

import { useContext } from "react";
import { ItineraryContext, Activity } from "@/context/provider";
import { Trash2, DollarSign, CalendarX } from "lucide-react";

const MyItineraryPage = () => {
  const context = useContext(ItineraryContext);

  if (!context) {
    throw new Error("MyItineraryPage must be used within a Provider");
  }

  const { itinerary, updateActivityCost, removeFromItinerary } = context;


  const totalAmount = itinerary.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);

    const handleCostChange = (id: string, newCost: string) => {
    const numericCost = parseFloat(newCost) || 0;
    if (updateActivityCost) {
      updateActivityCost(id, numericCost);
    }
  };

  return (
    <div className="bg-[#000000] min-h-screen">
        <div className="  max-w-4xl mx-auto p-6 space-y-6 ">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-slate-100">My Itinerary</h1>
        <span className="text-sm text-slate-400">
          Total Items: <strong className="text-teal-400">{itinerary.length}</strong>
        </span>
      </div>

      {itinerary.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 bg-slate-900/50 rounded-2xl border border-slate-800 text-center">
          <CalendarX className="w-12 h-12 text-slate-600 mb-3" />
          <p className="text-slate-400 font-medium">Your itinerary is empty.</p>
          <p className="text-xs text-slate-500 mt-1">Add activities from the explore page!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {itinerary.map((item: Activity) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-slate-700 transition"
            >
              <h3 className="font-semibold text-slate-200 text-base">{item.title}</h3>

              <div className="flex items-center gap-4">
                {/* Price Edit Input */}
                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 focus-within:border-teal-500 transition">
                  <DollarSign className="w-4 h-4 text-slate-400" />
                  <input
                    type="number"
                    min="0"
                    value={item.cost}
                    onChange={(e) => handleCostChange(item.id, e.target.value)}
                    className="w-20 bg-transparent text-slate-100 font-bold text-sm focus:outline-none ml-1"
                  />
                </div>

                {/* Delete Button */}
                <button
                  type="button"
                  onClick={() => removeFromItinerary && removeFromItinerary(item.id)}
                  className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition"
                  title="Remove activity"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

          {/* Total Amount Summary */}
          <div className="flex items-center justify-between p-5 bg-teal-950/30 border border-teal-500/30 rounded-xl mt-6">
            <span className="text-slate-200 font-semibold text-lg">Total Estimated Cost</span>
            <span className="text-2xl font-extrabold text-teal-400">${totalAmount.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div></div>
  );
};

export default MyItineraryPage;