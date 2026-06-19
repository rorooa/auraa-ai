"use client";

import React, { useEffect, useState } from 'react';
import { Home, BrainCircuit, Users, Gamepad2 } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileBottomNav() {
    const pathname = usePathname();
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isMobile) return null;

    // Do not show bottom nav on pages where we don't want it (e.g., login, auth)
    if (pathname === '/login' || pathname === '/register') return null;

    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/companion', icon: BrainCircuit, label: 'AURAA' },
        { path: '/rooms', icon: Users, label: 'Rooms' },
        { path: '/games', icon: Gamepad2, label: 'Games' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[150] px-4 pb-6 pt-2 pointer-events-none font-jura">
            <div className="mx-auto max-w-sm pointer-events-auto bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex items-center justify-around p-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent pointer-events-none" />
                
                {navItems.map((item) => {
                    const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
                    const Icon = item.icon;
                    
                    return (
                        <button
                            key={item.path}
                            onClick={() => router.push(item.path)}
                            className="relative flex flex-col items-center justify-center w-16 h-12 z-10 transition-transform active:scale-95"
                        >
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white/10 rounded-2xl"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </AnimatePresence>
                            
                            <Icon 
                                size={20} 
                                className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-indigo-400' : 'text-white/40'}`} 
                            />
                            <span className={`text-[9px] mt-1 font-bold uppercase tracking-widest relative z-10 transition-colors duration-300 ${isActive ? 'text-indigo-300' : 'text-white/30'}`}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
