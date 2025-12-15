import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { SoftwareIcon } from './ui/SoftwareIcon';
import { education, experience, softwares } from '../data/constants';

export const InfoGrid: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-b-4 border-ink divide-y-4 md:divide-y-0 md:divide-x-4 divide-ink">
      
      {/* Education */}
      <div className="p-6 bg-[#f8f8f8]">
        <SectionHeader title="Education" />
        <ul className="space-y-6 mt-6 relative">
           <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-ink opacity-20"></div>
           {education.map((item, idx) => (
             <li key={idx} className="relative pl-6">
               <div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-ink rounded-full border-2 border-white"></div>
               <h4 className="font-bold text-lg leading-tight">{item.school}</h4>
               <p className="text-sm italic text-gray-600">{item.degree}</p>
               <p className="text-xs font-bold mt-1 bg-black text-white inline-block px-1">CGPA: {item.gpa}</p>
             </li>
           ))}
        </ul>
      </div>

      {/* Experience */}
      <div className="p-6 bg-white">
        <SectionHeader title="Experience" />
        <ul className="space-y-6 mt-6">
           {experience.map((item, idx) => (
             <li key={idx} className="group">
               <div className="flex items-start gap-3">
                 <div className="w-2 h-2 mt-2 bg-ink rotate-45 group-hover:rotate-90 transition-transform"></div>
                 <div>
                   <h4 className="font-bold text-lg leading-tight group-hover:underline decoration-2">{item.role}</h4>
                   <p className="text-sm font-mono font-bold text-gray-500 border-b border-dashed border-gray-400 inline-block">{item.period}</p>
                 </div>
               </div>
             </li>
           ))}
        </ul>
      </div>

      {/* Softwares */}
      <div className="p-6 bg-[#f8f8f8]">
        <SectionHeader title="Softwares" />
        
        <div className="grid grid-cols-3 gap-3 mt-6">
          {softwares.map((sw) => (
            <SoftwareIcon key={sw.abbr} abbr={sw.abbr} />
          ))}
        </div>
        
        {/* Grid Decoration */}
        <div className="mt-8 border-2 border-ink p-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMDQgMEgwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlNWU1ZTUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] h-24 relative flex items-center justify-center">
            <span className="bg-white px-2 py-1 border border-ink text-xs font-bold uppercase rotate-3">AI + Visuals editing</span>
        </div>
      </div>
    </section>
  );
};
