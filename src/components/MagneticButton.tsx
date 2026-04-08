"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, HTMLMotionProps } from "framer-motion";

export function MagneticButton({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  const xMotion = useMotionValue(0);
  const yMotion = useMotionValue(0);
  const x = useSpring(xMotion, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(yMotion, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    const xPos = clientX - (left + width / 2);
    const yPos = clientY - (top + height / 2);

    xMotion.set(xPos * 0.3); // Magnetic pull strength
    yMotion.set(yPos * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    xMotion.set(0);
    yMotion.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ x, y }}
      className={"inline-block " + (className || "")}
      data-magnetic="true"
      {...props}
    >
      {children}
    </motion.div>
  );
}
