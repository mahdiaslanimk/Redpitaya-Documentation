"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { flattenNavigation, navigation } from "@/lib/navigation";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const allDocs = flattenNavigation(navigation);

  const results = query.trim()
    ? allDocs.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.slug?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
      }
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 pt-16 sm:pt-24"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search documentation"
    >
      <div
        className="w-full max-w-xl rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
          <svg
            className="h-5 w-5 shrink-0 text-[var(--muted-foreground)]"
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
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent text-[var(--foreground)] placeholder-[var(--muted-foreground)] outline-none text-sm"
          />
          <button
            onClick={onClose}
            className="rounded px-2 py-1 text-xs text-[var(--muted-foreground)] hover:bg-[var(--muted)]"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {query && results.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-[var(--muted-foreground)]">
              No results found for &quot;{query}&quot;
            </p>
          )}

          {!query && (
            <div className="px-4 py-6">
              <p className="text-center text-sm text-[var(--muted-foreground)]">
                Type to search the documentation...
              </p>
            </div>
          )}

          {results.length > 0 && (
            <ul className="py-2">
              {results.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.href!}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-[var(--muted)] transition-colors"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-[var(--muted-foreground)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="font-medium text-[var(--foreground)]">
                      {item.title}
                    </span>
                    <span className="ml-auto text-xs text-[var(--muted-foreground)]">
                      {item.slug}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
