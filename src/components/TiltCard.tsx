"use client";

import { useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const xMotion = useMotionValue(0);
  const yMotion = useMotionValue(0);
  const x = useSpring(xMotion, { stiffness: 300, damping: 30 });
  const y = useSpring(yMotion, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(y, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    // Ignore 3d tilt broadly on touch screens gracefully
    if (!window.matchMedia("(hover: hover)").matches) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    xMotion.set(xPct);
    yMotion.set(yPct);
  };

  const handleMouseLeave = () => {
    xMotion.set(0);
    yMotion.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
