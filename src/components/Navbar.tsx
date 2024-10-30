import React, { useState } from 'react';
import { MapPin, BookOpen, Users, Camera, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: MapPin, text: 'Nihao·攻略', href: '#guides' },
    { icon: BookOpen, text: 'Nihao·China', href: '#community' },
    { icon: Users, text: 'Nihao·朋友', href: '#friends' },
    { icon: Camera, text: 'Nihao·AR', href: '#ar' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              文旅系统
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;