"use client";

import { useState, useEffect } from "react";

export function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable on mobile

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, [data-interactive="true"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300 hidden md:block"
      style={{
        background: "radial-gradient(600px circle at " + position.x + "px " + position.y + "px, rgba(255, 77, 0, " + (isHovering ? '0.06' : '0.03') + "), transparent 40%)",
      }}
    />
  );
}
