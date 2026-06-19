"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

export default function MobileMaintenanceGuard() {
    const [isMobile, setIsMobile] = useState(false);
    
    // Set this environment variable in production to 'false' to trigger the maintenance screen.
    // If not set, it defaults to 'true' (meaning mobile is enabled).
    const mobileEnabled = process.env.NEXT_PUBLIC_ENABLE_MOBILE !== 'false';

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (mobileEnabled) return null;
    if (!isMobile) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-[#020205] text-white flex flex-col items-center justify-center p-6 font-jura relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-amber-600/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-red-600/10 blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.08] mix-blend-overlay" />
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="z-10 flex flex-col items-center text-center max-w-sm"
            >
                <div className="w-24 h-24 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(245,158,11,0.2)]">
                    <Wrench size={40} className="text-amber-400" />
                </div>
                
                <h1 className="text-3xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
                    Neural Upgrades
                </h1>
                
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                    The AURAA mobile experience is currently undergoing extensive neural upgrades and is temporarily offline. 
                    <br/><br/>
                    Please access the platform from a desktop or laptop to establish a secure neural link.
                </p>

                <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                    System Maintenance
                </div>
            </motion.div>
        </div>
    );
}
