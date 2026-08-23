import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl bg-gradient-to-r from-teal-900/40 via-slate-900 to-slate-950 border border-teal-500/20 p-8 md:p-14 overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="max-w-xl space-y-3 z-10">
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-white">
              Ready to Start Your Next Adventure?
            </h2>
            <p className="text-slate-300 text-sm md:text-base">
              Create your custom itinerary in minutes and explore places stress-free.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <Link
              href="/explore"
              className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold transition duration-200 flex items-center gap-2 shadow-lg shadow-teal-500/20"
            >
              Explore All Destinations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}