"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquareWarning, Wand2, ScanFace, Lock, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function GamesHub() {
    const router = useRouter();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 30,
                y: (e.clientY / window.innerHeight - 0.5) * 30,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const games = [
        {
            id: 'confessions',
            title: 'Confessions',
            description: 'Speak your truth into the void. AI analyzes your hidden emotional weight.',
            icon: MessageSquareWarning,
            color: 'from-rose-500 to-orange-500',
            path: '/confessions',
            locked: false
        },
        {
            id: 'emotion-mirror',
            title: 'Emotion Mirror',
            description: 'Do your facial expressions match your words? The AI detects your honesty.',
            icon: ScanFace,
            color: 'from-cyan-500 to-blue-500',
            path: '/emotion-mirror',
            locked: false
        },
        {
            id: 'shapeshifter',
            title: 'Shapeshifter',
            description: 'Change your emotional resonance to bypass neural security gates.',
            icon: Wand2,
            color: 'from-purple-500 to-pink-500',
            path: '/shapeshifter',
            locked: false
        },
        {
            id: 'dream-weaver',
            title: 'Dream Weaver',
            description: 'Construct interactive dreamscapes based on your current emotional state.',
            icon: Lock,
            color: 'from-slate-600 to-slate-800',
            path: '#',
            locked: true
        }
    ];

    if (!isMounted) return <div className="min-h-screen bg-[#020205]" />;

    return (
        <main className="min-h-screen w-full bg-[#020205] text-white flex flex-col items-center justify-start pt-16 sm:pt-24 pb-32 px-6 font-jura relative overflow-y-auto hidden-scrollbar perspective-[1000px]">
            
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none fixed">
                <motion.div 
                    animate={{ x: mousePosition.x * -1.2, y: mousePosition.y * -1.2 }}
                    className="absolute top-[10%] left-[15%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-indigo-600/20 blur-[150px] rounded-full" 
                />
                <motion.div 
                    animate={{ x: mousePosition.x * 1.8, y: mousePosition.y * 1.8 }}
                    className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-pink-600/15 blur-[150px] rounded-full" 
                />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.08] mix-blend-overlay" />
            </div>

            <div className="z-10 w-full max-w-4xl flex flex-col relative">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center sm:text-left mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                        Neural Games
                    </h1>
                    <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto sm:mx-0 tracking-wide">
                        Engage with interactive emotional environments. Test your honesty, release your burdens, and train your neural resonance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pb-10">
                    {games.map((game, index) => {
                        const Icon = game.icon;
                        return (
                            <motion.div
                                key={game.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => !game.locked && router.push(game.path)}
                                className={`relative overflow-hidden rounded-[2rem] p-6 sm:p-8 border transition-all duration-300 group ${
                                    game.locked 
                                    ? 'bg-[#0a0a0f]/40 border-white/5 cursor-not-allowed opacity-70' 
                                    : 'bg-[#0a0a0f]/60 border-white/10 hover:border-white/30 cursor-pointer hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1'
                                } backdrop-blur-md`}
                            >
                                {!game.locked && (
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${game.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                                )}
                                
                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                                        game.locked ? 'bg-white/5 border-white/5 text-white/30' : `bg-gradient-to-br ${game.color} border-white/20 text-white shadow-lg`
                                    }`}>
                                        <Icon size={24} />
                                    </div>
                                    
                                    {game.locked ? (
                                        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-white/40 font-bold">
                                            Coming Soon
                                        </div>
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                            <ChevronRight size={18} className="text-white/50 group-hover:text-white transition-colors" />
                                        </div>
                                    )}
                                </div>
                                
                                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-widest mb-3 relative z-10 text-white/90">
                                    {game.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed relative z-10">
                                    {game.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
