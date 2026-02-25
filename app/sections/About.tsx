export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="orb w-64 h-64 bg-accent/5 top-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            01 / About
          </span>
          <span className="block flex-1 max-w-xs h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="reveal">
            <h2
              className="font-display mb-8"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05 }}
            >
              Engineering
              <span className="block text-accent">solutions</span>
              that scale.
            </h2>

            <div className="space-y-5 text-muted leading-relaxed font-body">
              <p>
                I'm a results-driven Senior Full Stack Software Engineer based in Johannesburg, South Africa,
                with over 7 years of experience designing and delivering enterprise-grade web applications
                across <span className="text-text">fintech, banking, healthcare, and property technology</span> sectors.
              </p>
              <p>
                My work spans the full spectrum — from architecting multi-tenant SaaS backends with strict
                RBAC, to building real-time systems with SignalR, to deploying scalable cloud infrastructure
                on AWS. I care deeply about clean architecture and measurable outcomes.
              </p>
              <p>
                Currently at{" "}
                <span className="text-text font-medium">Luna Software Solutions</span>, I also build personal
                projects at the intersection of AI, healthcare, and compliance automation — including
                Ignacheck, an AI-powered compliance audit platform for financial institutions.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Johannesburg, ZA", "AWS Cloud Practitioner", "Open to Remote"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-accent border border-accent/30 bg-accent/5 px-3 py-1.5 tracking-wide"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="reveal">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-accent/40" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-accent/40" />

              <div className="bg-surface border border-border p-8 space-y-6">
                <div
                  className="font-display text-5xl font-800 text-bg w-16 h-16 flex items-center justify-center bg-accent"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
                >
                  CN
                </div>

                <div>
                  <div className="font-display text-xl font-700 text-text mb-1" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                    Comfort Nyatsine
                  </div>
                  <div className="font-body text-sm text-muted">Senior Full Stack Developer</div>
                </div>

                <div className="space-y-3 pt-2 border-t border-border">
                  {[
                    { label: "Location", value: "Johannesburg, South Africa" },
                    { label: "Email", value: "comfynyatsine@gmail.com" },
                    { label: "Phone", value: "+27 84 919 2581" },
                    { label: "Education", value: "BSc Hons — Computer Information Systems" },
                    { label: "Graduated", value: "Midlands State University, 2017" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col">
                      <span className="font-mono text-xs text-muted/60 uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {item.label}
                      </span>
                      <span className="font-body text-sm text-text/80">{item.value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:comfynyatsine@gmail.com"
                  className="flex items-center justify-center gap-2 w-full bg-accent text-bg py-3 font-display text-sm font-700 hover:bg-text transition-colors"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                >
                  Get In Touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
