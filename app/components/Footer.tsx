export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="font-display font-800 text-text"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
          >
            CN
          </span>
          <span className="text-accent font-display font-800" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>.</span>
          <span className="font-body text-xs text-muted ml-2">
            Comfort Nyatsine — Senior Full Stack Developer
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/comfie"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-accent transition-colors"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/comfortnyatsine"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-accent transition-colors"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:comfynyatsine@gmail.com"
            className="font-mono text-xs text-muted hover:text-accent transition-colors"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Email
          </a>
        </div>

        <div
          className="font-mono text-xs text-muted/50"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          © {new Date().getFullYear()} — Built with Next.js
        </div>
      </div>
    </footer>
  );
}
