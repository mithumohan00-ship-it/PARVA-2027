import React from 'react';

interface RotatingBackgroundLogoProps {
  className?: string;
  size?: number | string;
  opacity?: number;
  reverse?: boolean;
}

export const RotatingBackgroundLogo: React.FC<RotatingBackgroundLogoProps> = ({
  className = '',
  size = 500,
  opacity = 0.08,
  reverse = false,
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      className={`pointer-events-none select-none overflow-hidden flex items-center justify-center ${className}`}
      style={{
        width: dimension,
        height: dimension,
      }}
      aria-hidden="true"
    >
      {/* Outer Orbit Ring */}
      <div
        className={`absolute inset-0 rounded-full border border-[#D6AD55]/20 border-dashed ${
          reverse ? 'animate-spin-slow' : 'animate-spin-reverse-slow'
        }`}
      />

      {/* Middle Accent Ring with Star Markers */}
      <div
        className={`absolute inset-6 rounded-full border border-[#D6AD55]/15 ${
          reverse ? 'animate-spin-reverse-slow' : 'animate-spin-slow'
        }`}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#D6AD55] shadow-gold-sm" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#D6AD55] shadow-gold-sm" />
      </div>

      {/* The Rotating Logo Image */}
      <div
        className={`w-3/4 h-3/4 flex items-center justify-center ${
          reverse ? 'animate-spin-reverse-slow' : 'animate-spin-slow'
        }`}
        style={{ opacity }}
      >
        <img
          src="/logo.png"
          alt="PARVA Crest Background Watermark"
          className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(214,173,85,0.4)] brightness-110 contrast-125"
        />
      </div>
    </div>
  );
};
