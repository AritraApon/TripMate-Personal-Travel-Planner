import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alex Rivera",
    role: "Solo Traveler",
    comment: "TripMate helped me organize my Swiss Alps tour without going over my budget. The daily cost estimates were spot on!",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Digital Nomad",
    comment: "The activity breakdowns and easy category search made planning my Kyoto trip so seamless. Highly recommended!",
    rating: 5,
  },
  {
    name: "David Miller",
    role: "Backpacker",
    comment: "Clean UI, accurate recommendations, and zero clutter. It’s now my go-to trip-planning app.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl font-bold font-heading text-white">Loved by Travelers</h2>
          <p className="text-slate-400 text-sm mt-2">See what our community says about their experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{rev.comment}"</p>
              </div>
              <div className="border-t border-slate-800/80 pt-4">
                <h4 className="text-white font-medium text-sm">{rev.name}</h4>
                <span className="text-xs text-slate-500">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}