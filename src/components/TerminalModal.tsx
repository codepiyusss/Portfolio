"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";
import { useSound } from "@/components/SoundContext";

export function TerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ id: number; text: string; isCommand: boolean }[]>([
    { id: 0, text: "Welcome to Piyush.OS v1.0.0", isCommand: false },
    { id: 1, text: "Type 'help' to see available commands.", isCommand: false }
  ]);
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { playClick } = useSound();

  // Scroll to bottom on new history
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Focus input when clicked
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    playClick();
    const cmd = input.trim().toLowerCase();
    const newHistoryId = Date.now();
    
    let responseText = "";
    switch (cmd) {
      case "help":
        responseText = "Available commands: help, about, skills, contact, clear";
        break;
      case "about":
        responseText = "> I'm Piyush Tiwari, a B.Tech CSE student exploring Python & AI.";
        break;
      case "skills":
        responseText = "> Primary: Python, Java, JS/TS. Learning: AI, Machine Learning.";
        break;
      case "contact":
        responseText = "> Email: info.contactpiyush@gmail.com | GitHub: github.com/codepiyusss";
        break;
      case "hi":
      case "hello":
      case "hey":
        responseText = "> Hello there! Enjoy exploring the portfolio. ✨";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo":
        responseText = "> Nice try! But you don't have root privileges here.";
        break;
      default:
        responseText = "Command not found: " + cmd + ". Type 'help'.";
    }

    setHistory((prev) => [
      ...prev,
      { id: newHistoryId, text: "visitor@piyush:~$ " + cmd, isCommand: true },
      { id: newHistoryId + 1, text: responseText, isCommand: false }
    ]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          playClick();
        }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-surface border border-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent shadow-lg hover:shadow-brand-accent/20 hover:scale-110 transition-all duration-300 z-40 group"
        aria-label="Open Terminal"
      >
        <TerminalIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={"fixed " + (isMaximized ? "inset-4" : "bottom-6 right-6 w-[90vw] md:w-[600px] h-[500px]") + " bg-[#0A0A0A] border border-brand-accent/20 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden font-mono text-sm"}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-brand-accent/10">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-4 h-4 text-brand-accent" />
                <span className="text-brand-text/70 font-semibold tracking-wider text-xs">piyush@dev: ~</span>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsMaximized(!isMaximized)} 
                  className="text-brand-text/50 hover:text-brand-accent transition-colors"
                >
                  {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => { setIsOpen(false); setIsMaximized(false); playClick(); }} 
                  className="text-brand-text/50 hover:text-[#ff4d4d] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              className="flex-1 p-4 overflow-y-auto font-mono text-brand-text/80 cursor-text"
              onClick={handleContainerClick}
            >
              {history.map((line) => (
                <motion.div 
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={line.id} 
                  className={"mb-2 " + (line.isCommand ? "text-brand-text" : "text-brand-accent/80")}
                >
                  {line.text}
                </motion.div>
              ))}
              
              <form onSubmit={handleCommand} className="flex flex-wrap mt-2">
                <span className="text-brand-accent mr-2">visitor@piyush:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-brand-text"
                  autoComplete="off"
                  autoFocus
                  spellCheck="false"
                />
              </form>
              <div ref={bottomRef} className="h-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
