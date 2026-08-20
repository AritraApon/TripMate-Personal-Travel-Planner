// types/trip.ts (নিশ্চিত করো এই Interface-টি তোমার প্রজেক্টে আছে)
export interface Activity {
  id: string;
  title: string;
  cost: number;
}

export interface Destination {
  id: string;
  title: string;
  location: string;
  category: 'Beach' | 'Nature' | 'City' | 'Adventure';
  image: string;
  rating: number;
  estimatedDailyCost: number;
  description: string;
  suggestedActivities: Activity[];
}

// data/destinations.ts
export const destinationsData: Destination[] = [
  {
    id: '1',
    title: "Cox's Bazar Sea Beach",
    location: "Cox's Bazar, Bangladesh",
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    estimatedDailyCost: 45,
    description: "Explore the world's longest unbroken natural sandy sea beach. Ideal for relaxation, sunset views, and fresh seafood.",
    suggestedActivities: [
      { id: 'act-101', title: 'Parasailing at Himchari', cost: 25 },
      { id: 'act-102', title: 'Beachside Seafood Dinner', cost: 15 },
      { id: 'act-103', title: 'Speedboat Ride at Laboni Point', cost: 10 },
    ],
  },
  {
    id: '2',
    title: 'Sreemangal Tea Gardens',
    location: 'Moulvibazar, Bangladesh',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    estimatedDailyCost: 35,
    description: "The tea capital of Bangladesh, known for endless green rolling hills, lush rainforests, and rich tribal culture.",
    suggestedActivities: [
      { id: 'act-201', title: 'Trekking through Lawachara Forest', cost: 12 },
      { id: 'act-202', title: '7-Layer Tea Tasting at Nilkantha', cost: 3 },
      { id: 'act-203', title: 'Cycling through Tea Gardens', cost: 8 },
    ],
  },
  {
    id: '3',
    title: 'Sajek Valley Trail',
    location: 'Rangamati, Bangladesh',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    estimatedDailyCost: 50,
    description: "Perched high on the hill ranges, Sajek offers breathtaking views of clouds floating over lush green mountains.",
    suggestedActivities: [
      { id: 'act-301', title: 'Konglak Pahar Peak Hike', cost: 5 },
      { id: 'act-302', title: 'Helipad Sunset & Stargazing', cost: 0 },
      { id: 'act-303', title: 'Traditional Tribal BBQ Dinner', cost: 18 },
    ],
  },
  {
    id: '4',
    title: 'Kyoto Cultural Heritage',
    location: 'Kyoto, Japan',
    category: 'City',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    estimatedDailyCost: 110,
    description: "Famous for its classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses.",
    suggestedActivities: [
      { id: 'act-401', title: 'Fushimi Inari Shrine Tour', cost: 0 },
      { id: 'act-402', title: 'Traditional Tea Ceremony', cost: 35 },
      { id: 'act-403', title: 'Kimono Rental & Gion Walk', cost: 40 },
    ],
  },
  {
    id: '5',
    title: 'Santorini Island Getaway',
    location: 'Santorini, Greece',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    estimatedDailyCost: 140,
    description: "Iconic whitewashed buildings with blue domes standing against the backdrop of the Aegean Sea's deep waters.",
    suggestedActivities: [
      { id: 'act-501', title: 'Catamaran Sunset Cruise', cost: 75 },
      { id: 'act-502', title: 'Red Beach Snorkeling', cost: 20 },
      { id: 'act-503', title: 'Wine Tasting in Oia', cost: 30 },
    ],
  },
  {
    id: '6',
    title: 'Banff Mountain Park',
    location: 'Alberta, Canada',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    estimatedDailyCost: 95,
    description: "Canada's oldest national park, encompassing rocky mountain peaks, turquoise glacial lakes, and abundant wildlife.",
    suggestedActivities: [
      { id: 'act-601', title: 'Lake Louise Kayaking', cost: 45 },
      { id: 'act-602', title: 'Banff Gondola Ride', cost: 50 },
      { id: 'act-603', title: 'Johnston Canyon Trail Hike', cost: 0 },
    ],
  },
  {
    id: '7',
    title: 'Dubrovnik Old Town',
    location: 'Dubrovnik, Croatia',
    category: 'City',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    estimatedDailyCost: 85,
    description: "A stunning coastal city in southern Croatia known for its distinctive Old Town, encircled with massive stone walls.",
    suggestedActivities: [
      { id: 'act-701', title: 'Ancient City Walls Walk', cost: 30 },
      { id: 'act-702', title: 'Game of Thrones Filming Tour', cost: 25 },
      { id: 'act-703', title: 'Lokrum Island Sea Kayaking', cost: 40 },
    ],
  },
  {
    id: '8',
    title: 'Swiss Alps Ski Resort',
    location: 'Interlaken, Switzerland',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    estimatedDailyCost: 160,
    description: "A breathtaking mountainous region featuring pristine snowy alpine landscapes, glacier lakes, and outdoor sports.",
    suggestedActivities: [
      { id: 'act-801', title: 'Jungfraujoch Cable Car Ride', cost: 90 },
      { id: 'act-802', title: 'Paragliding over Interlaken', cost: 120 },
      { id: 'act-803', title: 'Lake Brienz Cruise', cost: 35 },
    ],
  },
];