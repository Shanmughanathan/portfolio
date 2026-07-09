"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import Magnetic from "./ui/magnetic";
import { profile } from "@/lib/data";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] as const } } };

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 relative z-[2]">
      <div className="max-w-content mx-auto px-6 w-full grid lg:grid-cols-[1.05fr_.95fr] gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="font-mono text-[12.5px] text-lo mb-6 flex items-center gap-2.5 flex-wrap">
            <span className="font-mono text-[11.5px] px-2.5 py-1 rounded-full border border-signal/35 text-signal bg-signal/[.06]">● not currently seeking roles</span>
            <span className="font-mono text-[11.5px] px-2.5 py-1 rounded-full border border-line-2 text-mid bg-surface">{profile.location}</span>
          </motion.div>

          <motion.div variants={item} className="font-mono text-[15px] text-signal tracking-wider uppercase mb-5">
            {profile.role}
          </motion.div>

          <motion.h1 variants={item} className="font-disp font-bold text-[clamp(38px,6.2vw,68px)] leading-[1.02] tracking-[-1.5px] mb-5">
            {profile.headline.pre}{" "}
            <span className="bg-gradient-to-r from-signal via-brandblue to-amber bg-clip-text text-transparent">
              {profile.headline.accent}
            </span>{" "}
            {profile.headline.post}
          </motion.h1>

          <motion.p variants={item} className="text-mid text-[17.5px] max-w-[520px] mb-9">
            {profile.pitch}
          </motion.p>

          <motion.div variants={item} className="flex gap-3.5 flex-wrap mb-8">
            <Magnetic>
              <a href="#projects" className="font-mono text-[13.5px] font-semibold bg-signal text-ink px-5 py-3.5 rounded-xl inline-flex items-center gap-2.5 transition-shadow hover:shadow-[0_10px_34px_rgba(52,216,196,.35)]">
                View case studies <ArrowRight size={15} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.resume} download className="font-mono text-[13.5px] font-semibold bg-surface text-hi border border-line-2 px-5 py-3.5 rounded-xl inline-flex items-center gap-2.5 transition-colors hover:border-signal hover:text-signal">
                <Download size={15} /> Download résumé
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="flex gap-2">
            {[
              { href: profile.github, icon: Github, label: "GitHub" },
              { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <Magnetic key={label}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label}
                   className="w-[42px] h-[42px] rounded-xl border border-line-2 bg-surface flex items-center justify-center text-mid transition-all hover:text-signal hover:border-signal hover:-translate-y-0.5">
                  <Icon size={18} />
                </a>
              </Magnetic>
            ))}
          </motion.div>
        </motion.div>

        <PipelineCard />
      </div>
    </section>
  );
}

function PipelineCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] as const }}
      className="relative overflow-hidden rounded-[20px] border border-line p-[22px] shadow-[0_30px_80px_rgba(0,0,0,.5)]"
      style={{ background: "linear-gradient(160deg,#111726,#0C1120)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(600px circle at 50% -10%,rgba(52,216,196,.10),transparent 60%)" }} />
      <div className="flex items-center justify-between font-mono text-[11.5px] text-lo mb-4 relative">
        <div className="flex gap-1.5">
          <i className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <i className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <i className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span>flight-order-engine · live</span>
      </div>

      <svg viewBox="0 0 420 300" className="w-full h-auto block" aria-hidden>
        <defs><filter id="soft"><feGaussianBlur stdDeviation="2.2" /></filter></defs>
        <path d="M60 60 H210 V150 V240 H360" fill="none" stroke="#2A3556" strokeWidth="1.5" />
        <path d="M210 150 H360 V60" fill="none" stroke="#2A3556" strokeWidth="1.5" />
        <circle r="4" fill="#34D8C4" filter="url(#soft)">
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M60 60 H210 V150 V240 H360" />
        </circle>
        <circle r="2.4" fill="#34D8C4">
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M60 60 H210 V150 V240 H360" />
        </circle>
        <g fontFamily="var(--font-mono), monospace" fontSize="10">
          <g transform="translate(20,42)"><rect width="80" height="36" rx="8" fill="#151C30" stroke="#2A3556" /><text x="40" y="16" fill="#AEB7CE" textAnchor="middle">POST</text><text x="40" y="28" fill="#7C86A0" textAnchor="middle">/orders</text></g>
          <g transform="translate(168,132)"><rect width="84" height="36" rx="8" fill="#151C30" stroke="#34D8C4" /><text x="42" y="16" fill="#E9EDF7" textAnchor="middle">Spring Boot</text><text x="42" y="28" fill="#34D8C4" textAnchor="middle">engine</text></g>
          <g transform="translate(320,42)"><rect width="82" height="36" rx="8" fill="#151C30" stroke="#2A3556" /><text x="41" y="16" fill="#AEB7CE" textAnchor="middle">MySQL</text><text x="41" y="28" fill="#7C86A0" textAnchor="middle">persist</text></g>
          <g transform="translate(320,222)"><rect width="82" height="36" rx="8" fill="#151C30" stroke="#34D8C4" /><text x="41" y="16" fill="#E9EDF7" textAnchor="middle">PNR</text><text x="41" y="28" fill="#34D8C4" textAnchor="middle">generated</text></g>
        </g>
      </svg>

      <div className="font-mono text-[11.5px] text-mid mt-3.5 flex justify-between border-t border-line pt-3">
        <span>req_id: a3f9-ptr</span>
        <span className="text-signal">200 OK · 42ms</span>
      </div>
    </motion.div>
  );
}
