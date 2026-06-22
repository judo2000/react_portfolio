import { useEffect, useRef } from "react";

/**
 * The site's signature: a fixed tactical grid with a cyan glow that
 * tracks the cursor — like a scouting HUD scanning the surface.
 * Falls back to a static centered glow when motion is reduced.
 */
const GridBackground = () => {
  const glowRef = useRef(null);
  const frame = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;

    const el = glowRef.current;
    if (!el) return;

    const onMove = (e) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base"
    >
      {/* panning hairline grid */}
      <div className="absolute inset-0 bg-grid opacity-70" />

      {/* cursor-tracking glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          "--mx": "50%",
          "--my": "20%",
          background:
            "radial-gradient(28rem 28rem at var(--mx) var(--my), rgba(34,211,238,0.10), transparent 70%)",
        }}
      />

      {/* ambient corner blooms */}
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent-blue/10 blur-3xl" />
      <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-accent-cyan/10 blur-3xl" />

      {/* vignette to keep edges grounded */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_55%,#07080d_100%)]" />
    </div>
  );
};

export default GridBackground;
