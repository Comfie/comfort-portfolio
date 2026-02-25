export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="orb w-96 h-96 bg-accent/6 top-0 right-0" />
      <div className="orb w-64 h-64 bg-accent/4 bottom-0 left-1/4" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            05 / Contact
          </span>
          <span className="block flex-1 max-w-xs h-px bg-border" />
        </div>

        {/* Big CTA */}
        <div className="reveal text-center py-20">
          <p
            className="font-mono text-xs text-accent tracking-widest uppercase mb-6"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Let&apos;s work together
          </p>

          <h2
            className="font-display mb-8"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 7vw, 96px)', lineHeight: 1.0 }}
          >
            Have a project
            <br />
            <span className="text-accent">in mind?</span>
          </h2>

          <p className="font-body text-muted text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            I&apos;m open to senior developer roles, freelance projects, and consulting
            opportunities. Let&apos;s build something great together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:comfynyatsine@gmail.com"
              className="group flex items-center gap-3 bg-accent text-bg px-8 py-5 font-display font-700 text-base hover:bg-text transition-all duration-300"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
            >
              Send me an email
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href="tel:+27849192581"
              className="flex items-center gap-3 border border-border text-text px-8 py-5 font-display text-base hover:border-accent hover:text-accent transition-all duration-300"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 500 }}
            >
              +27 84 919 2581
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="reveal pt-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Email",
                value: "comfynyatsine@gmail.com",
                href: "mailto:comfynyatsine@gmail.com",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/comfortnyatsine",
                href: "https://linkedin.com/in/comfortnyatsine",
              },
              {
                label: "GitHub",
                value: "github.com/comfie",
                href: "https://github.com/comfie",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 p-6 bg-surface border border-border hover:border-accent/50 transition-colors duration-300"
              >
                <span
                  className="font-mono text-xs text-muted/60 uppercase tracking-widest"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {link.label}
                </span>
                <span className="font-body text-text/80 group-hover:text-accent transition-colors">
                  {link.value}
                </span>
                <span className="font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity mt-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Open →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
