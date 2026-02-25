const stackGroups = [
  {
    label: "Languages",
    items: ["C#", "TypeScript", "Python", "Java", "Dart", "JavaScript"],
  },
  {
    label: "Frontend",
    items: ["Angular 16+", "React", "Next.js", "Flutter", "Tailwind CSS", "NgRx / RxJS"],
  },
  {
    label: "Backend & APIs",
    items: [".NET Core", "ASP.NET", "NestJS", "Node.js", "JWT / OAuth", "SignalR", "Microservices"],
  },
  {
    label: "Databases",
    items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS (S3, EB, Lambda)", "Azure", "Docker", "CI/CD", "Git", "CloudFormation"],
  },
  {
    label: "Specialized",
    items: ["OpenAI API", "Esri ArcGIS", "PayFast / Payment Gateways", "Multi-tenancy", "Unit Testing", "Sage Pastel"],
  },
];

const marqueeItems = [
  ".NET Core", "Angular", "Flutter", "AWS", "TypeScript", "PostgreSQL",
  "Docker", "React", "Next.js", "C#", "Firebase", "SignalR", "NestJS",
  "OpenAI API", "Esri ArcGIS", "JWT", "CI/CD", "SQL Server",
];

export default function TechStack() {
  return (
    <section id="stack" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            02 / Tech Stack
          </span>
          <span className="block flex-1 max-w-xs h-px bg-border" />
        </div>

        <div className="reveal mb-12">
          <h2
            className="font-display"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}
          >
            Tools of the trade.
          </h2>
        </div>

        {/* Groups */}
        <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackGroups.map((group) => (
            <div
              key={group.label}
              className="bg-surface border border-border p-6 group hover:border-accent/50 transition-colors duration-300"
            >
              <div
                className="font-mono text-xs text-accent tracking-widest uppercase mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-body text-xs text-text/70 bg-dim px-2.5 py-1 hover:text-accent hover:bg-accent-soft transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-20 border-y border-border py-5 overflow-hidden">
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-6 mx-6">
              <span
                className="font-display text-sm font-600 text-muted/60 whitespace-nowrap"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
              >
                {item}
              </span>
              <span className="text-accent/30">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
