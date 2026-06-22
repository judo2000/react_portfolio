import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile, emailjsConfig } from "../data/profile";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const sending = status.state === "sending";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setStatus({ state: "sending", message: "" });

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus({
        state: "success",
        message: "Message sent. Thanks — I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (err) {
      setStatus({
        state: "error",
        message: "Something went wrong. Please email me directly instead.",
      });
    }
  };

  return (
    <section id="contact" className="section-pad scroll-mt-20">
      <SectionHeading eyebrow="// Contact" title="Let's build something" index={5} total={5}>
        Have a project, a role, or a question? Send a message or reach me directly.
      </SectionHeading>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        {/* Form */}
        <Reveal>
          <form ref={formRef} onSubmit={handleSubmit} className="panel space-y-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" type="text" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <Field label="Subject" name="subject" type="text" placeholder="What's this about?" />
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me a bit about it…"
                className="w-full resize-y rounded-md border border-line bg-surface-2/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/80 focus:border-accent-cyan/60 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button type="submit" disabled={sending} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
                {sending ? "Sending…" : "Send message"}
                {!sending && <span aria-hidden>→</span>}
              </button>
              {status.message && (
                <p
                  role="status"
                  className={`font-mono text-xs ${
                    status.state === "success" ? "text-accent-cyan" : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </Reveal>

        {/* Direct info */}
        <Reveal delay={0.1}>
          <div className="panel flex h-full flex-col p-6">
            <span className="font-mono text-xs uppercase tracking-wider text-muted">Reach me directly</span>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 break-all font-display text-xl text-ink transition-colors hover:text-accent-cyan"
            >
              {profile.email}
            </a>

            <div className="mt-8 border-t border-line pt-6">
              <span className="font-mono text-xs uppercase tracking-wider text-muted">Find me online</span>
              <div className="mt-3 flex flex-col gap-3">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-md border border-line bg-surface-2/50 px-4 py-3 transition-colors hover:border-accent-cyan/40"
                  >
                    <span className="font-mono text-sm text-ink">{s.label}</span>
                    <span className="font-mono text-xs text-muted">@{s.handle} ↗</span>
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-auto pt-8 font-mono text-xs text-muted">
              Based in {profile.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const Field = ({ label, name, type, placeholder, required }) => (
  <div>
    <label htmlFor={name} className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full rounded-md border border-line bg-surface-2/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/80 focus:border-accent-cyan/60 focus:outline-none"
    />
  </div>
);

export default Contact;
