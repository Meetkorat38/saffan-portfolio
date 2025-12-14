import React from 'react';
import { Project } from '../types';
import { projects } from '../data/constants';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  return (
    <section className="p-4 md:p-8 border-b-4 border-ink">
      <div className="flex justify-center mb-8">
        <h2 className="font-oswald font-black text-6xl md:text-8xl uppercase tracking-tight text-center relative inline-block">
          Portfolio
          {/* Splatter Effect Simulation */}
          <div className="absolute -left-12 -top-8 w-16 h-16 bg-ink rounded-full opacity-10 blur-sm pointer-events-none"></div>
          <div className="absolute -right-8 bottom-0 w-8 h-8 bg-black rounded-full pointer-events-none" style={{clipPath: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'}}></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className="group relative cursor-pointer"
            onClick={() => onSelectProject(project)}
          >
            {/* Card Container */}
            <div className="h-full border-4 border-ink p-2 bg-white shadow-hard transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] duration-200 flex flex-col">
              {/* Checkerboard Frame */}
              <div className="p-2 bg-checkerboard border-2 border-ink mb-3">
                <div className="bg-white border-2 border-ink aspect-[4/3] overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                  
                  <div className="absolute top-2 right-2 bg-ink text-paper px-2 py-0.5 text-xs font-bold font-oswald uppercase">
                     Vol. {idx + 1}
                  </div>
                  
                  {/* Hover Overlay 'View Project' */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all duration-300">
                     <div className="bg-paper border-2 border-ink px-3 py-1 font-bold font-oswald uppercase transform scale-0 group-hover:scale-100 transition-transform duration-200 rotate-3">
                        View Project
                     </div>
                  </div>
                </div>
              </div>
              
              <h3 className="font-oswald font-bold text-2xl uppercase mb-1 leading-none group-hover:underline decoration-2">{project.title}</h3>
              <div className="mt-auto">
                <p className="font-archivo text-xs font-bold uppercase text-gray-400 mb-2">{project.category}</p>
                <p className="font-archivo text-sm text-gray-600 leading-tight border-t-2 border-dotted border-gray-400 pt-2 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
