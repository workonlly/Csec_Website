"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Zap, Layers, ChevronRight, Sparkles, RotateCcw } from 'lucide-react';

// --- Individual Event Card Component ---
const EventCard = ({ title, description, link, icon: Icon, delay, platform, date, format }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isFeatured = title === "CodeArena";

  const handleCardClick = (e) => {
    if (e.target.closest('[data-mission-link]')) return;
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`block w-full ${isFeatured ? 'md:w-[42%] h-[380px] sm:h-[420px] md:h-[55vh] z-20' : 'md:w-[29%] h-[340px] sm:h-[380px] md:h-[45vh] z-10'} [perspective:1200px] cursor-pointer`}
      onClick={handleCardClick}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
      >
        {/* --- FRONT SIDE --- */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] sm:rounded-[3rem] border-2 backdrop-blur-2xl p-6 sm:p-8 [backface-visibility:hidden] shadow-2xl overflow-hidden
          ${isFeatured ? 'border-purple-500/50 bg-purple-950/20 shadow-purple-500/20' : 'border-white/10 bg-[#0a0a0a]/40 shadow-black'}`}>

          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

          {isFeatured && (
            <motion.div
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent z-0 opacity-50 shadow-[0_0_15px_purple]"
            />
          )}

          <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[80px] opacity-20 pointer-events-none 
            ${isFeatured ? 'bg-purple-600' : 'bg-blue-600'}`}></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="relative mb-6 sm:mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className={`absolute -inset-4 border-2 border-dashed rounded-full opacity-30 ${isFeatured ? 'border-purple-400' : 'border-white/20'}`}
              />
              <div className={`relative p-4 sm:p-6 rounded-full border shadow-2xl transition-transform duration-500 
                  ${isFeatured ? 'bg-purple-500/10 border-purple-500/30' : 'bg-white/5 border-white/10'}`}>
                <Icon size={isFeatured ? 44 : 32} strokeWidth={1} className={isFeatured ? "text-purple-400 drop-shadow-[0_0_8px_#a855f7]" : "text-white"} />
              </div>
            </div>

            <h3 className={`${isFeatured ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'} font-black text-white uppercase tracking-tighter text-center leading-none`}>
              {title}
            </h3>

            <div className={`h-[2px] w-12 my-4 sm:my-5 rounded-full ${isFeatured ? 'bg-purple-500 shadow-[0_0_15px_#a855f7]' : 'bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'}`}></div>

            <span className={`text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2 ${isFeatured ? 'text-purple-300' : 'text-zinc-500'}`}>
              <Sparkles size={10} /> {isFeatured ? 'Main Mission' : 'Side Quest'}
            </span>

            <span className="mt-4 sm:mt-6 text-[9px] text-zinc-600 uppercase tracking-widest animate-pulse">
              Tap to reveal
            </span>
          </div>
        </div>

        {/* --- BACK SIDE --- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] sm:rounded-[3rem] bg-[#070707] border-2 border-white/20 p-6 sm:p-10 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl overflow-hidden">
          <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-3 sm:mb-4">
            Mission Briefing
          </span>

          <div className="space-y-2 mb-4 sm:mb-6 w-full max-w-[260px]">
            <div className="flex justify-between text-[10px] sm:text-xs border-b border-white/5 pb-1">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Platform</span>
              <span className="text-white font-semibold">{platform}</span>
            </div>
            <div className="flex justify-between text-[10px] sm:text-xs border-b border-white/5 pb-1">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Date</span>
              <span className="text-white font-semibold">{date}</span>
            </div>
            <div className="flex justify-between text-[10px] sm:text-xs border-b border-white/5 pb-1">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Format</span>
              <span className="text-white font-semibold">{format}</span>
            </div>
          </div>

          <p className={`${isFeatured ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} leading-relaxed text-zinc-400 font-light mb-4 sm:mb-6`}>
            {description}
          </p>

          <a
            href={link}
            data-mission-link="true"
            target={link.startsWith('http') ? '_blank' : '_self'}
            rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`flex items-center gap-2 text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest px-6 sm:px-8 py-3 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95
            ${isFeatured ? 'bg-purple-600/20 border-purple-500 hover:bg-purple-500 hover:text-white' : 'bg-white/5 border-white/10 hover:bg-white hover:text-black'}`}
          >
            Register Now <ChevronRight size={14} />
          </a>

          <button
            className="mt-3 sm:mt-4 flex items-center gap-1.5 text-[9px] text-zinc-600 uppercase tracking-widest hover:text-zinc-400 transition-colors"
            onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
          >
            <RotateCcw size={10} /> Tap to flip back
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Events Section ---
const Events = () => {
  const sectionRef = useRef(null);

  const eventData = [
    {
      title: "Logic Loop",
      icon: Terminal,
      platform: "UpToSkills",
      date: "5 April",
      format: "DSA Quiz",
      description: "Test your algorithmic speed and precision in a high-stakes competitive quiz gauntlet.",
      link: "/codearena",
      delay: 0.1
    },
    {
      title: "CodeArena",
      icon: Zap,
      platform: "Codeforces",
      date: "5 April",
      format: "ICPC-Style CP",
      description: "Solve the complex, optimize the simple, and dominate the live global leaderboard in a timed coding battle.",
      link: "https://unstop.com/o/1cJ2LFR?utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Logged_out_userhttps://share.google/JZJwkBcHxZVeJOoh4",
      delay: 0.2
    },
    {
      title: "Vibe Code Arena",
      icon: Layers,
      platform: "HackerEarth",
      date: "25 Mar – 4 Apr",
      format: "AI Prompting",
      description: "Leverage the power of LLMs to build at the speed of thought in this AI-powered coding competition.",
      link: "/codearena",
      delay: 0.3
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent px-4 sm:px-6 py-16 sm:py-24 md:py-32"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12 sm:mb-16 md:mb-24 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-white/10"></div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-[0.5em]">Sector :: Missions</span>
            <div className="h-[1px] w-12 bg-white/10"></div>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter text-white">
            Our <span className="text-purple-500">Events</span>
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl font-light text-zinc-500 text-sm sm:text-base md:text-xl">
            Choose your battleground. From pure logic to full-stack endurance.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-10">
          {eventData.map((event, idx) => (
            <EventCard
              key={idx}
              title={event.title}
              icon={event.icon}
              description={event.description}
              link={event.link}
              platform={event.platform}
              date={event.date}
              format={event.format}
              delay={event.delay}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;