"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Info, X, BookOpen, ChevronRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type GuideData = {
  title: string;
  description: string;
  steps: string[];
};

const guideConfig: Record<string, GuideData> = {
  "/": {
    title: "Home Menu",
    description: "Welcome to AURAA! This is the main menu where you can choose what to do.",
    steps: [
      "Click one of the colorful buttons in the middle to start an activity.",
      "You can see if you are logged in at the top right corner.",
      "Just explore! Each button takes you to a different AI experience."
    ]
  },
  "/login": {
    title: "Log In",
    description: "Sign in to your account so AURAA can remember your preferences.",
    steps: [
      "Type in your email and password to log in.",
      "If you don't want to make an account, you can use the test login or sign in with Google.",
      "After logging in, you will be taken to the Home Menu."
    ]
  },
  "/companion": {
    title: "Chat with AURAA",
    description: "This is where you can have a real conversation with your AI companion.",
    steps: [
      "Make sure your camera is on so AURAA can see how you are feeling.",
      "Type a message in the box at the bottom, or click the Microphone icon to speak.",
      "Click the star icon (⭐) to rate your chat, or the movie icon (🎬) to save a video clip."
    ]
  },
  "/emotion-mirror": {
    title: "Emotion Mirror",
    description: "A fun game to see if you can trick the AI by hiding your true feelings.",
    steps: [
      "Allow the app to use your camera and microphone.",
      "Try saying a happy sentence while making a sad face.",
      "The AI will try to catch you! It will show you a score of how well you hid your emotions."
    ]
  },
  "/rooms": {
    title: "Aura Rooms",
    description: "Hang out with other people in special chat rooms that react to everyone's mood.",
    steps: [
      "Click 'Create Room' to make your own space, or type a code to join a friend.",
      "As everyone talks, the AI will change the room's color and music based on the group's mood.",
      "Have fun chatting together in a shared emotional space!"
    ]
  },
  "/confessions": {
    title: "Confessions Game",
    description: "An AI lie detector! Test yourself or play with a friend.",
    steps: [
      "Read the tricky question on the screen.",
      "Answer the question out loud while looking at the camera.",
      "The AI will scan your face for tiny expressions and guess if you are lying or telling the truth.",
      "Save your result card and share it with friends!"
    ]
  },
  "/shapeshifter": {
    title: "Face Gym Game",
    description: "A fast-paced game where you have to make different faces quickly.",
    steps: [
      "The screen will show you an emotion (like 'Happy' or 'Surprised').",
      "You have 10 seconds to make that exact face at your camera.",
      "Try to copy the emotions as fast as you can to get a high score!",
      "Share your final score with friends."
    ]
  }
};

const defaultGuide: GuideData = {
  title: "Page Guide",
  description: "Learn how to use this page.",
  steps: [
    "Explore the buttons and options on the screen.",
    "Make sure your camera is allowed if you want the AI to see you.",
    "Click anywhere outside this box to close it."
  ]
};

export default function GlobalGuideButton() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentGuide = guideConfig[pathname] || defaultGuide;

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/20 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(99,102,241,0.2)] flex items-center justify-center text-white/70 hover:text-white transition-all group"
        title="View Page Guide"
      >
        <BookOpen size={20} className="group-hover:text-indigo-400 transition-colors" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-jura">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-zinc-900/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 bg-gradient-to-r from-indigo-500/10 to-transparent">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/20 rounded-lg border border-indigo-500/30">
                      <Zap className="text-indigo-400" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold font-orbitron tracking-wider text-white">
                      {currentGuide.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-white/60 text-sm mt-4">
                  {currentGuide.description}
                </p>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                  How to use this page:
                </h3>
                <ul className="space-y-4">
                  {currentGuide.steps.map((step, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 min-w-5 flex justify-center">
                        <ChevronRight size={16} className="text-indigo-400" />
                      </div>
                      <span className="text-white/80 text-sm leading-relaxed">
                        {step}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="p-4 bg-black/40 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm tracking-widest text-white/80 transition-colors"
                >
                  GOT IT!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
