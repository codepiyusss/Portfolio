"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Typewriter({ strings, typeSpeed = 50, backSpeed = 30, pauseTime = 1500 }: { strings: string[], typeSpeed?: number, backSpeed?: number, pauseTime?: number }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setText(strings[textIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, backSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % strings.length);
      }
    } else {
      if (charIndex < strings[textIndex].length) {
        timer = setTimeout(() => {
          setText(strings[textIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, strings, typeSpeed, backSpeed, pauseTime]);

  return (
    <span className="inline-block relative">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-1 h-5 ml-1 bg-brand-accent align-middle"
      />
    </span>
  );
}
