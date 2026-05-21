"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SoundContextType {
  playClick: () => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(true); // Default muted to be polite
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    // Only init AudioContext on client-side and upon interaction to abide by browser policies
    const initAudio = () => {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioContext(ctx);
      window.removeEventListener('click', initAudio);
    };
    window.addEventListener('click', initAudio);
    return () => window.removeEventListener('click', initAudio);
  }, []);

  const playClick = () => {
    if (isMuted || !audioContext) return;
    
    // Synthesize a very subtle click/tick
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(10, audioContext.currentTime + 0.05); // Rapid pitch drop
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05); // Rapid fade
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.05);
  };

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <SoundContext.Provider value={{ playClick, isMuted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
