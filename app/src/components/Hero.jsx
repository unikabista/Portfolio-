import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, Code2, Brain, Cpu } from 'lucide-react';
import { personalInfo } from '@/constants';
import profilePhoto from '@/assets/profile.jpg';

// ── Typing animation hook ─────────────────────────────────────────────────────
const roles = [
  'Developer & AI Innovator',
  'Machine Learning Engineer',
  'Computer Vision Builder',
  'Python Developer',
];

function useTypingEffect() {
  const [typed, setTyped] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    let timeout;

    if (!deleting && typed.length < role.length) {
      timeout = setTimeout(() => setTyped(role.slice(0, typed.length + 1)), 80);
    } else if (!deleting && typed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2600);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 40);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIdx]);

  return typed;
}

// ── Animated stat counter ─────────────────────────────────────────────────────
function StatCounter({ end, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-slate-400">{label}</div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
const Hero = () => {
  const canvasRef = useRef(null);
  const typed = useTypingEffect();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.min(70, Math.floor(window.innerWidth / 22));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
        ctx.fill();

        particles.slice(i + 1).forEach((other) => {
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.12 * (1 - dist / 130)})`;
            ctx.stroke();
          }
        });
      });
      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    const handleResize = () => { resize(); createParticles(); };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.7 }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-fuchsia-600/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* ── Glowing Avatar ── */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative animate-float">
            {/* Outer glow */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 opacity-30 blur-xl" />
            {/* Gradient border ring */}
            <div className="relative p-[2px] rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 animate-glow-ring">
              <div className="w-24 h-24 rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            {/* Online status dot */}
            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-slate-950 flex items-center justify-center">
              <div className="relative w-3.5 h-3.5">
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping-slow" />
                <div className="relative w-3.5 h-3.5 rounded-full bg-green-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm text-slate-300">CS Junior @ ULM · Available for Internships</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text-animated">{personalInfo.name}</span>
        </h1>

        {/* Typing subtitle */}
        <p
          className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-4 font-light animate-fade-in-up min-h-[2.5rem] flex items-center justify-center gap-1"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-violet-300">{typed}</span>
          <span className="animate-blink text-violet-400 font-thin">|</span>
        </p>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {personalInfo.tagline}. I build intelligent solutions using Python,
          Machine Learning, and Computer Vision — from AI accessibility agents to
          injury prevention platforms.
        </p>

        {/* Tech icons */}
        <div
          className="flex items-center justify-center gap-4 mb-10 animate-fade-in-up flex-wrap"
          style={{ animationDelay: '0.3s' }}
        >
          {[
            { icon: Brain, label: 'AI/ML', color: 'text-violet-400' },
            { icon: Code2, label: 'Full-Stack', color: 'text-cyan-400' },
            { icon: Cpu, label: 'Computer Vision', color: 'text-fuchsia-400' },
          ].map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
            >
              <Icon className={`w-5 h-5 ${color}`} />
              <span className="text-sm text-slate-300">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/40 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <a
            href={`mailto:${personalInfo.email}`}
            className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10"
          >
            Get in Touch
          </a>
        </div>

        {/* Animated stats */}
        <div
          className="flex items-center justify-center max-w-lg mx-auto mt-16 animate-fade-in-up divide-x divide-white/10"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="px-8"><StatCounter end={30}  suffix="%" label="Accuracy Boost"   /></div>
          <div className="px-8"><StatCounter end={500} suffix="+" label="Logs Analyzed"    /></div>
          <div className="px-8"><StatCounter end={40}  suffix="%" label="Faster Detection" /></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-violet-400 rounded-full animate-scroll-dot" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.7s ease-out forwards;
        }
        @keyframes scroll-dot {
          0%   { transform: translateY(0); opacity: 1; }
          80%  { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
        .animate-scroll-dot {
          animation: scroll-dot 1.6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
