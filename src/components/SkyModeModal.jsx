import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkyModeModal = ({ open, onClose, highContrast }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`relative w-full max-w-3xl rounded-2xl overflow-hidden border ${highContrast ? 'border-white/40 bg-[#121522]/95' : 'border-white/20 bg-white/10'} backdrop-blur-2xl shadow-xl`}
          >
            <div className="p-6 sm:p-8">
              <h3 className="font-serif text-2xl sm:text-3xl" style={{ color: highContrast ? '#FFF8F0' : '#EDE7FF' }}>Lina’s Sky</h3>
              <p className="mt-2 text-sm sm:text-base text-white/80">Tap anywhere to seed a new wish-star. May your night be gentle.</p>
              <InteractiveStars highContrast={highContrast} />
              <div className="mt-6 flex justify-end">
                <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm font-medium" style={{ background: '#2B3A67', color: '#FFF8F0' }}>Close</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const InteractiveStars = ({ highContrast }) => {
  const [stars, setStars] = React.useState([]);
  const containerRef = React.useRef(null);

  const addStar = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    const id = Math.random().toString(36).slice(2);
    setStars(s => [...s, { id, x, y }]);
  };

  return (
    <div ref={containerRef} onClick={addStar} className="mt-4 relative h-72 sm:h-80 rounded-xl overflow-hidden cursor-crosshair" style={{ background: highContrast ? 'linear-gradient(180deg, #0b0e18 0%, #121522 100%)' : 'linear-gradient(180deg, rgba(43,58,103,0.7) 0%, rgba(12,12,20,0.7) 100%)' }}>
      {stars.map(s => (
        <motion.div
          key={s.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute w-2 h-2 rounded-full shadow-[0_0_20px_rgba(246,208,138,0.8)]"
          style={{ left: s.x + '%', top: s.y + '%', background: '#F6D08A' }}
        />
      ))}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(40% 60% at 50% 50%, rgba(255,255,255,0.06), transparent 60%)' }} />
    </div>
  );
};

export default SkyModeModal;
