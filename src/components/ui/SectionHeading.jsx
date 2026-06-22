import Reveal from "./Reveal";

/**
 * Section header with a mono eyebrow and a section index (e.g. "02 / 05").
 * The index encodes real position in the page sequence — it's a map marker,
 * not decoration.
 */
const SectionHeading = ({ eyebrow, title, index, total, children }) => {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal className="flex items-center gap-3">
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px flex-1 max-w-24 bg-line" />
        {index != null && total != null && (
          <span className="font-mono text-xs text-muted">
            {String(index).padStart(2, "0")}{" "}
            <span className="text-muted/70">/ {String(total).padStart(2, "0")}</span>
          </span>
        )}
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {children && (
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-balance text-muted">{children}</p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
