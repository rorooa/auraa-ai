"use client";

import { X, Play, Music, Gamepad2, Youtube, ArrowLeft, ExternalLink, Film } from "lucide-react";
import { useState, useEffect } from "react";

interface MediaOverlayProps {
    type: "song" | "video" | "game" | "bundle" | "none";
    query?: string;
    music_url?: string;
    movie_query?: string;
    onClose: () => void;
}

export default function MediaOverlay({ type, query, music_url, movie_query, onClose }: MediaOverlayProps) {
    if (type === "none") return null;

    const [gameScore, setGameScore] = useState(0);

    // Simple Breath Game Logic
    const [breathScale, setBreathScale] = useState(1);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        if (type === "game" && isRevealed) {
            const interval = setInterval(() => {
                setBreathScale(prev => (prev === 1 ? 1.5 : 1));
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [type, isRevealed]);

    if (!isRevealed) {
        return (
            <div className="absolute inset-x-0 bottom-32 z-50 flex justify-center animate-in slide-in-from-bottom-5 duration-500">
                <div className="bg-slate-900/90 backdrop-blur-xl border border-indigo-500/30 p-5 rounded-3xl shadow-[0_10px_40px_rgba(99,102,241,0.2)] flex items-center gap-6 text-white max-w-lg mx-4">
                    <div className="p-4 bg-indigo-500/20 rounded-2xl text-indigo-400 shrink-0">
                        {type === "song" && <Music size={28} />}
                        {type === "video" && <Youtube size={28} />}
                        {type === "game" && <Gamepad2 size={28} />}
                        {type === "bundle" && <Film size={28} />}
                    </div>
                    <div className="flex-1">
                        <p className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                            AURAA has a recommendation!
                        </p>
                        <p className="text-sm text-slate-400 mt-1 leading-snug">
                            {type === "bundle" 
                                ? "I found a song AND a movie you might like."
                                : `Based on your expression, I found a ${type} you might like.`}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                        <button onClick={() => setIsRevealed(true)} className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25">
                            <ExternalLink size={14} /> Open {type === "bundle" ? "Recommendations" : type === "song" ? "Spotify" : type === "video" ? "YouTube" : "Game"}
                        </button>
                        <button onClick={onClose} className="px-5 py-2 bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center">
                            Dismiss
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in zoom-in duration-300">
            <div className="bg-white dark:bg-slate-900 border border-white/10 p-6 rounded-3xl w-full max-w-3xl shadow-2xl relative">

                <button onClick={() => setIsRevealed(false)} className="absolute top-4 left-4 p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white">
                    <ArrowLeft size={16} /> Back
                </button>

                <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2 mt-2">
                    {type === "song" && <Music className="text-pink-500" />}
                    {type === "video" && <Youtube className="text-red-500" />}
                    {type === "game" && <Gamepad2 className="text-indigo-500" />}
                    {type === "bundle" && <Film className="text-purple-500" />}

                    <span className="capitalize">
                        {type === "game" ? "Relaxation Game" : type === "bundle" ? "Movie & Music Bundle" : `Recommended ${type}`}
                    </span>
                </h2>

                <div className={`w-full bg-black rounded-2xl overflow-hidden shadow-inner border border-white/5 relative ${type === 'bundle' ? 'flex flex-col md:flex-row h-[60vh]' : 'aspect-video'}`}>
                    
                    {/* BUNDLE MOVIE FRAME */}
                    {type === "bundle" && movie_query && (
                        <div className="flex-1 h-full border-b md:border-b-0 md:border-r border-white/10">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(movie_query + " trailer")}&autoplay=1`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    )}

                    {/* BUNDLE MUSIC FRAME */}
                    {type === "bundle" && music_url && (
                        <div className="flex-1 h-full min-h-[352px] md:max-w-sm">
                            <iframe
                                src={music_url.replace("open.spotify.com", "open.spotify.com/embed")}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            />
                        </div>
                    )}

                    {/* SPOTIFY EMBED (Single) */}
                    {type !== "bundle" && query && query.includes("spotify.com") && (
                        <iframe
                            style={{ borderRadius: "12px" }}
                            src={query.replace("open.spotify.com", "open.spotify.com/embed")}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    )}

                    {/* YOUTUBE EMBED (Fallback Single) */}
                    {type !== "bundle" && query && !query.includes("spotify.com") && (type === "video" || type === "song") && (
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(query)}&autoplay=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}

                    {/* MINI GAME */}
                    {type === "game" && (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-slate-900 text-white cursor-pointer" onClick={() => setGameScore(s => s + 1)}>
                            <p className="mb-8 text-lg font-light opacity-80">Breathe in... Breathe out... (Click to relax)</p>

                            <div
                                className="w-32 h-32 rounded-full bg-indigo-500 blur-xl transition-all duration-[3000ms] ease-in-out"
                                style={{ transform: `scale(${breathScale})` }}
                            />

                            <div className="absolute bottom-4 text-sm opacity-50">
                                Relaxation Score: {gameScore}
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-4 text-sm text-muted-foreground text-center">
                    Based on your emotion, I thought you might like this {type}.
                </div>
            </div>
        </div >
    );
}
