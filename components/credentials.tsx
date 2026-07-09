"use client";
import { motion } from "framer-motion";
import { Award, GraduationCap, type LucideIcon } from "lucide-react";
import SectionHeading from "./ui/section-heading";
import { credentials } from "@/lib/data";

const icons: Record<string, LucideIcon> = { Award, GraduationCap };

export default function Credentials() {
  return (
    <section id="credentials" className="py-[110px] relative z-[2]">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading eyebrow="credentials" title="Certified & educated." />
        <div className="grid md:grid-cols-2 gap-[22px]">
          {credentials.map((c, i) => {
            const Icon = icons[c.icon];
            const teal = c.tone === "teal";
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-surface border border-line rounded-2xl p-[26px] relative overflow-hidden"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-[18px] ${teal ? "bg-signal/[.08] border border-signal/25 text-signal" : "bg-amber/[.08] border border-amber/25 text-amber"}`}>
                  <Icon size={22} />
                </div>
                <h4 className="font-disp text-[19px] font-semibold mb-1.5">{c.title}</h4>
                <div className="font-mono text-[12.5px] text-lo">{c.meta}</div>
                <p className="text-mid text-[14.5px] mt-3">{c.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
