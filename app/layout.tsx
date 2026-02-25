import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comfort Nyatsine — Senior Full Stack Developer",
  description:
    "Senior Full Stack Software Engineer with 7+ years of experience in .NET Core, Angular, Flutter, and AWS. Based in Johannesburg, South Africa.",
  keywords: [
    "Comfort Nyatsine",
    "Full Stack Developer",
    "Senior Developer",
    ".NET",
    "Angular",
    "Flutter",
    "Johannesburg",
    "South Africa",
  ],
  authors: [{ name: "Comfort Nyatsine" }],
  openGraph: {
    title: "Comfort Nyatsine — Senior Full Stack Developer",
    description:
      "Senior Full Stack Software Engineer building enterprise-grade applications with .NET Core, Angular, and Flutter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise">{children}</body>
    </html>
  );
}
