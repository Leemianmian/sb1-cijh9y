import React from 'react';
import { MapPin, BookOpen, Users, Camera, Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MapSection from './components/MapSection';
import CommunitySection from './components/CommunitySection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <MapSection />
        <CommunitySection />
      </main>
    </div>
  );
}

export default App;