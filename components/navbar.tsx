"use client";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 border-b ${
        scrolled ? "bg-ink/70 backdrop-blur-xl border-line" : "border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between gap-5">
        <a href="#top" className="flex items-center gap-2.5 font-disp font-semibold tracking-wide text-[15px]">
          <span className="w-2.5 h-2.5 rounded-full bg-signal shadow-[0_0_12px_#34D8C4] animate-pulse" />
          Shanmughanathan<span className="text-lo">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-mono text-[13px] px-3 py-2 rounded-lg transition-colors ${
                active === id ? "text-signal" : "text-mid hover:text-hi"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-[12.5px] font-semibold text-ink bg-signal px-4 py-2.5 rounded-lg ml-1 transition-shadow hover:shadow-[0_6px_22px_rgba(52,216,196,.35)]"
          >
            Get in touch
          </a>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden border border-line-2 rounded-lg px-3 py-2 text-hi"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-ink/95 backdrop-blur-xl border-t border-line px-6 py-4 flex flex-col gap-1">
          {nav.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
               className="font-mono text-sm text-mid py-2.5">{label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
             className="font-mono text-sm text-signal py-2.5">get in touch →</a>
        </nav>
      )}
    </header>
  );
}
