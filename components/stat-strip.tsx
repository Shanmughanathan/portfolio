"use client";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function StatStrip() {
  return (
    <div className="border-y border-line bg-ink-2 relative z-[2]">
      <div className="max-w-content mx-auto px-6 grid grid-cols-2 md:grid-cols-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="py-[34px] px-5 text-center border-line md:border-r last:md:border-r-0 [&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-r border-b md:border-b-0"
          >
            <div className="font-disp font-bold text-[clamp(26px,3vw,38px)] tracking-[-1px] text-hi">
              {s.num}<span className="text-signal">{s.unit}</span>
            </div>
            <div className="font-mono text-[11.5px] text-lo uppercase tracking-[.5px] mt-1.5">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
