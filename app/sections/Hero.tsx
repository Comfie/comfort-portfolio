"use client";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Full Stack Engineer",
  ".NET Architect",
  "Angular Specialist",
  "Flutter Developer",
  "Cloud Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-accent/8 top-20 -left-32" />
      <div className="orb w-80 h-80 bg-accent/5 bottom-20 right-10" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,53,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 w-full">
        {/* Label */}
        <div
          className="flex items-center gap-3 mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.1s",
          }}
        >
          <span className="block w-8 h-px bg-accent" />
          <span
            className="font-mono text-xs text-accent tracking-widest uppercase"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Available for opportunities
          </span>
          <span className="block w-2 h-2 rounded-full bg-accent animate-pulse" />
        </div>

        {/* Main heading */}
        <h1
          className="font-display mb-2"
          style={{
            fontFamily: "Syne, sans-serif",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          <span
            className="block text-text"
            style={{ fontSize: "clamp(52px, 9vw, 130px)", lineHeight: "0.95", fontWeight: 800 }}
          >
            Comfort
          </span>
          <span
            className="block"
            style={{
              fontSize: "clamp(52px, 9vw, 130px)",
              lineHeight: "0.95",
              fontWeight: 800,
              WebkitTextStroke: "1px rgba(242,237,228,0.25)",
              color: "transparent",
            }}
          >
            Nyatsine
          </span>
        </h1>

        {/* Typewriter role */}
        <div
          className="mt-8 mb-10 flex items-center gap-3"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.4s",
          }}
        >
          <span
            className="font-mono text-accent text-sm tracking-wider"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            &gt;_
          </span>
          <span
            className="font-display text-2xl md:text-3xl text-text/80"
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 500, minWidth: "280px" }}
          >
            {displayText}
            <span className="inline-block w-0.5 h-7 bg-accent ml-1 animate-pulse" />
          </span>
        </div>

        {/* Bio snippet */}
        <p
          className="font-body text-muted text-lg max-w-xl leading-relaxed mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.5s",
          }}
        >
          7 years engineering enterprise systems across fintech, healthcare, and proptech.
          Based in <span className="text-text">Johannesburg</span>, building with{" "}
          <span className="text-text">.NET Core</span>,{" "}
          <span className="text-text">Angular</span> &{" "}
          <span className="text-text">Flutter</span>.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.6s",
          }}
        >
          <a
            href="#projects"
            className="group flex items-center gap-3 bg-accent text-bg px-7 py-4 font-display font-700 text-sm tracking-wide hover:bg-text transition-all duration-300"
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
          >
            View My Work
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a
            href="https://linkedin.com/in/comfortnyatsine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-border text-text px-7 py-4 font-display text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 500 }}
          >
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/comfie"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-border text-text px-7 py-4 font-display text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 500 }}
          >
            GitHub
          </a>
          <a
            href="/Comfort_Nyatsine_CV.pdf"
            download
            className="group flex items-center gap-3 border border-accent text-accent px-7 py-4 font-display text-sm tracking-wide hover:bg-accent hover:text-bg transition-all duration-300"
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 500 }}
          >
            Download CV
            <span className="group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
          </a>
        </div>

        {/* Stats row */}
        <div
          className="mt-20 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.8s ease 0.8s",
          }}
        >
          {[
            { value: "7+", label: "Years Experience" },
            { value: "95%", label: "On-Time Delivery" },
            { value: "25%", label: "DB Performance Gain" },
            { value: "4+", label: "Live SaaS Projects" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div
                className="font-display text-4xl md:text-5xl font-800 text-accent mb-1 group-hover:scale-110 transition-transform origin-left"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}
              >
                {stat.value}
              </div>
              <div className="font-body text-xs text-muted uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-muted tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted/50 to-transparent" />
      </div>
    </section>
  );
}
