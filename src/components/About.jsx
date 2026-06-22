import { profile } from "../data/profile";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const facts = [
  { k: "Location", v: profile.location },
  { k: "Focus", v: "Web & mobile platforms" },
  { k: "Education", v: "Full-Stack Cert, Univ. of Denver" },
  { k: "Judo Rank", v: "6th-degree black belt (Rokudan)" },
  { k: "Coaching", v: "Head Coach, USA Paralympic Judo Team" },
  { k: "Club", v: "Head Coach, Denver Judo" },
];

const About = () => {
  return (
    <section id="about" className="section-pad scroll-mt-20">
      <SectionHeading eyebrow="// About" title="Engineer's precision, champion's discipline" index={1} total={5} />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-balance leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="panel p-1.5">
            <div className="border-b border-line px-4 py-2.5">
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
                Quick Facts
              </span>
            </div>
            <dl className="divide-y divide-line">
              {facts.map((f) => (
                <div key={f.k} className="flex items-baseline justify-between gap-4 px-4 py-3">
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted">{f.k}</dt>
                  <dd className="text-right text-sm font-medium text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
