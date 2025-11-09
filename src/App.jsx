import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import SectionCard from './components/SectionCard';
import StarfieldCanvas from './components/StarfieldCanvas';
import SkyModeModal from './components/SkyModeModal';

// Colors
// Moonlight Blue #2B3A67, Lavender Mist #C9B7E6, Soft Gold #F6D08A, Ivory #FFF8F0, Deep Charcoal #2C2C2C

const App = () => {
  const [highContrast, setHighContrast] = React.useState(false);
  const [largeText, setLargeText] = React.useState(false);
  const [skyOpen, setSkyOpen] = React.useState(false);
  const [popup, setPopup] = React.useState(null);

  const handleStarTap = ({ x, y }) => {
    setPopup({ x, y, text: 'A wish for Lina ✨' });
    setTimeout(() => setPopup(null), 1600);
  };

  return (
    <div className="min-h-screen bg-[#0b0e18] text-white font-sans relative overflow-x-hidden">
      <StarfieldCanvas highContrast={highContrast} onStarTap={handleStarTap} />

      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 flex items-center justify-between">
        <div className="px-3 py-1.5 rounded-full border border-white/15 backdrop-blur-md bg-white/5 text-sm" style={{ color: '#FFF8F0' }}>
          Lina’s Light
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setLargeText(v => !v)} className="px-3 py-1.5 rounded-full text-xs sm:text-sm border border-white/20 bg-white/10 hover:bg-white/15">Large Text</button>
          <button onClick={() => setHighContrast(v => !v)} className="px-3 py-1.5 rounded-full text-xs sm:text-sm border border-white/20 bg-white/10 hover:bg-white/15">High Contrast</button>
          <button onClick={() => setSkyOpen(true)} className="px-3 py-1.5 rounded-full text-xs sm:text-sm border border-white/20 bg-white/10 hover:bg-white/15">Sky Mode</button>
        </div>
      </header>

      <main className="relative z-10 pt-20 pb-24 space-y-16">
        <Hero highContrast={highContrast} largeText={largeText} />

        <SectionCard title="Words of Love" subtitle="Quiet letters for your gentle hour" highContrast={highContrast} largeText={largeText}>
          <p>
            You are a soft horizon the evening leans toward. If your hands feel empty, know that prayers are placing roses there. If your day is loud, may these syllables be a small room of hush: Lina, light of my map, mercy of my morning.
          </p>
          <p className="mt-4">
            What is the measure of affection? A window left open for your return, a cup kept warm, a street of stars following your name home.
          </p>
        </SectionCard>

        <SectionCard title="Prayers for You" subtitle="Bismillah — may ease circle your steps" highContrast={highContrast} largeText={largeText}>
          <ul className="list-disc pl-5 space-y-2">
            <li>May your path be silk and your heart unafraid.</li>
            <li>May the One who holds galaxies hold your breath steady.</li>
            <li>May your worries fold like paper boats and find calm waters.</li>
            <li>May your name be called by angels in the language of gentleness.</li>
          </ul>
        </SectionCard>

        <SectionCard title="When You Feel" subtitle="For those weathered moments" highContrast={highContrast} largeText={largeText}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-medium" style={{ color: '#F6D08A' }}>Tired</h4>
              <p className="mt-1 text-white/80">Lay down the day. Even oceans rest. Close your eyes; I’ll keep watch with prayer.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-medium" style={{ color: '#F6D08A' }}>Anxious</h4>
              <p className="mt-1 text-white/80">Hold your palm to your heart. Inhale mercy, exhale weight. You are not alone.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-medium" style={{ color: '#F6D08A' }}>Lonely</h4>
              <p className="mt-1 text-white/80">Look up. The sky is a letter addressed to you. Every star says: stay.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-medium" style={{ color: '#F6D08A' }}>Grateful</h4>
              <p className="mt-1 text-white/80">Let gratitude be soft thunder. Share it with the nearest thing that breathes.</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Lina’s Sky" subtitle="Open a sky of your own wishes" highContrast={highContrast} largeText={largeText}>
          <p>
            Press Sky Mode to open a quiet sky. Tap to plant stars. Each one a small wish. Let them glow for you.
          </p>
          <div className="mt-4">
            <button onClick={() => setSkyOpen(true)} className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 hover:bg-white/15" style={{ color: '#FFF8F0' }}>
              Open Sky Mode
            </button>
          </div>
        </SectionCard>

        <footer className="text-center text-sm text-white/70 pt-6">
          <p>Made with soft gold and moonlight. © {new Date().getFullYear()} For Lina.</p>
        </footer>
      </main>

      <SkyModeModal open={skyOpen} onClose={() => setSkyOpen(false)} highContrast={highContrast} />

      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 px-3 py-2 rounded-lg text-sm"
            style={{ left: popup.x + 10, top: popup.y + 10, background: 'rgba(43,58,103,0.9)', color: '#FFF8F0', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)' }}
          >
            {popup.text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
