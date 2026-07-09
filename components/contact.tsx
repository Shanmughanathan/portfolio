"use client";
import { Github, Mail, Phone } from "lucide-react";
import Reveal from "./ui/reveal";
import Magnetic from "./ui/magnetic";
import SectionHeading from "./ui/section-heading";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-[110px] relative z-[2] text-center">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          center
          eyebrow="get in touch"
          title="Let's build something dependable."
          lead="Open to backend and full-stack engineering roles. The fastest way to reach me is email."
        />
        <Reveal>
          <div className="max-w-[720px] mx-auto rounded-[22px] border border-line p-[44px_32px] relative overflow-hidden" style={{ background: "linear-gradient(160deg,#111726,#0C1120)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(500px circle at 50% 0%,rgba(52,216,196,.10),transparent 60%)" }} />
            <Magnetic>
              <a href={`mailto:${profile.email}`} className="font-disp text-[clamp(20px,3.2vw,30px)] text-hi hover:text-signal border-b border-transparent hover:border-signal transition-colors inline-block mb-[26px]">
                {profile.email}
              </a>
            </Magnetic>
            <div className="flex gap-3.5 flex-wrap justify-center relative">
              <Magnetic>
                <a href={`mailto:${profile.email}`} className="font-mono text-[13.5px] font-semibold bg-signal text-ink px-5 py-3.5 rounded-xl inline-flex items-center gap-2.5 hover:shadow-[0_10px_34px_rgba(52,216,196,.35)] transition-shadow">
                  <Mail size={15} /> Email me
                </a>
              </Magnetic>
              <Magnetic>
                <a href={`tel:${profile.phoneHref}`} className="font-mono text-[13.5px] font-semibold bg-surface text-hi border border-line-2 px-5 py-3.5 rounded-xl inline-flex items-center gap-2.5 hover:border-signal hover:text-signal transition-colors">
                  <Phone size={15} /> {profile.phone}
                </a>
              </Magnetic>
              <Magnetic>
                <a href={profile.github} target="_blank" rel="noreferrer" className="font-mono text-[13.5px] font-semibold bg-surface text-hi border border-line-2 px-5 py-3.5 rounded-xl inline-flex items-center gap-2.5 hover:border-signal hover:text-signal transition-colors">
                  <Github size={15} /> GitHub
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
