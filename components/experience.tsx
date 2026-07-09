"use client";
import { motion } from "framer-motion";
import SectionHeading from "./ui/section-heading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-[110px] relative z-[2]">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="career log"
          title="Where I've shipped."
          lead="A steady climb across three enterprise engineering organisations, each raising the bar on scale and ownership."
        />
        <div>
          {experience.map((e, i) => (
            <motion.div
              key={e.role + e.when}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.55 }}
              className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-8 pb-11 last:pb-0"
            >
              <div className="font-mono text-[12.5px] text-lo md:text-right pt-1">
                {e.now ? (<>Sep 2025 — <span className="text-signal">Present</span></>) : e.when}
              </div>
              <div className={`md:border-l border-line md:pl-8 pl-[22px] relative before:content-[''] before:absolute before:left-[-6px] before:top-1.5 before:w-[11px] before:h-[11px] before:rounded-full before:bg-ink ${
                e.now ? "before:border-2 before:border-signal before:shadow-[0_0_0_4px_rgba(52,216,196,.12)]" : "before:border-2 before:border-line-2"
              }`}>
                <div className="font-disp text-[20px] font-semibold mb-1">{e.role}</div>
                <div className="font-mono text-[13px] text-signal mb-3">
                  {e.company} <span className="text-lo">· {e.loc}</span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {e.points.map((p, j) => (
                    <li key={j} className="text-mid text-[15px] pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-signal before:font-mono">{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
