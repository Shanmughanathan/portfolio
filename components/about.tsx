import Reveal from "./ui/reveal";
import SectionHeading from "./ui/section-heading";
import { about, profileCard } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-[110px] relative z-[2]">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading eyebrow="about" title="Backend by craft, production by instinct." />
        <div className="grid lg:grid-cols-[1.3fr_.7fr] gap-12 items-start">
          <Reveal>
            <div className="space-y-[18px]">
              {about.map((p, i) => (
                <p key={i} className="text-mid text-[16.5px]">{p}</p>
              ))}
              <p className="text-lo text-sm italic">Currently an Associate at Cognizant, based in Kochi.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-surface border border-line rounded-2xl p-6">
              <div className="flex justify-center mb-5">
                <img
                  src="/me.png"
                  alt="Shanmughanathan M"
                  width={112}
                  height={112}
                  className="w-28 h-28 rounded-full object-cover border-2 border-signal/40 shadow-[0_8px_30px_rgba(0,0,0,.45)]"
                />
              </div>
              <h4 className="font-mono text-xs text-signal uppercase tracking-[.5px] mb-4">// profile</h4>
              {profileCard.map((r) => (
                <div key={r.k} className="flex justify-between text-sm py-2.5 border-b border-line last:border-0">
                  <span className="text-lo font-mono text-[12.5px]">{r.k}</span>
                  <b className={`font-medium ${r.highlight ? "text-signal" : "text-hi"}`}>{r.v}</b>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
