import React from 'react';

export const SectionHeader = ({ title, className = "" }: { title: string, className?: string }) => (
  <div className={`bg-ink text-paper py-2 px-4 uppercase font-oswald font-bold text-2xl tracking-wider mb-4 border-2 border-ink shadow-hard-sm transform -rotate-1 ${className}`}>
    {title}
  </div>
);
