import Reveal from "./reveal";

export default function SectionHeading({
  eyebrow, title, lead, center = false,
}: { eyebrow: string; title: string; lead?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <span
        className={`font-mono text-xs uppercase tracking-[1px] text-signal inline-flex items-center gap-2 mb-4 ${
          center ? "justify-center" : ""
        } before:content-[''] before:w-5 before:h-px before:bg-signal/70`}
      >
        // {eyebrow}
      </span>
      <h2 className="font-disp font-semibold tracking-tight leading-[1.1] text-[clamp(28px,4vw,42px)] mb-4">
        {title}
      </h2>
      {lead && (
        <p className={`text-mid text-[16.5px] max-w-[620px] mb-11 ${center ? "mx-auto" : ""}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
