import React from 'react';
import { Star } from 'lucide-react';

export const AchievementsBanner: React.FC = () => {
  return (
    <section className="bg-ink text-paper py-3 px-4 border-b-4 border-ink flex flex-col md:flex-row items-center justify-between gap-4">
       <div className="font-oswald font-bold text-3xl uppercase tracking-wider flex items-center gap-2">
         <Star className="fill-paper w-8 h-8" /> 
         Recent Achievements
       </div>
       
       <div className="flex-1 bg-paper text-ink p-2 transform md:-skew-x-12 border-2 border-white md:border-transparent">
          <div className="font-bold text-center uppercase tracking-tight transform md:skew-x-12 flex items-center justify-center gap-2">
            <span>Completing Design without touching deadlines</span>
          </div>
       </div>
    </section>
  );
};
