import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const CommunitySection = () => {
  const posts = [
    {
      id: 1,
      author: '旅行者小王',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80',
      title: '漫步西湖',
      content: '春日的西湖，烟雨朦胧中别有一番韵味...',
      likes: 128,
      comments: 32,
    },
    {
      id: 2,
      author: '摄影师阿明',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100&h=100',
      image: 'https://images.unsplash.com/photo-1495542779398-9fec7dc7986c?auto=format&fit=crop&q=80',
      title: '长城日出',
      content: '清晨5点，只为捕捉这稍纵即逝的美景...',
      likes: 256,
      comments: 45,
    },
  ];

  return (
    <section id="community" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nihao·China</h2>
        <p className="text-gray-600">分享你的旅行故事</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{post.author}</h3>
                  <p className="text-sm text-gray-500">2小时前</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">{post.title}</h4>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
                  <Heart className="h-5 w-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500">
                  <Share2 className="h-5 w-5" />
                  <span>分享</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;