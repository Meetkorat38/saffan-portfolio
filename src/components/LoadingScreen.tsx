import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increment for more natural feel
        const increment = Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small delay at 100% before finishing
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-paper flex items-center justify-center">
        <div className="flex flex-col items-center">
            <h1 className="text-9xl font-black font-oswald text-ink mb-4">
                {progress}%
            </h1>
            <div className="w-64 h-2 border-2 border-ink p-0.5">
                <div 
                    className="h-full bg-ink transition-all duration-200 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <p className="mt-4 font-archivo text-sm font-bold uppercase tracking-widest text-gray-500 animate-pulse">
                Loading Experience
            </p>
        </div>
    </div>
  );
};

export default LoadingScreen;
