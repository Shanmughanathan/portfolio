export default function Footer() {
  return (
    <footer className="border-t border-line py-[30px] bg-ink-2 relative z-[2]">
      <div className="max-w-content mx-auto px-6 flex justify-between items-center font-mono text-[12.5px] text-lo flex-wrap gap-3">
        <span>© 2026 Shanmughanathan M · Backend SDE</span>
        <span className="text-signal">designed &amp; built · deployed on Vercel · ₹0</span>
      </div>
    </footer>
  );
}
