import React from 'react';

export const ServicesSection: React.FC = () => {
  return (
    <section className="p-8 md:p-16 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ccc 1px, transparent 0)', backgroundSize: '20px 20px' }}>
      
      <div className="relative z-10 text-center">
         <div className="inline-block transform -rotate-2 relative">
           <h2 className="font-oswald font-black text-6xl md:text-9xl uppercase leading-none text-ink drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">
             Splendid Services!
           </h2>
           <div className="absolute -top-6 -right-8 md:-right-16 bg-white border-2 border-ink px-3 py-2 shadow-hard transform rotate-12">
              <div className="text-xs md:text-sm font-bold leading-tight">in Branding<br/>& Advertising</div>
           </div>
         </div>
         
         <div className="mt-8 flex flex-wrap justify-center gap-4">
            {['Brand Identity', 'Packaging', 'Editorial', 'Web Design'].map((service) => (
              <span key={service} className="bg-ink text-white px-6 py-2 rounded-full font-bold uppercase text-sm md:text-lg border-2 border-transparent hover:bg-white hover:text-ink hover:border-ink transition-colors cursor-pointer">
                {service}
              </span>
            ))}
         </div>
      </div>
    </section>
  );
};
