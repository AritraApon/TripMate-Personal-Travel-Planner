# 🌍 TripMate — Personal Travel Planner

A modern, responsive web application built for travelers to explore top destinations and organize personalized trip itineraries seamlessly. Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**.

🚀 **Live Demo:** [https://trip-mate-personal-travel-planner.vercel.app/](https://trip-mate-personal-travel-planner.vercel.app/)
📂 **GitHub Repository:** [https://github.com/AritraApon/TripMate-Personal-Travel-Planner](https://github.com/AritraApon/TripMate-Personal-Travel-Planner)

---

## 📸 Project Screenshots

| Home Page | Explore Destinations | My Itinerary |
| :---: | :---: | :---: |
| ![Home Page](https://i.ibb.co.com/FdDtzPS/image.png) | ![Explore Page](https://i.ibb.co.com/2YL11g8K/image.png) | ![Itinerary Page](https://i.ibb.co.com/6cnXG3wX/image.png) |

*(Note: Replace `./public/screenshots/filename.png` with your actual screenshot image paths inside the public folder)*

---

## 🎯 Project Objective

TripMate was designed to provide an intuitive client-side travel planning experience without relying on an external backend database. It demonstrates clean modular component architecture, robust React Context API state management, persistent client storage using `localStorage`, smooth UI transitions, and fully responsive layouts across mobile, tablet, and desktop screens.

---

## ✨ Key Features

- **🗺️ Destination Explorer:** Explore curated sample destinations rendered via reusable card components with ratings, pricing, and descriptions.
- **🔍 Real-Time Search & Category Filter:** Effortlessly search destinations by title/location or filter by categories like *Beach*, *Nature*, *City*, and *Adventure*.
- **📍 Destination Details & Activities:** View full destination breakdowns including suggested activities along with their individual costs.
- **📅 Dynamic Itinerary Management:** Assign specific activities to **Day 1**, **Day 2**, or **Day 3** of your trip schedule seamlessly.
- **💰 Budget Calculation & Real-time Edits:** Automatically calculates total estimated trip costs. Users can update activity costs or remove items dynamically with instant UI updates.
- **💾 LocalStorage Persistence:** Itinerary state is persisted locally, ensuring data remains intact upon page refreshes.
- **🎨 Glassmorphic & Modern UI:** Crafted with dark theme design patterns, dynamic inline selectors, smooth animations, and toast notifications.

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
  suggestedActivities: Activity[];
}
```
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

# 👨‍💻 Developer Information
##  Aritro Mazumder

### Frontend Web Developer

Focused on React, Next.js, TypeScript, and modern UI/UX design.