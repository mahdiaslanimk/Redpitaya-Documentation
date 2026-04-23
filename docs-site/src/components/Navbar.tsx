"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-white"
                aria-hidden="true"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-[var(--foreground)]">
              Red Pitaya
            </span>
            <span className="hidden sm:inline text-sm text-[var(--muted-foreground)] font-normal">
              Docs
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/docs/intro" active={pathname?.startsWith("/docs")}>
              Documentation
            </NavLink>
            <NavLink
              href="https://redpitaya.com"
              active={false}
              external
            >
              Website
            </NavLink>
            <NavLink
              href="https://github.com/RedPitaya"
              active={false}
              external
            >
              GitHub
            </NavLink>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--muted)] px-3 py-1.5 text-sm text-[var(--muted-foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Search documentation"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-[var(--border)] px-1.5 font-mono text-[10px] font-medium text-[var(--muted-foreground)]">
                ⌘K
              </kbd>
            </button>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-lg p-2 text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 py-3">
            <nav className="flex flex-col gap-1">
              <MobileNavLink href="/docs/intro" onClick={() => setMobileMenuOpen(false)}>
                Documentation
              </MobileNavLink>
              <MobileNavLink href="https://redpitaya.com" onClick={() => setMobileMenuOpen(false)}>
                Website
              </MobileNavLink>
              <MobileNavLink href="https://github.com/RedPitaya" onClick={() => setMobileMenuOpen(false)}>
                GitHub
              </MobileNavLink>
            </nav>
          </div>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function NavLink({
  href,
  active,
  children,
  external,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-400"
          : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
      }`}
    >
      {children}
      {external && (
        <svg
          className="ml-1 inline h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)]"
    >
      {children}
    </Link>
  );
}
