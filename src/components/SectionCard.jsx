import React from 'react';
import { motion } from 'framer-motion';

const SectionCard = ({ title, subtitle, accent = '#F6D08A', children, highContrast = false, largeText = false }) => {
  const titleColor = highContrast ? '#FFF8F0' : '#C9B7E6';
  const textColor = highContrast ? '#FFF8F0' : '#EDE7FF';
  const bgColor = highContrast ? 'bg-[#2B3A67]/70' : 'bg-white/10';
  const borderColor = highContrast ? 'border-white/40' : 'border-white/20';

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="w-full max-w-3xl mx-auto px-4"
    >
      <div
        className={`${bgColor} border ${borderColor} backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden`}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(600px 200px at 10% -10%, rgba(246,208,138,0.10), transparent 60%), radial-gradient(400px 200px at 110% 110%, rgba(201,183,230,0.10), transparent 60%)`
        }} />
        <div className="relative">
          <h2 className={`font-serif text-2xl sm:text-3xl font-semibold tracking-wide`} style={{ color: titleColor }}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-1 ${largeText ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`} style={{ color: textColor }}>
              {subtitle}
            </p>
          )}
          <div className={`mt-5 ${largeText ? 'text-lg sm:text-xl' : 'text-[17px]'} leading-8`} style={{ color: textColor }}>
            {children}
          </div>
          <div className="mt-6 h-[2px] w-20 rounded" style={{ background: accent }} />
        </div>
      </div>
    </motion.section>
  );
};

export default SectionCard;
