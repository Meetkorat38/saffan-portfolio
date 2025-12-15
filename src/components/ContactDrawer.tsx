import React from 'react';
import { X } from 'lucide-react';

const ContactDrawer: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50 transition-opacity" onClick={onClose} />
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-300">
         <div className="bg-paper border-4 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            
            {/* Header */}
            <div className="bg-ink text-paper py-3 px-4 flex justify-between items-center">
               <h3 className="font-oswald font-bold text-xl uppercase tracking-wider">You can contact me @</h3>
               <button onClick={onClose} className="text-paper hover:scale-110 transition-transform">
                 <X className="w-6 h-6" />
               </button>
            </div>

            {/* Content */}
            <div className="p-6">
               <ul className="font-archivo font-bold text-sm space-y-4">
                 <li className="flex justify-between items-center border-b border-gray-300 pb-2">
                   <span className="text-gray-600 uppercase">Email:</span>
                   <a href="mailto:szm.memon@gmail.com" className="hover:underline text-lg">szm.memon@gmail.com</a>
                 </li>
                 <li className="flex justify-between items-center border-b border-gray-300 pb-2">
                   <span className="text-gray-600 uppercase">Phone:</span>
                   <a href="tel:8128665702" className="hover:underline text-lg">8128665702</a>
                 </li>
                 <li className="flex justify-between items-center">
                   <span className="text-gray-600 uppercase">LinkedIn:</span>
                   <a href="https://www.linkedin.com/in/memon-saffan-607a65277/" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">@memmon-saffan</a>
                 </li>
                 <li className="flex justify-between items-center border-b border-gray-300 pb-2">
                   <span className="text-gray-600 uppercase">Instagram:</span>
                   <a href="#" className="hover:underline text-lg">@memonsaffan</a>
                 </li>
               </ul>
            </div>
         </div>
      </div>
    </>
  );
};

export default ContactDrawer;
