import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper border-t-4 border-ink p-4 flex flex-col md:flex-row justify-between items-center text-sm font-bold uppercase">
      <div className="flex gap-4">
        <span className="border-r-2 border-ink pr-4">English & Hindi</span>
        <span>Mumbai based</span>
      </div>
      
      <div className="mt-4 md:mt-0 flex items-center gap-2">
        <span>TYSM & DFTBA - {new Date().getFullYear()}</span>
        <div className="w-4 h-4 bg-ink rounded-full"></div>
      </div>
    </footer>
  );
};
