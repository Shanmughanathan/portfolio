"use client";
import { motion } from "framer-motion";
import { Code2, Database, Cloud, CheckCheck, Activity, Users, type LucideIcon } from "lucide-react";
import SectionHeading from "./ui/section-heading";
import { skills } from "@/lib/data";

const icons: Record<string, LucideIcon> = { Code2, Database, Cloud, CheckCheck, Activity, Users };

export default function Skills() {
  return (
    <section id="skills" className="py-[110px] relative z-[2]">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="technical stack"
          title="The tools I reach for."
          lead="A backend-first toolkit built around the JVM, hardened by testing, observability and release discipline."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {skills.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                whileHover={{ y: -5 }}
                className="group bg-surface border border-line rounded-2xl p-6 transition-colors hover:border-line-2"
              >
                <div className="w-10 h-10 rounded-xl bg-signal/[.09] border border-signal/20 flex items-center justify-center text-signal mb-4">
                  <Icon size={20} />
                </div>
                <h4 className="font-disp text-[17px] font-semibold mb-3">{s.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="font-mono text-xs text-mid bg-ink-2 border border-line px-2.5 py-1.5 rounded-lg">{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
