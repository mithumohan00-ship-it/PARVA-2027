import React from 'react';

interface RotatingBackgroundLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
}

export const RotatingBackgroundLogo: React.FC<RotatingBackgroundLogoProps> = ({
  className = '',
  size = 'md',
  opacity = 0.15,
}) => {
  const sizeMap = {
    sm: 'w-48 h-48',
    md: 'w-80 h-80 sm:w-96 sm:h-96',
    lg: 'w-[420px] h-[420px] sm:w-[580px] sm:h-[580px]',
  };

  return (
    <div
      className={`relative flex items-center justify-center select-none pointer-events-none ${sizeMap[size]} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Central Logo with constant rotation */}
      <div className="relative z-10 w-3/4 h-3/4 flex items-center justify-center animate-spin-y-slow">
        <img
          src="/logo.png"
          alt="PARVA Rotating Emblem"
          className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(20,145,194,0.3)] brightness-110 contrast-125"
        />
      </div>
    </div>
  );
};
