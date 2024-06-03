import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PostList from '../../components/Blog/PostList';
import PostDetail from '../../components/Blog/PostDetail';
import Magikarp from '../../assets/Blog/Magikarp.webp'

const Blog: React.FC = () => {
  const [posts] = useState([
    { 
      id: 1, 
      title: 'Why I Chose Magikarp as the Icon for My Website', 
      content: [
        "When I started developing my portfolio, I wanted a symbol that reflected my journey in the world of programming. After some reflection, I realized that the Pokémon Magikarp was the perfect emblem for my story.",
        "Magikarp is known for being one of the weakest Pokémon, often underestimated and ridiculed. However, there is something profoundly inspiring about its narrative. In the Pokémon world, Magikarp may seem insignificant, but those who know it well understand that it has the potential to transform into a powerful and majestic Gyarados.",
        "In many ways, I feel like a Magikarp in the vast ocean of programming. I am a developer just starting out, struggling to find my place and perfect my skills. Although I already have some experience and knowledge, I am still in the process of ascending the waterfall, facing challenges and learning with each step.",
        "I chose Magikarp because it symbolizes that initial stage of struggle and constant growth. It represents determination and the hope that, with effort and perseverance, any developer can transform into an expert, into a Gyarados. When I finally manage to climb that waterfall, I will be able to look back and see everything I have overcome, knowing that every moment of doubt and every obstacle was a step towards my professional evolution.",
        "So, if you feel like a Magikarp, don’t despair. Keep swimming, keep learning, and one day you will transform into the Gyarados you have always aspired to be.",
        "Thank you for joining me on this journey!"
      ], 
      image: Magikarp 
    }  ]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<PostList posts={posts} />} />
        <Route path="/:postId" element={<PostDetail posts={posts} />} />
      </Routes>
    </div>
  );
};

export default Blog;
