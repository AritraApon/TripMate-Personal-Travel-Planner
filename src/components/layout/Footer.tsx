// src/components/layout/Footer.tsx
import Link from "next/link";
import { Compass, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-teal-500" />
              <span className="text-2xl font-bold text-white tracking-tight">
                Trip<span className="text-teal-500">Mate</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Your personal travel planner. Organize itineraries, estimate costs, and discover unforgettable destinations with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/explore" className="hover:text-teal-400 transition">
                  Explore Destinations
                </Link>
              </li>
              <li>
                <Link href="/itinerary" className="hover:text-teal-400 transition">
                  My Itinerary
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social SVG Icons */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex gap-4">

              {/* GitHub SVG */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-teal-500 hover:text-teal-400 text-slate-400 transition flex items-center justify-center"
                title="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* X / Twitter SVG */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-teal-500 hover:text-teal-400 text-slate-400 transition flex items-center justify-center"
                title="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-teal-500 hover:text-teal-400 text-slate-400 transition flex items-center justify-center"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* Mail Icon */}
              <a
                href="mailto:contact@tripmate.com"
                className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-teal-500 hover:text-teal-400 text-slate-400 transition flex items-center justify-center"
                title="Mail"
              >
                <Mail className="w-4 h-4" />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/50 text-sm text-slate-500">
          <p>© {currentYear} TripMate. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;