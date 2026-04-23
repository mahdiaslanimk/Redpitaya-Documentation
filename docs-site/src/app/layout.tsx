import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Red Pitaya Documentation",
    template: "%s | Red Pitaya Docs",
  },
  description:
    "Official Red Pitaya technical documentation — quick start guides, API references, FPGA development, and more.",
  keywords: [
    "Red Pitaya",
    "FPGA",
    "oscilloscope",
    "signal generator",
    "documentation",
    "STEMlab",
  ],
  authors: [{ name: "Red Pitaya d.o.o" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Red Pitaya Documentation",
    description: "Official Red Pitaya technical documentation",
    siteName: "Red Pitaya Docs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <div className="min-h-[calc(100vh-4rem)]">{children}</div>
        <footer className="border-t border-[var(--border)] bg-[var(--background)] py-8 mt-16">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-[var(--muted-foreground)]">
                © {new Date().getFullYear()} Red Pitaya d.o.o. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-[var(--muted-foreground)]">
                <a
                  href="https://redpitaya.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  Website
                </a>
                <a
                  href="https://github.com/RedPitaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://forum.redpitaya.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  Forum
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
