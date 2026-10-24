import React, { useEffect, useRef, useState } from 'react';

export const ScrollRotatingLogo: React.FC = () => {
  const [rotationX, setRotationX] = useState(0);
  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);
  const autoAngleRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Scroll drives rotation on X axis: 1px scroll = 0.45 degrees of 3D rotation
      targetRotationRef.current = scrollY * 0.45;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Ambient slow continuous drift (approx 12 deg/sec) so it's always alive
      autoAngleRef.current += delta * 12;

      // Smooth linear interpolation (lerp) for buttery 60fps/120fps motion
      const desiredAngle = targetRotationRef.current + autoAngleRef.current;
      const diff = desiredAngle - currentRotationRef.current;
      currentRotationRef.current += diff * 0.08;

      setRotationX(currentRotationRef.current);
      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1] overflow-hidden"
      style={{ perspective: '1200px' }}
      aria-hidden="true"
    >
      {/* Ambient Radial Golden Center Glow */}
      <div className="absolute w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] rounded-full bg-[radial-gradient(circle,rgba(214,173,85,0.12)_0%,rgba(16,26,53,0.06)_50%,transparent_75%)] blur-2xl pointer-events-none" />

      {/* 3D X-Axis Rotating Assembly */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: 'min(78vw, 560px)',
          height: 'min(78vw, 560px)',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotationX}deg)`,
          willChange: 'transform',
        }}
      >
        {/* Outer Orbit Dashed Ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-[#D6AD55]/25 border-dashed shadow-[0_0_40px_rgba(214,173,85,0.18)]"
          style={{ transform: 'translateZ(0px)' }}
        />

        {/* Middle Cardinal Ring with Star Markers */}
        <div
          className="absolute inset-6 sm:inset-8 rounded-full border border-[#D6AD55]/30"
          style={{ transform: 'translateZ(1px)' }}
        >
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D6AD55] shadow-gold-sm" />
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D6AD55] shadow-gold-sm" />
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D6AD55]/70" />
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D6AD55]/70" />
        </div>

        {/* FRONT FACE (Visible during 0° - 90° and 270° - 360°) */}
        <div
          className="absolute inset-14 sm:inset-16 rounded-full bg-gradient-to-br from-[#182547]/85 via-[#101A35]/90 to-[#0A1022]/85 border-2 border-[#D6AD55]/50 flex items-center justify-center p-7 sm:p-9 shadow-gold-glow backdrop-blur-[2px]"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(3px)',
          }}
        >
          <img
            src="/logo.png"
            alt="PARVA 2027 Emblem Front"
            className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(214,173,85,0.45)] brightness-110 contrast-125"
          />
        </div>

        {/* BACK FACE (Rotated 180° on X so when flipped, it shows right-side up!) */}
        <div
          className="absolute inset-14 sm:inset-16 rounded-full bg-gradient-to-br from-[#182547]/85 via-[#101A35]/90 to-[#0A1022]/85 border-2 border-[#D6AD55]/50 flex items-center justify-center p-7 sm:p-9 shadow-gold-glow backdrop-blur-[2px]"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateX(180deg) translateZ(3px)',
          }}
        >
          <img
            src="/logo.png"
            alt="PARVA 2027 Emblem Back"
            className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(214,173,85,0.45)] brightness-110 contrast-125"
          />
        </div>
      </div>
    </div>
  );
};
