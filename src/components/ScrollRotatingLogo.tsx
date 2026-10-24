import React, { useEffect, useRef, useState } from 'react';

export const ScrollRotatingLogo: React.FC = () => {
  const [rotationY, setRotationY] = useState(0);
  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);
  const autoAngleRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Scroll drives rotation on Y-axis (horizontal 3D spin)
      // Every 1px of scroll translates to 0.45 degrees of 3D rotation
      targetRotationRef.current = scrollY * 0.45;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Ambient slow continuous rotation on Y-axis (approx 12 deg/sec)
      autoAngleRef.current += delta * 12;

      // Smooth linear interpolation (lerp) for buttery 60fps/120fps motion
      const desiredAngle = targetRotationRef.current + autoAngleRef.current;
      const diff = desiredAngle - currentRotationRef.current;
      currentRotationRef.current += diff * 0.08;

      setRotationY(currentRotationRef.current);
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
      {/* Ambient Radial Golden Center Glow (without rings) */}
      <div className="absolute w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(214,173,85,0.15)_0%,rgba(16,26,53,0.08)_50%,transparent_75%)] blur-3xl pointer-events-none" />

      {/* 3D Y-Axis Rotating Logo (No Rings - Pure Logo) */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: 'min(70vw, 480px)',
          height: 'min(70vw, 480px)',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotationY}deg)`,
          willChange: 'transform',
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
            className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(214,173,85,0.4)] brightness-110 contrast-125"
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
            className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(214,173,85,0.4)] brightness-110 contrast-125"
          />
        </div>
      </div>
    </div>
  );
};
