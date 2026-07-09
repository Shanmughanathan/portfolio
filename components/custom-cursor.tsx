"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 250, damping: 26 });
  const ry = useSpring(y, { stiffness: 250, damping: 26 });
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={glowRef}
        className="fixed z-0 w-[520px] h-[520px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(52,216,196,.10), transparent 65%)" }}
        aria-hidden
      />
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-signal -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen"
        aria-hidden
      />
      <motion.div
        style={{ x: rx, y: ry }}
        animate={{ width: hover ? 54 : 34, height: hover ? 54 : 34 }}
        className="fixed top-0 left-0 z-[9999] rounded-full border border-signal/50 -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen"
        aria-hidden
      />
    </>
  );
}
