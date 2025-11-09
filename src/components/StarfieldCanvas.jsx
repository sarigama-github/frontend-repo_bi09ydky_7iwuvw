import React, { useEffect, useRef } from 'react';

const rand = (min, max) => Math.random() * (max - min) + min;

const StarfieldCanvas = ({ density = 0.00015, highContrast = false, onStarTap }) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let dpr = window.devicePixelRatio || 1;
    let animationId;

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      generateStars();
    };

    const generateStars = () => {
      const count = Math.floor(canvas.width * canvas.height * density / (dpr * dpr));
      starsRef.current = new Array(count).fill(0).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: rand(0.4 * dpr, 1.6 * dpr),
        tw: rand(0.002, 0.01),
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of starsRef.current) {
        const alpha = 0.6 + 0.4 * Math.sin(s.phase);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = highContrast ? `rgba(255,248,240,${alpha})` : `rgba(201,183,230,${alpha})`;
        ctx.fill();
        s.phase += s.tw;
      }
      animationId = requestAnimationFrame(draw);
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * dpr;
      const y = (e.clientY - rect.top) * dpr;
      // find a star near the click
      const found = starsRef.current.find(s => Math.hypot(s.x - x, s.y - y) < 10 * dpr);
      if (found && onStarTap) {
        onStarTap({ x: e.clientX, y: e.clientY });
      }
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('click', handleClick);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, [density, highContrast, onStarTap]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" aria-hidden />;
};

export default StarfieldCanvas;
