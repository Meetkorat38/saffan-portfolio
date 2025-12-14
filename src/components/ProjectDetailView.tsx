import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, X } from 'lucide-react';
import { Project } from '../types';
import CloudinaryImage from './ui/CloudinaryImage';

const ProjectDetailView: React.FC<{ project: Project, onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink relative z-50 animate-in slide-in-from-bottom duration-300">
      {/* Navigation Bar */}
      <div className="sticky top-0 bg-paper z-40 border-b-4 border-ink p-4 flex justify-between items-center shadow-md">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 font-oswald font-bold uppercase text-lg hover:underline decoration-2"
        >
          <ArrowLeft className="w-6 h-6" /> Back to Portfolio
        </button>
        <button onClick={onClose} className="p-2 border-2 border-ink hover:bg-ink hover:text-paper transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Title Section */}
        <div className="mb-8 text-center md:text-left">
          <span className="inline-block bg-ink text-paper px-3 py-1 font-bold mb-4 uppercase tracking-widest text-sm">
            {project.category}
          </span>
          <h1 className="font-oswald font-black text-5xl md:text-8xl uppercase leading-[0.85] mb-6">
            {project.title}
          </h1>
          <div className="h-2 w-full bg-checkerboard opacity-20 mb-8"></div>
        </div>

        {/* Hero Image */}
        <div className="border-4 border-ink p-2 bg-white shadow-hard mb-12">
           <CloudinaryImage 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto grayscale contrast-125" 
           />
        </div>

        {/* Description & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <h3 className="font-oswald font-bold text-3xl uppercase mb-4">About the Project</h3>
            <p className="font-archivo text-xl leading-relaxed text-gray-800 whitespace-pre-wrap">
              {project.description}
            </p>
            {/* removed dummy lorem ipsum text */}

            {/* --- Gallery Section --- */}
            {project.gallery && project.gallery.length > 0 && (
                <div className="mt-12">
                    <h3 className="font-oswald font-bold text-3xl uppercase mb-6 flex items-center gap-2 text-ink">
                        <span className="w-4 h-4 bg-ink block"></span>
                        Project Gallery
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.gallery.map((imgUrl, i) => (
                            <div key={i} className="group relative border-2 border-ink bg-white p-1 shadow-hard-sm hover:shadow-hard transition-all cursor-pointer">
                                <div className="aspect-square overflow-hidden border border-ink">
                                    <CloudinaryImage 
                                        src={imgUrl} 
                                        alt={`Gallery Item ${i + 1}`} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                </div>
                                <div className="absolute bottom-3 right-3 bg-ink text-paper text-xs font-bold px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
          </div>
          
          <div className="border-t-4 md:border-t-0 md:border-l-4 border-ink pt-8 md:pt-0 md:pl-8">
            <h3 className="font-oswald font-bold text-2xl uppercase mb-4">Details</h3>
            <ul className="space-y-4 font-archivo">
              <li>
                <strong className="block text-sm uppercase text-gray-500">Client</strong>
                <span className="text-lg font-bold">{project.client || "Confidential"}</span>
              </li>
              <li>
                <strong className="block text-sm uppercase text-gray-500">Year</strong>
                <span className="text-lg font-bold">{project.year || new Date().getFullYear()}</span>
              </li>
              <li>
                <strong className="block text-sm uppercase text-gray-500">Services</strong>
                <span className="text-lg font-bold">{project.services || project.category}</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Next Project Teaser (Dummy) */}
        <div className="mt-16 pt-8 border-t-4 border-ink flex justify-between items-center cursor-pointer group" onClick={onClose}>
           <span className="font-oswald font-bold text-xl uppercase text-gray-500 group-hover:text-ink">Next Project</span>
           <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;
