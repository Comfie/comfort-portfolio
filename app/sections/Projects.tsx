"use client";
import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "Ignacheck",
    tagline: "AI-Powered Compliance Audit Platform",
    description:
      "Leading a strategic rebuild of a Python MVP into an enterprise-grade SaaS platform for financial institutions. Features multi-tenant architecture with strict RBAC, an AI orchestration layer for automated gap analysis against ISO 27001 and SOC 2, and a secure document ingestion pipeline with PDF/DOCX parsing and OCR.",
    stack: [".NET 8", "Angular 17", "PostgreSQL", "OpenAI API", "AWS", "Multi-tenancy"],
    status: "In Development",
    highlight: true,
    links: { github: "https://github.com/comfie" },
  },
  {
    number: "02",
    name: "DominionDesk",
    tagline: "Property Management CRM",
    description:
      "A comprehensive CRM for property managers, streamlining tenant tracking, lease administration, and property oversight. Built with Next.js for SSR performance. Designed from personal experience with SA property market pain points around dual rental/Airbnb management and calendar sync.",
    stack: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
    status: "Personal Project",
    highlight: true,
    links: { github: "https://github.com/comfie", live: "https://dominiondesk.vercel.app" },
  },
  {
    number: "03",
    name: "Hello Doctor",
    tagline: "Healthcare Management System",
    description:
      "A comprehensive healthcare platform with a RESTful .NET Core API featuring role-based authentication and custom claims for healthcare providers. Includes a cross-platform Flutter mobile app with offline-first architecture and real-time push notifications, and a full Angular web dashboard.",
    stack: [".NET Core", "Angular 19", "Flutter", "Firebase", "SQL Server"],
    status: "Personal Project",
    highlight: false,
    links: { github: "https://github.com/comfie" },
  },
  {
    number: "04",
    name: "Water Quality Analysis (SANSA)",
    tagline: "GIS-Based Environmental Data Platform",
    description:
      "Built for the South African National Space Agency. Implements GIS-based data visualization with Esri ArcGIS Maps integration and GeoJSON layer management. Features multi-month temporal data analysis with advanced state management using RxJS observables.",
    stack: ["Angular 17+", "TypeScript", "Esri ArcGIS", "RxJS", "GeoJSON"],
    status: "Delivered",
    highlight: false,
    links: {},
  },
  {
    number: "05",
    name: "iRainbow Education Platform",
    tagline: "Offline Learning for Grades 0–7",
    description:
      "A full-stack educational platform designed for South African primary school learners with unreliable connectivity. Features offline-first PWA capabilities, teacher dashboards, and student progress tracking. Adopted by numerous learners across multiple schools.",
    stack: [".NET Core", "Angular", "PWA", "SQL Server", "Service Workers"],
    status: "Live",
    highlight: false,
    links: {},
  },
  {
    number: "06",
    name: "TRX BOM Upload Client",
    tagline: "Enterprise Bill of Materials Processing",
    description:
      "Built for procurement teams at Luna Software Solutions. Users upload CSV/Excel BOM files, the system queries the Mouser API for real-time product pricing and availability, calculates markups, generates PDF quotes, and dispatches them via email. Features real-time progress tracking via SignalR, JWT authentication, and an admin dashboard.",
    stack: [".NET 9", "SignalR", "JWT", "Mouser API", "SQL Server", "Angular"],
    status: "Live",
    highlight: false,
    links: {},
  },
];


const statusColor: Record<string, string> = {
  Live: "text-green-400 border-green-400/30 bg-green-400/5",
  "In Development": "text-accent border-accent/30 bg-accent/5",
  "Personal Project": "text-blue-400 border-blue-400/30 bg-blue-400/5",
  Delivered: "text-purple-400 border-purple-400/30 bg-purple-400/5",
};

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            04 / Projects
          </span>
          <span className="block flex-1 max-w-xs h-px bg-border" />
        </div>

        <div className="reveal mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2
            className="font-display"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}
          >
            Things I&apos;ve
            <span className="text-accent"> shipped.</span>
          </h2>
          <a
            href="https://github.com/comfie"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted hover:text-accent transition-colors flex items-center gap-2"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            github.com/comfie →
          </a>
        </div>

        {/* Featured project */}
        <div className="reveal mb-8">
          <div
            className="relative border border-accent/40 bg-surface p-8 md:p-12 group overflow-hidden cursor-none"
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
            data-hover
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 right-0 h-px bg-accent" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-mono text-xs text-accent/50" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {projects[0].number}
                  </span>
                  <span
                    className={`font-mono text-xs px-2.5 py-1 border ${statusColor[projects[0].status]}`}
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {projects[0].status}
                  </span>
                  <span className="font-mono text-xs text-accent/30 border border-accent/20 px-2 py-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    ★ Featured
                  </span>
                </div>
                <h3
                  className="font-display text-4xl font-800 text-text mb-1"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
                >
                  {projects[0].name}
                </h3>
                <p className="font-body text-muted text-lg">{projects[0].tagline}</p>
              </div>
            </div>

            <p className="font-body text-muted/80 leading-relaxed max-w-2xl mb-8">
              {projects[0].description}
            </p>

            <div className="flex flex-wrap gap-2">
              {projects[0].stack.map((s) => (
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

        {/* Grid projects */}
        <div className="stagger grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, i) => (
            <div
              key={project.number}
              className="relative border border-border bg-surface p-7 group hover:border-accent/40 transition-all duration-300 cursor-none overflow-hidden"
              onMouseEnter={() => setHovered(i + 1)}
              onMouseLeave={() => setHovered(null)}
              data-hover
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-muted/40" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {project.number}
                </span>
                <div className="flex items-center gap-2">
                  {project.highlight && (
                    <span className="font-mono text-xs text-accent/30 border border-accent/20 px-2 py-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      ★ Featured
                    </span>
                  )}
                  <span
                    className={`font-mono text-xs px-2 py-0.5 border ${statusColor[project.status]}`}
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {project.status}
                  </span>
                  {project.links.live && (
                    <span className="font-mono text-xs px-2 py-0.5 border text-green-400 border-green-400/30 bg-green-400/5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Live
                    </span>
                  )}
                </div>
              </div>

              <h3
                className="font-display text-xl font-700 text-text mb-1 group-hover:text-accent transition-colors"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
              >
                {project.name}
              </h3>
              <p className="font-body text-muted text-sm mb-4">{project.tagline}</p>
              <p className="font-body text-muted/70 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs text-text/40 bg-dim px-2 py-0.5"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {s}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="font-mono text-xs text-muted/40 px-2 py-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    +{project.stack.length - 4} more
                  </span>
                )}
              </div>
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-green-400 hover:text-green-300 transition-colors"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  ↗ View Live
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
