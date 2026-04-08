"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

class Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.dx = (Math.random() - 0.5) * 0.8;
    this.dy = (Math.random() - 0.5) * 0.8;
    this.radius = Math.random() * 1.5 + 0.5;
  }

  update(width: number, height: number) {
    if (this.x < 0 || this.x > width) this.dx = -this.dx;
    if (this.y < 0 || this.y > height) this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Disable full animation on mobile for performance
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const activeTheme = theme === "system" ? systemTheme : theme;
    const particleColor = activeTheme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(61, 36, 26, 0.15)";
    const lineColor = activeTheme === "dark" ? "255, 255, 255" : "61, 36, 26";

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    let mouse = {
      x: -1000,
      y: -1000,
    };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const particleCount = isMobile ? 30 : 80;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      // Background clear color relies on the CSS background behind the canvas if transparent, 
      // but we set alpha: false for max performance, so we dynamically fill it via CSS vars.
      // Wait, alpha: false makes canvas opaque black by default. Let's get the background color dynamically.
      const computedStyle = getComputedStyle(document.body);
      ctx.fillStyle = computedStyle.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx, particleColor);

        // Don't draw intense lines on mobile to save battery
        if (isMobile) continue;

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(" + lineColor + ", " + (0.1 - distance / 1200) + ")";
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }

        // Mouse interaction
        const dxMouse = particles[i].x - mouse.x;
        const dyMouse = particles[i].y - mouse.y;
        const mouseDistance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (mouseDistance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(255, 77, 0, " + (0.2 - mouseDistance / 750) + ")"; // Connect to mouse with accent color
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.closePath();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, systemTheme]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-1] transition-opacity duration-1000" />;
}
