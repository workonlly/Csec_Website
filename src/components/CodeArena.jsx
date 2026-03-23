"use client";
import { useRef } from 'react';
import { Calendar, Trophy, Terminal, Zap, Users } from 'lucide-react';
import PlanetScene from './PlanetScene';
import { motion, useScroll, useTransform } from "framer-motion";


const CodeArena = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yPlanet = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scalePlanet = useTransform(scrollYProgress, [0, 1], [1.2, 2.0]);
  const rotatePlanet = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={containerRef} className="relative min-h-[120dvh] w-full overflow-hidden">
      <div className="absolute inset-x-0 top-20 z-10 pointer-events-auto">
        <a
          href="https://rebrand.ly/nithamirpur"
          target="_blank"
          rel="noreferrer"
          className="codearena-promo group relative block overflow-hidden border-y border-orange-500/60 bg-gradient-to-r from-black via-zinc-900 to-black py-1.5 pointer-events-auto"
          aria-label="Visit Take You Forward"
        >
          <div className="codearena-promo-track flex w-max items-center">
            <div className="flex shrink-0 items-center gap-8 pr-8 text-xs font-bold uppercase tracking-[0.25em] text-orange-200 sm:text-sm">
              <img
                src="/sponsors/tufLogo.png"
                width={110}
                alt="Take You Forward"
                className="h-7 w-auto opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span>Take You Forward x CodeArena</span>
              <span>Prepare smarter. Code better. Win bigger.</span>
              <span>Tap here to start your journey.</span>
            </div>
            <div className="flex shrink-0 items-center gap-8 pr-8 text-xs font-bold uppercase tracking-[0.25em] text-orange-200 sm:text-sm">
              <img
                src="/sponsors/tufLogo.png"
                width={110}
                alt="Take You Forward"
                className="h-7 w-auto opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span>Take You Forward x CodeArena</span>
              <span>Prepare smarter. Code better. Win bigger.</span>
              <span>Tap here to start your journey.</span>
            </div>
          </div>
        </a>
      </div>
      
      {/* 1. THE PLANET BACKGROUND - Now strictly centered vertically */}
      <motion.div
        style={{ y: yPlanet, scale: scalePlanet, rotate: rotatePlanet }}
        className="fixed inset-0 z-20 pointer-events-none hidden lg:flex items-center justify-end overflow-visible px-12"
      >
        <div className="w-[70%] h-[85%] transform lg:translate-y-9 lg:translate-x-24 opacity-80 lg:opacity-100">
          <PlanetScene />
        </div>
      </motion.div>
      {/* 2. THE CONTENT - Using flex-start with a controlled top-offset for consistency */}
      <motion.div
        style={{ opacity: opacityContent }}
        className="relative z-30 flex flex-col justify-start min-h-screen px-6 md:px-12 lg:px-24 pt-[15vh] pb-20 pointer-events-none"
      >
        <div className="w-full max-w-7xl mx-auto pointer-events-auto">
          {/* Left Content Section */}
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-0 tracking-tighter leading-[0.85] text-white">
                <span className="block">CODE</span>
                <span className="block codearena-hero-gradient p-1">ARENA&apos;26</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-zinc-400 font-light mb-10 tracking-wide max-w-xl"
            >
              A <span className="text-white font-medium underline decoration-purple-500/50 underline-offset-4">Multiverse</span> of coding excellence, hosting four elite tracks for the next generation of engineers.
            </motion.p>

            {/* Feature Lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-4 mb-12"
            >
              <FeatureLine 
                icon={<Users size={18} className="text-blue-400" />} 
                text="Intelligence from top-tier global interns" 
              />
              <FeatureLine 
                icon={<Zap size={18} className="text-yellow-400" />} 
                text="High-stakes tracks across DSA & AI Prompting" 
              />
              <FeatureLine 
                icon={<Trophy size={18} className="text-purple-400" />} 
                text="Bounties featuring cash prizes & exclusive gear" 
              />
            </motion.div>

            {/* Stat Cards Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl"
            >
              <StatCard 
                label="Event Window" 
                value="25 Mar - 05 Apr" 
                icon={<Calendar size={16} className="text-purple-400" />} 
              />
              <StatCard 
                label="Active Sectors" 
                value="04 Missions" 
                icon={<Zap size={16} className="text-yellow-400" />} 
              />
              <StatCard 
                label="Total Bounty" 
                value="₹50,000+" 
                icon={<Trophy size={16} className="text-amber-400" />} 
              />
        <a href="https://chat.whatsapp.com/BfsQ6JWzza0BpzFQtguA0f" target="_blank">
  <div className="group p-4 bg-transparent border border-white/10 rounded-2xl flex flex-col justify-between h-full transition-all duration-300 hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-md hover:shadow-[#25D366]/30 cursor-pointer active:scale-[0.98]">

    {/* Top (icon + label style like reference) */}
    <div className="flex items-center gap-2 mb-2 text-white/60">
      <div className="w-6 h-6 flex items-center justify-center">
        <img
          src="/sponsors/whats.svg"
          width={18}
          height={18}
          alt="community"
        />
      </div>
      <span className="text-[10px] uppercase font-black tracking-widest">
        Community
      </span>
    </div>

    {/* Bottom (main text like value) */}
    <p className="text-white font-bold text-sm sm:text-base group-hover:text-white">
      Join Here
    </p>

  </div>
</a>
             
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Sub-Components ---

const FeatureLine = ({ icon, text }) => (
  <div className="flex items-center gap-4 group cursor-default">
    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-white/30 transition-all">
      {icon}
    </div>
    <span className="text-zinc-300 group-hover:text-white transition-colors">
      {text}
    </span>
  </div>
);

const StatCard = ({ label, value, icon }) => (
  <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col items-start text-left">
    <div className="text-zinc-500 flex items-center gap-2 mb-2">
      {icon}
      <span className="text-[10px] uppercase font-black tracking-widest">
        {label}
      </span>
    </div>
    <p className="text-white font-bold text-sm sm:text-base">{value}</p>
  </div>
);

export default CodeArena;
