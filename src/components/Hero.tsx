import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          探索中国之美
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          让每一次旅行都成为难忘的故事
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors">
            开始探索
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full transition-colors">
            查看攻略
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;