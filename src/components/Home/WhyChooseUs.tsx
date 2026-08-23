import { Compass, ShieldCheck, DollarSign, MapPin } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Smart Itinerary Planner",
    description: "Effortlessly organize your daily travel schedule and manage your trips in one place.",
  },
  {
    icon: DollarSign,
    title: "Cost Estimator",
    description: "Get accurate daily expense projections so you can travel stress-free within budget.",
  },
  {
    icon: MapPin,
    title: "Handpicked Destinations",
    description: "Discover top-rated hidden gems, historical spots, and stunning natural landscapes.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Activities",
    description: "Explore safe, curated activities with real cost breakdowns and transparent pricing.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
            Why Plan with <span className="text-teal-500">TripMate</span>?
          </h2>
          <p className="mt-3 text-slate-400 text-sm md:text-base">
            Everything you need for a seamless journey, designed for modern travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-teal-500/50 transition duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}