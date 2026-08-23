'use client';

import { ItineraryContext } from "../../context/provider";
import { CheckCircle2, Plus, Check } from "lucide-react";
import { useContext } from "react";

interface Activity {
  id: string;
  title: string;
  cost: number;
}

interface DestinationProps {
  destination: {
    title?: string;
    suggestedActivities?: Activity[];
  };
}

const AddButton = ({ destination }: DestinationProps) => {
  const context = useContext(ItineraryContext);

  if (!context) {
    throw new Error("AddButton must be used within a Provider");
  }

  const { itinerary, addToItinerary } = context;

  // Fallback UI if data is missing
  if (!destination || !destination.suggestedActivities || destination.suggestedActivities.length === 0) {
    return (
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 text-sm font-medium">
        No suggested activities available for this destination.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {destination.suggestedActivities.map((act) => {
        const isAdded = itinerary.some((item) => item.id === act.id);

        return (
          <div
            key={act.id}
            className="flex items-center justify-between p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-900 text-teal-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-200 text-sm sm:text-base group-hover:text-teal-400 transition">
                  {act.title}
                </h4>
                <span className="text-xs text-slate-400">
                  Estimated activity fee
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-slate-100 font-bold text-sm sm:text-base">
                ${act.cost}
              </span>

              <button
                type="button"
                onClick={() => addToItinerary(act)}
                disabled={isAdded}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  isAdded
                    ? "bg-slate-800 text-teal-400 border border-teal-500/30 cursor-not-allowed"
                    : "bg-teal-500 hover:bg-teal-400 text-slate-950"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddButton;