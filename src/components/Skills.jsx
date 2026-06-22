import { profile } from "../data/profile";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const Skills = () => {
  return (
    <section id="skills" className="section-pad scroll-mt-20">
      <SectionHeading eyebrow="// Toolkit" title="What I build with" index={4} total={5} />

      <div className="grid gap-6 md:grid-cols-3">
        {profile.skills.map((cat, i) => (
          <Reveal key={cat.group} delay={i * 0.08}>
            <div className="panel h-full p-5">
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-xs text-accent-cyan">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-lg font-semibold text-ink">{cat.group}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <li key={s} className="chip text-muted">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
