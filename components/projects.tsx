"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./ui/section-heading";
import { projects } from "@/lib/data";

export default function Projects() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="projects" className="py-[110px] relative z-[2]">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="selected work"
          title="Systems I've engineered."
          lead="Two enterprise domains, one throughline: turning complex business rules into dependable, well-tested backend services. Tap a card to open the case study."
        />
        <div className="flex flex-col gap-5">
          {projects.map((p, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                className={`rounded-[20px] border overflow-hidden transition-colors ${isOpen ? "border-line-2" : "border-line hover:border-line-2"}`}
                style={{ background: "linear-gradient(150deg,#111726,#0C1120)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-5 p-[26px_28px] text-left"
                >
                  <div className="flex items-center gap-[18px]">
                    <span className="font-mono text-[11px] uppercase tracking-[.5px] px-3 py-1.5 rounded-full border border-line-2 text-amber bg-amber/[.06] whitespace-nowrap">{p.badge}</span>
                    <div>
                      <div className="font-disp text-[22px] font-semibold">{p.title}</div>
                      <div className="text-sm text-lo mt-0.5">{p.sub}</div>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className={`w-[38px] h-[38px] rounded-[10px] border border-line-2 flex items-center justify-center flex-shrink-0 ${isOpen ? "text-signal" : "text-mid"}`}>
                    <Plus size={16} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7 grid md:grid-cols-2 gap-x-10 gap-y-1 border-t border-line">
                        <Block h="The problem"><p className="text-mid text-[14.5px]">{p.problem}</p></Block>
                        <Block h="What I built"><p className="text-mid text-[14.5px]">{p.solution}</p></Block>
                        <Block h="My responsibilities"><List items={p.responsibilities} /></Block>
                        <Block h="The impact"><List items={p.impact} /></Block>
                        <div className="md:col-span-2 flex flex-wrap gap-2 mt-1.5">
                          {p.stack.map((t) => (
                            <span key={t} className="font-mono text-xs text-mid bg-ink-2 border border-line px-2.5 py-1.5 rounded-lg">{t}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Block({ h, children }: { h: string; children: React.ReactNode }) {
  return (
    <div>
      <h5 className="font-mono text-[11.5px] uppercase tracking-[.6px] text-signal mt-[22px] mb-2.5">{h}</h5>
      {children}
    </div>
  );
}
function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((it, i) => (
        <li key={i} className="text-mid text-sm pl-[18px] relative before:content-['•'] before:absolute before:left-0 before:text-signal">{it}</li>
      ))}
    </ul>
  );
}
