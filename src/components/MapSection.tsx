import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <section id="guides" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nihao·攻略</h2>
        <p className="text-gray-600">探索地图，发现精彩攻略</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="aspect-video bg-gray-100 rounded-lg mb-6 relative">
          {/* Placeholder for the map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500">地图加载中...</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['北京', '上海', '西安'].map((city) => (
            <div key={city} className="p-4 border border-gray-200 rounded-lg hover:border-red-500 transition-colors cursor-pointer">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-red-500" />
                <h3 className="font-semibold">{city}</h3>
              </div>
              <p className="text-sm text-gray-600">
                发现{city}的精彩故事和独特体验
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;