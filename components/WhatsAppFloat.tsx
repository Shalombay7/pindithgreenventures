import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const WhatsAppFloat: React.FC = () => {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform border-4 border-white flex items-center justify-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-8 h-8 fill-white/20" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-[#25D366]"></span>
        </span>
      </div>
      <span className="font-bold pr-2 hidden group-hover:block transition-all animate-in fade-in duration-300">
        Chat with Us
      </span>
    </button>
  );
};