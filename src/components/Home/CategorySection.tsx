import Link from "next/link";
import { Trees, Palmtree, Landmark, Mountain } from "lucide-react";

const categories = [
  { name: "Nature", count: "12+ Places", icon: Trees, href: "/explore?category=Nature" },
  { name: "Beach", count: "8+ Places", icon: Palmtree, href: "/explore?category=Beach" },
  { name: "Historical", count: "15+ Places", icon: Landmark, href: "/explore?category=Historical" },
  { name: "Adventure", count: "10+ Places", icon: Mountain, href: "/explore?category=Adventure" },
];

export default function CategorySection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-white">
              Explore by Category
            </h2>
            <p className="text-slate-400 text-sm mt-1">Pick your preferred trip vibe</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                href={cat.href}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-900/80 transition group text-center flex flex-col items-center justify-center"
              >
                <div className="p-4 rounded-full bg-slate-800/80 group-hover:bg-teal-500/20 group-hover:text-teal-400 text-slate-300 transition duration-300 mb-3">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-white font-semibold text-base mb-1">{cat.name}</h3>
                <span className="text-xs text-slate-500">{cat.count}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}