'use client';

import { ItineraryContext } from "../../context/provider";
import { CheckCircle2, Plus, Check, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

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

  // Track specific active activity for inline dropdown selection
  const [activeActivityId, setActiveActivityId] = useState<string | null>(null);

  if (!context) {
    throw new Error("AddButton must be used within a Provider");
  }

  const { itinerary, addToItinerary } = context;

  if (!destination || !destination.suggestedActivities || destination.suggestedActivities.length === 0) {
    return (
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 text-sm font-medium">
        No suggested activities available for this destination.
      </div>
    );
  }

  const handleSelectDay = (act: Activity, day: string) => {
    addToItinerary({ ...act, day });
    setActiveActivityId(null);
    toast.success(`Added ${act.title} to ${day}`); // Close inline selector
  };

  return (
    <div className="space-y-4">
      {destination.suggestedActivities.map((act) => {
        const addedItem = itinerary.find((item: any) => item.id === act.id);
        const isAdded = Boolean(addedItem);
        const isSelecting = activeActivityId === act.id;

        return (
          <div
            key={act.id}
            className={`p-4 rounded-xl bg-slate-950/60 border transition-all duration-200 ${
              isSelecting ? 'border-teal-500/80 bg-slate-900/80' : 'border-slate-800/80 hover:border-slate-700'
            }`}
          >
            {/* Top Bar: Title & Primary Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-teal-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 text-sm sm:text-base">
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
                  onClick={() => setActiveActivityId(isSelecting ? null : act.id)}
                  disabled={isAdded}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition select-none ${
                    isAdded
                      ? "bg-slate-800 text-teal-400 border border-teal-500/30 cursor-not-allowed"
                      : isSelecting
                      ? "bg-slate-800 text-slate-300 border border-slate-700"
                      : "bg-teal-500 hover:bg-teal-400 text-slate-950 active:scale-95 cursor-pointer"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added ({addedItem?.day || 'Day 1'})</span>
                    </>
                  ) : isSelecting ? (
                    <>
                      <span>Cancel</span>
                      <ChevronUp className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Inline Day Selector Panel (No Modal / No Portals) */}
            {isSelecting && !isAdded && (
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>Choose Day for Itinerary:</span>
                </div>

                <div className="flex items-center gap-2">
                  {['Day 1', 'Day 2', 'Day 3'].map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleSelectDay(act, day)}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-teal-400 hover:bg-teal-500/10 hover:text-teal-300 text-slate-200 text-xs font-medium transition cursor-pointer active:scale-95"
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AddButton;