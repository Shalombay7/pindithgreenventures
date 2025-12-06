import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-none w-full max-w-sm px-4 flex justify-center">
      <div className="bg-earth-800/90 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/10">
         <div className="bg-pindith-500 rounded-full p-1">
           <CheckCircle className="w-4 h-4 text-white" />
         </div>
         <span className="font-medium text-sm drop-shadow-md">{message}</span>
      </div>
    </div>
  );
};