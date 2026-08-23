
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { destinationsData } from '../../../../public/data/destinations';
import { Star, MapPin, DollarSign, ArrowLeft, Calendar, Sun, } from 'lucide-react';

import AddButton from '@/components/Exlore/AddButton';


interface DetailsPageProps {
  params: Promise<{ id: string }>;
}

const DetailsPage = async (props: DetailsPageProps) => {
  const params = await props.params;
  const id = params?.id;


  const destination = destinationsData.find((item) => item.id === id);

  if (!destination) {
    notFound();
  }

  //context Api handel



  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Navigation Back Link */}
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 font-medium text-sm mb-6 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Destinations</span>
        </Link>

        {/* Hero Image Banner */}
        <div className="relative h-80 sm:h-[420px] w-full rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl mb-10">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

          {/* Category Tag */}
          <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-semibold text-teal-400">
            {destination.category}
          </div>

          {/* Banner Text Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-teal-400 text-sm mb-1.5 font-medium">
                <MapPin className="w-4 h-4" />
                <span>{destination.location}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {destination.title}
              </h1>
            </div>

            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-amber-400 font-bold self-start sm:self-auto shadow-lg">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>{destination.rating} / 5.0</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Section: Description & Activities */}
          <div className="lg:col-span-2 space-y-8">

            {/* Overview Card */}
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              <h2 className="text-xl font-bold text-slate-100 mb-3 border-b border-slate-800/80 pb-3">
                About Destination
              </h2>
              <p className="text-slate-300 leading-relaxed font-normal text-base">
                {destination.description}
              </p>
            </div>

            {/* Suggested Activities Card */}
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              <div className="flex items-center justify-between mb-6 border-b border-slate-800/80 pb-3">
                <h2 className="text-xl font-bold text-slate-100">
                  Suggested Activities
                </h2>
                <span className="text-xs text-teal-400 font-medium px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
                  {destination.suggestedActivities?.length || 0} Options
                </span>
              </div>

            <AddButton destination={destination}/>


            </div>

          </div>

          {/* Right Section: Quick Travel Facts */}
          <div className="space-y-6">
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 space-y-6 sticky top-24 backdrop-blur-sm shadow-xl">
              <h3 className="text-lg font-bold text-slate-100 border-b border-slate-800/80 pb-3">
                Trip Quick Facts
              </h3>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Est. Daily Budget</span>
                  <span className="text-lg font-bold text-slate-100">
                    ${destination.estimatedDailyCost}{' '}
                    <span className="text-xs font-normal text-slate-400">/ day</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Recommended Stay</span>
                  <span className="text-sm font-semibold text-slate-200">
                    3 Days / 2 Nights
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Best Season to Visit</span>
                  <span className="text-sm font-semibold text-slate-200">
                    October - March
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default DetailsPage;