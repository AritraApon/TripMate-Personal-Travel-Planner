

![Mockup](https://i.ibb.co.com/CKqdgzCR/image.png)

# 🌍 TripMate — Personal Travel Planner

A modern, responsive web application built for travelers to explore top destinations and organize personalized trip itineraries seamlessly. Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**.
---
### 🚀 **Live Demo:** [https://trip-mate-personal-travel-planner.vercel.app](https://trip-mate-personal-travel-planner.vercel.app)
---
## 🎥 Project Demo

[![Watch Project Demo](https://drive.google.com/thumbnail?id=1hIAf5xCxWjoUdav6x93Xt2oYWQJo2uP0)](https://drive.google.com/file/d/1hbAvgRqwWaUuN_u4JevFdX6hJd2TjRdG/view?usp=sharing)

**▶️ Click the preview above to watch the full project demo.**

## 🎯 Project Objective

TripMate was designed to provide an intuitive client-side travel planning experience without relying on an external backend database. It demonstrates clean modular component architecture, robust React Context API state management, persistent client storage using `localStorage`, smooth UI transitions, and fully responsive layouts across mobile, tablet, and desktop screens.

---
## ✨ Key Features

* **🗺️ Destination Explorer:** Explore curated sample destinations using reusable card components with ratings, pricing, and descriptions.

* **🔍 Real-Time Search & Category Filter:** Easily search destinations by title or location, and filter them by categories such as *Beach*, *Nature*, *City*, and *Adventure*.

* **📍 Destination Details & Activities:** View detailed information about each destination, including suggested activities and their individual costs.

* **📅 Dynamic Itinerary Management:** Assign specific activities to **Day 1**, **Day 2**, or **Day 3** of your trip itinerary with ease.

* **💰 Budget Calculation & Real-Time Edits:** Automatically calculate the estimated total trip cost. Update activity costs or remove items dynamically with instant UI updates.

* **💾 LocalStorage Persistence:** Persist itinerary data locally using **LocalStorage**, ensuring your selected activities remain available even after refreshing the page.

* **🎨 Glassmorphic & Modern UI:** Designed with a modern dark theme, glassmorphic elements, dynamic selectors, smooth animations, and toast notifications for a polished user experience.


---

## 🛠️ Tech Stack & Dependencies

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Context API & Native `localStorage`
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)



```json
"dependencies": {
  "framer-motion": "^13.1.0",
  "lucide-react": "^1.33.0",
  "next": "16.3.1",
  "react": "19.2.8",
  "react-dom": "19.2.8",
  "react-toastify": "^11.1.0"
}
```

## 📊 Data Architecture
- Destinations and activities are structured using strongly typed TypeScript objects (destinations.ts):

```
export interface Activity {
  id: string;
  title: string;
  cost: number;
  day?: string;
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
  suggestedActivities:
  Activity[];
}

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
  ]
```

## 📸 Project Screenshots

| Home Page | Explore Destinations | My Itinerary |
| :---: | :---: | :---: |
| ![Home Page](https://i.ibb.co.com/FdDtzPS/image.png) | ![Explore Page](https://i.ibb.co.com/2YL11g8K/image.png) | ![Itinerary Page](https://i.ibb.co.com/6cnXG3wX/image.png) |

---
---
## ⚡ Getting Started Locally
* Follow these steps to run the project locally on your machine:

### 1 Clone the repository:


```
git clone [https://github.com/AritraApon/TripMate-Personal-Travel-Planner.git](https://github.com/AritraApon/TripMate-Personal-Travel-Planner.git)
cd TripMate-Personal-Travel-Planner
```
### 2. Install dependencies:

```Bash
npm install
```
### 3. Run the development server:
```
Bash
npm run dev
```
### 4. Open in Browser:

- Navigate to http://localhost:3000 to view the application.

---
---

# 👨‍💻 Aritro Mazumder

### Frontend Web Developer

I’m a **Frontend Web Developer** focused on building modern, responsive, and user-friendly web experiences.

### 🌐 Connect With Me

* **Portfolio:** [View Portfolio](https://aritro-mazumdar-protfolio-one.vercel.app)
* **LinkedIn:** [Connect on LinkedIn](https://www.linkedin.com/in/aritro-mazumdar-011206apon)

> 💡 Focused on creating clean, scalable, and modern web applications with React, Next.js, and TypeScript.


