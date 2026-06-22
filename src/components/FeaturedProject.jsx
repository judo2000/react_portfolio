import { featured } from "../data/projects";
import Reveal from "./ui/Reveal";

const FeaturedProject = () => {
  return (
    <section id="matscout" className="section-pad scroll-mt-20">
      <Reveal className="flex items-center gap-3">
        <span className="eyebrow">// Flagship Project</span>
        <span className="h-px flex-1 max-w-24 bg-line" />
        <span className="font-mono text-xs text-muted">{featured.status}</span>
      </Reveal>

      <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
        {/* Visual */}
        <Reveal className="order-2 lg:order-1">
          <a
            href={featured.links.live}
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div className="panel overflow-hidden p-1.5 shadow-glow-sm transition-shadow duration-500 group-hover:shadow-glow">
              {/* browser chrome */}
              <div className="flex items-center gap-1.5 rounded-t-lg border-b border-line bg-surface-2/70 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="ml-3 truncate font-mono text-[10px] text-muted">
                  matscout.com
                </span>
              </div>
              <div className="overflow-hidden rounded-b-lg">
                <img
                  src={featured.image}
                  alt="MatScout platform screenshot"
                  loading="lazy"
                  className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </a>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <div className="flex items-baseline gap-3">
              <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                {featured.name}
              </h2>
              <span className="font-mono text-xs text-muted">{featured.year}</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-4 text-balance text-lg text-ink/90">{featured.summary}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 leading-relaxed text-muted">{featured.description}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {featured.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan shadow-glow-sm" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap gap-2">
              {featured.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={featured.links.live} target="_blank" rel="noreferrer" className="btn-primary">
                Visit matscout.com
                <span aria-hidden>↗</span>
              </a>
              <span className="font-mono text-xs text-muted">Repository private</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
