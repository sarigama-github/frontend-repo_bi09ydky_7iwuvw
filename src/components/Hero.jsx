import React, { useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const loveLines = [
  'I carry your dawn in my quiet heart.',
  'Between every breath, a whisper: Lina.',
  'Even the stars learn softness from your light.',
  'May your steps be kissed by ease today.',
  'Wherever you are, my prayers arrive first.',
  'Your name is a lantern in all my rooms.',
  'Gentle as rain, certain as sunrise — you are loved.',
  'The moon practices tenderness by watching you.',
  'May today be silk over your shoulders.',
  'I keep a small sky open for your joy.',
  'Mercy wraps your day like warm shawl.',
  'You are the hush the world hopes to learn.',
];

function getDailyLine() {
  const date = new Date();
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const index = seed % loveLines.length;
  return loveLines[index];
}

const Hero = ({ highContrast, largeText }) => {
  const daily = useMemo(() => getDailyLine(), []);

  return (
    <div className="relative w-full min-h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* soft gradient on top of spline to blend */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(60% 50% at 50% 30%, rgba(43,58,103,0.45) 0%, rgba(12,12,20,0.6) 60%, rgba(12,12,20,0.85) 100%)'
        }} />
      </div>

      {/* floating breathing glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-40" aria-hidden>
        <div className="w-[40rem] h-[40rem] rounded-full" style={{ background: 'radial-gradient(circle, rgba(246,208,138,0.35), transparent 60%)', animation: 'pulseGlow 6s ease-in-out infinite' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl px-4"
      >
        <div className={`backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden`}
          style={{ boxShadow: '0 10px 50px rgba(0,0,0,0.35)' }}
        >
          <div className="p-6 sm:p-10">
            <p className="text-sm tracking-widest uppercase" style={{ color: highContrast ? '#FFF8F0' : '#F6D08A' }}>
              Bismillah — For Lina
            </p>
            <h1 className="font-serif mt-2 text-4xl sm:text-5xl md:text-6xl leading-tight" style={{ color: highContrast ? '#FFF8F0' : '#EDE7FF' }}>
              Lina’s Light
            </h1>
            <p className={`mt-4 ${largeText ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} text-[#FFF8F0]/90`}>
              {daily}
            </p>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { transform: scale(0.95); opacity: 0.35; }
          50% { transform: scale(1.05); opacity: 0.55; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
