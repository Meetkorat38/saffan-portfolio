import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Sticker } from './ui/Sticker';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <header className="relative border-b-4 border-ink bg-paper">
      
      {/* Flash Message Banner */}
      <div className="bg-ink border-b-4 border-ink py-2 overflow-hidden flex relative z-30">
        <div className="animate-marquee whitespace-nowrap flex gap-4 items-center">
            {/* Repeated content for seamless loop */}
            {Array(10).fill(null).map((_, i) => (
                <React.Fragment key={i}>
                    <span className="font-oswald font-black uppercase text-sm tracking-widest text-paper">AVAILABLE FOR PROJECTS</span>
                    <span className="text-xl leading-none text-paper">★</span>
                </React.Fragment>
            ))}
             {Array(10).fill(null).map((_, i) => (
                <React.Fragment key={`dup-${i}`}>
                    <span className="font-oswald font-black uppercase text-sm tracking-widest text-paper">AVAILABLE FOR PROJECTS</span>
                    <span className="text-xl leading-none text-paper">★</span>
                </React.Fragment>
            ))}
        </div>
      </div>

      <div className="p-4 md:p-8 relative">
      
      {/* Top Stickers (Desktop Only) */}
      <div className="hidden md:block">
         <Sticker text="For Hire" rotate="-rotate-6" className="top-8 left-8" />
         <Sticker text="23 Years Old" subtext="Ahmedabad" rotate="rotate-3" className="top-6 right-8" />
      </div>

      {/* === MOBILE HERO (POSTER STYLE) === */}
      <div className="md:hidden flex flex-col items-center pt-8 pb-8 w-full">
         
         {/* 1. HI, BLOCK */}
         <div className="relative text-center mb-12 w-full flex flex-col items-center">
            <div className="font-oswald font-black text-[120px] leading-[0.8] tracking-widest uppercase relative z-10 select-none">
               HI,
            </div>
            {/* Black Highlight Badge cutting into 'HI' */}
            <div className="absolute top-[75%] left-[85%] -translate-x-1/2 translate-y-2 bg-ink text-paper px-3 py-1 font-bold font-mono text-sm tracking-widest uppercase rotate-12 z-20 shadow-hard-sm">
               Portfolio {new Date().getFullYear()}
            </div>
         </div>

         {/* 2. CIRCLE IMAGE */}
         <div className="relative w-64 h-64 mb-10">
            <div className="absolute inset-0 rounded-full border-[6px] border-ink overflow-hidden z-10 bg-white shadow-hard">
                 <img 
                    src="/saffan%20image.webp" 
                    alt="Memon Saffan" 
                    className="w-full h-full object-cover filter contrast-125"
                />
            </div>
            {/* Arrow Icon Top Right */}
            <ArrowUpRight className="absolute -top-6 -right-4 w-20 h-20 stroke-[3] text-ink z-20" />
         </div>

         {/* 3. NAME SECTION */}
         <div className="text-center mb-10">
            <p className="font-handwriting italic text-2xl text-gray-500 mb-2">My name is</p>
            <h1 className="font-oswald font-black text-7xl uppercase leading-[0.85] tracking-tight">
               Memon<br/>Saffan
            </h1>
         </div>

         {/* 4. ROLE & CONTACT BOX */}
         <div className="w-full border-4 border-ink p-1 bg-white shadow-hard mb-4">
            <div className="border-2 border-ink p-8 bg-[#f0f0f0] flex flex-col items-center gap-6">
                <h2 className="font-oswald font-black text-6xl text-center leading-[0.85] uppercase tracking-tighter text-ink">
                   I'M A<br/>GRAPHIC<br/>DESIGNER.
                </h2>
                
                <button 
                  onClick={onOpenContact}
                  className="w-full bg-ink text-paper py-4 px-6 font-bold font-oswald text-xl uppercase tracking-widest hover:bg-paper hover:text-ink border-2 border-transparent hover:border-ink transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
                >
                    Contact Me @
                </button>
            </div>
         </div>

      </div>

      {/* === DESKTOP LAYOUT (Original) === */}
      <div className="hidden md:flex flex-row gap-8 items-center justify-between mt-16">
        
        {/* Left: Giant HI */}
        <div className="w-1/3 relative text-left">
          <div className="font-oswald font-black text-[200px] leading-[0.8] tracking-tighter uppercase relative z-10">
            <span className="relative inline-block">
              HI,
              <span className="absolute inset-0 text-halftone pointer-events-none opacity-50">HI,</span>
            </span>
          </div>
          <div className="absolute -right-20 top-24 transform rotate-90 origin-bottom-left">
             <span className="bg-ink text-paper px-2 py-1 font-bold text-sm tracking-widest uppercase">Portfolio {new Date().getFullYear()}</span>
          </div>
        </div>

        {/* Middle: Portrait & Intro */}
        <div className="w-1/3 flex flex-col items-center justify-center relative">
          <div className="relative w-64 h-64 mb-6 group cursor-pointer">
            <div className="absolute inset-0 bg-black rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" 
                 style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
            <img 
              src="/saffan%20image.webp" 
              alt="Memon Saffan" 
              className="w-full h-full object-cover rounded-full border-4 border-ink relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute top-10 -right-16 text-4xl font-handwriting rotate-12 z-20">
               <ArrowUpRight className="w-12 h-12 stroke-[3]" />
            </div>
          </div>

          <div className="text-center">
            <p className="font-handwriting text-xl italic mb-1">My name is</p>
            <h1 className="font-oswald font-bold text-4xl uppercase leading-none">Memon<br/>Saffan</h1>
          </div>
        </div>

        {/* Right: Intro Text & Contacts */}
        <div className="w-1/3 flex flex-col justify-end h-full text-right">
          <h2 className="font-oswald font-black text-7xl uppercase leading-[0.85] mb-6 flex flex-col items-end">
            <span>I'm a</span>
            <span>Graphic</span>
            <span>Designer.</span>
          </h2>
          
          <div className="border-2 border-ink p-1 bg-white shadow-hard w-full max-w-sm ml-auto">
            <div className="bg-ink text-paper text-center py-1 font-bold font-oswald uppercase text-sm mb-2">
              You can contact me @
            </div>
            <ul className="text-sm font-bold space-y-1 px-2 pb-2 text-left">
              <li className="flex items-center justify-between border-b border-gray-300 pb-1">
                <span>Email:</span>
                <a href="mailto:szm.memon@gmail.com" className="hover:underline">szm.memon@gmail.com</a>
              </li>
              <li className="flex items-center justify-between border-b border-gray-300 pb-1">
                <span>Phone:</span>
                <a href="tel:8128665702" className="hover:underline">8128665702</a>
              </li>
              <li className="flex items-center justify-between border-b border-gray-300 pb-1">
                <span>Instagram:</span>
                <a href="#" className="hover:underline">@memonsaffan</a>
              </li>
              <li className="flex items-center justify-between">
                <span>LinkedIn:</span>
                <a href="https://www.linkedin.com/in/memon-saffan-607a65277/" target="_blank" rel="noopener noreferrer" className="hover:underline">@memmon-saffan</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </header>
  );
};
