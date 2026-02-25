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
            <a
              href="https://wa.me/27849192581"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border border-green-500 text-green-400 px-8 py-5 font-display text-base hover:bg-green-500 hover:text-white transition-all duration-300"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 500 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
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
                value: "linkedin.com/in/comfort-nyatsine",
                href: "https://www.linkedin.com/in/comfort-nyatsine/",
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
