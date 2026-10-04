"use client";

import { useState, useEffect } from "react";

export function CursorSpotlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable on mobile

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('button, a, input, textarea, [data-interactive="true"]'));
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // A flat, blurred circle (single solid color) that follows the cursor.
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-40 hidden md:block rounded-full bg-brand-accent blur-3xl transition-opacity duration-300"
      style={{
        width: 360,
        height: 360,
        left: position.x - 180,
        top: position.y - 180,
        opacity: isHovering ? 0.07 : 0.04,
      }}
    />
  );
}
