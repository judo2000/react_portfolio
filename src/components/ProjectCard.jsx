const ProjectCard = ({ project }) => {
  const { name, blurb, stack, image, links } = project;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface/50 transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/40 hover:shadow-glow-sm">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
        <img
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top opacity-90 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent-cyan">
          {name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{blurb}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {stack.map((t) => (
            <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:text-accent-cyan"
            >
              Live ↗
            </a>
          )}
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent-cyan"
            >
              Code ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
