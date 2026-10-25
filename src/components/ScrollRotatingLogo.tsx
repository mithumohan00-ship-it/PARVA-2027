import React from 'react';

export const ScrollRotatingLogo: React.FC = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1] overflow-hidden"
      style={{ perspective: '1200px' }}
      aria-hidden="true"
    >
      {/* Ambient Radial Golden Center Glow (pure backdrop glow, no rings) */}
      <div className="absolute w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(214,173,85,0.14)_0%,rgba(16,26,53,0.08)_50%,transparent_75%)] blur-3xl pointer-events-none" />

      {/* 3D Y-Axis Constant Low-Speed Rotating Logo (No Rings, Pure Logo, Steady Low Speed) */}
      <div
        className="relative flex items-center justify-center animate-spin-y-slow"
        style={{
          width: 'min(70vw, 460px)',
          height: 'min(70vw, 460px)',
          transformStyle: 'preserve-3d',
          opacity: 0.22,
        }}
      >
        {/* FRONT FACE (Visible during 0° - 90° and 270° - 360°) */}
        <div
          className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(1px)',
          }}
        >
          <img
            src="/logo.png"
            alt="PARVA Logo Front"
            className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(214,173,85,0.35)] brightness-110 contrast-125"
          />
        </div>

        {/* BACK FACE (Rotated 180° on Y-axis so when flipped, it shows right-side up!) */}
        <div
          className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(1px)',
          }}
        >
          <img
            src="/logo.png"
            alt="PARVA Logo Back"
            className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(214,173,85,0.35)] brightness-110 contrast-125"
          />
        </div>
      </div>
    </div>
  );
};
