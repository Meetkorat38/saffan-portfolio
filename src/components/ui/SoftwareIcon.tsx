import React from 'react';

export const SoftwareIcon: React.FC<{ abbr: string }> = ({ abbr }) => (
  <div className="bg-ink text-paper aspect-square flex items-center justify-center rounded-lg font-bold text-2xl font-oswald border-2 border-transparent hover:border-ink hover:bg-transparent hover:text-ink transition-all cursor-default">
    {abbr}
  </div>
);
