const experiences = [
  {
    role: "Full Stack Software Developer",
    company: "Luna Software Solutions",
    period: "Aug 2020 — Present",
    type: "Full-time",
    highlights: [
      "Maintained and enhanced TRX Backoffice — a complex enterprise system integrating with Sage Pastel accounting, supporting daily operations for multiple clients.",
      "Developed TRX BOM Upload Web Client (.NET 9) with Mouser API integration, JWT authentication, and SignalR real-time progress updates for procurement teams.",
      "Built and deployed a computing power rental web app with PayFast payment integration, increasing client sales by 10%.",
      "Migrated enterprise application from .NET Framework to .NET Core, improving scalability and deployment efficiency.",
      "Managed AWS deployments: S3, Elastic Beanstalk, CloudFormation, Lambda functions.",
      "Improved database performance by 25% through query optimization and indexing strategies.",
      "Developed full-stack iRainbow educational platform for Grades 0–7 with offline capabilities across multiple schools.",
      "Mentored junior developers and led Angular candidate technical assessments.",
    ],
    stack: [".NET 9", "Angular", "SignalR", "AWS", "SQL Server", "Sage Pastel"],
  },
  {
    role: "Software Developer",
    company: "SB Software",
    period: "Feb 2020 — Jul 2020",
    type: "Full-time",
    highlights: [
      "Developed customer portal that reduced authentication issues and call centre complaints by 80%.",
      "Integrated PayFast payment gateway and Firebase databases into backend services.",
      "Engineered web service clients and endpoints for seamless third-party integrations.",
    ],
    stack: [".NET", "Firebase", "PayFast", "RESTful APIs"],
  },
  {
    role: "Junior Software Developer",
    company: "SpectrumITS",
    period: "Jan 2018 — Jan 2020",
    type: "Full-time",
    highlights: [
      "Developed and maintained applications using C#, .NET Framework, and ASP.NET.",
      "Managed SQL Server 2014 databases, optimizing queries and performing CRUD operations.",
      "Conducted system maintenance, testing, and end-user training sessions.",
    ],
    stack: ["C#", ".NET Framework", "ASP.NET", "SQL Server"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="orb w-72 h-72 bg-accent/4 bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            03 / Experience
          </span>
          <span className="block flex-1 max-w-xs h-px bg-border" />
        </div>

        <div className="reveal mb-16">
          <h2
            className="font-display"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}
          >
            7 years of
            <span className="text-accent"> building.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-56 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div key={i} className="reveal relative grid grid-cols-1 md:grid-cols-[224px_1fr] gap-8">
                {/* Date/company block */}
                <div className="md:pr-10 md:text-right">
                  <div
                    className="font-display font-700 text-text mb-1 text-lg"
                    style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                  >
                    {exp.company}
                  </div>
                  <div className="font-mono text-xs text-muted tracking-wide" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {exp.period}
                  </div>
                  <div className="font-mono text-xs text-accent/60 tracking-wide mt-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {exp.type}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[224px] top-1.5 -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-accent border-2 border-bg" />
                </div>

                {/* Content */}
                <div className="md:pl-10">
                  <div className="mb-4">
                    <span
                      className="font-display font-700 text-accent text-xl"
                      style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                    >
                      {exp.role}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-muted font-body text-sm leading-relaxed">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-xs text-accent/70 border border-accent/20 bg-accent/5 px-2.5 py-1"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
