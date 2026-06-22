import { profile } from "../data/profile";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-accent-cyan/40 bg-surface font-display text-xs font-bold text-accent-cyan">
            SM
          </span>
          <span className="font-mono text-xs text-muted">
            © {year} {profile.name}
          </span>
        </div>

        <div className="flex items-center gap-5">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent-cyan"
            >
              {s.label}
            </a>
          ))}
        </div>

        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
          Built with React · Vite · Tailwind
        </span>
      </div>
    </footer>
  );
};

export default Footer;
