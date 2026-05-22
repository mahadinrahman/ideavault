'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    const mouse = { x: null, y: null, radius: 100 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
        this.color = `rgba(165, 180, 252, ${Math.random() * 0.4 + 0.1})`;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;

          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 15;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 15;
          }
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-[#0f172a] text-slate-200 min-h-screen flex items-center justify-center overflow-hidden relative font-sans w-full">
      {/* Interactive Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-auto" />

      {/* Glowing Background Effects */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Content Card */}
      <div className="relative z-10 text-center px-6 max-w-xl mx-auto pointer-events-none">
        {/* Big Error Code with inline bounce style tailwind transition */}
        <h1 className="text-[10rem] sm:text-[12rem] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-indigo-600 select-none drop-shadow-[0_10px_20px_rgba(99,102,241,0.2)] animate-[pulse_4s_infinite]">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4 tracking-tight">
          Lost in the digital void?
        </h2>
        <p className="text-slate-400 mt-3 text-base sm:text-lg leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3 bg-fuchsia-900 hover:bg-fuchsia-500 text-white font-medium rounded-xl shadow-lg shadow-fuchsia-600/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            Go back home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-3 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 text-slate-300 font-medium rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}