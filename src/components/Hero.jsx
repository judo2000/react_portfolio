import { motion } from "framer-motion";
import { profile } from "../data/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center pt-24">
      <div className="section-pad grid w-full items-center gap-14 py-0 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: the pitch */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Available for new projects
            </span>
          </motion.div>

          <motion.p variants={item} className="eyebrow mb-4">
            // Full-Stack Developer · {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            Stephen Scott<br />
            <span className="gradient-text">Moore</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-balance text-lg text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#matscout" className="btn-primary">
              View MatScout
              <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-5">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent-cyan"
              >
                {s.label} ↗
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: the scouting dossier */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="panel relative overflow-hidden p-1.5 shadow-glow-sm">
            {/* scan line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 animate-scan bg-gradient-to-b from-accent-cyan/20 to-transparent" />

            {/* dossier header */}
            <div className="flex items-center justify-between rounded-t-lg border-b border-line bg-surface-2/70 px-4 py-2.5">
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
                Profile
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent-cyan">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent-cyan" />
                Denver, CO
              </span>
            </div>

            <div className="grid gap-4 p-4 sm:grid-cols-[auto_1fr]">
              <div className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-lg border border-line sm:h-full sm:w-28">
                <img
                  src={profile.profileImage}
                  alt="Stephen Scott Moore"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent" />
              </div>

              <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line">
                {profile.stats.map((s) => (
                  <div key={s.label} className="bg-surface px-3.5 py-2.5">
                    <dt className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
                      {s.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* corner ticks */}
          <span className="absolute -left-1.5 -top-1.5 h-3 w-3 border-l border-t border-accent-cyan/60" />
          <span className="absolute -right-1.5 -bottom-1.5 h-3 w-3 border-b border-r border-accent-cyan/60" />
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit md:block">
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

export default Hero;
