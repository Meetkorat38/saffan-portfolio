import React from 'react';

export const Sticker = ({ text, subtext, rotate = "rotate-0", className = "" }: { text: string, subtext?: string, rotate?: string, className?: string }) => (
  <div className={`absolute z-20 bg-paper border-2 border-ink px-4 py-2 shadow-hard transform ${rotate} ${className}`}>
    <div className="font-oswald font-bold text-lg uppercase leading-none">{text}</div>
    {subtext && <div className="font-archivo text-sm font-bold text-center border-t-2 border-ink mt-1 pt-1">{subtext}</div>}
  </div>
);
