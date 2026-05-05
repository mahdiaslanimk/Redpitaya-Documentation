"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, NavItem } from "@/lib/navigation";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile sidebar toggle */}
      <button
        className="lg:hidden flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-4 -mt-2"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        Navigation
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-[var(--background)] shadow-xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-label="Navigation"
      >
        <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-4">
          <span className="font-semibold text-[var(--foreground)]">Documentation</span>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-1.5 text-[var(--muted-foreground)] hover:bg-[var(--muted)]"
            aria-label="Close navigation"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="overflow-y-auto p-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <MobileSidebarItem key={item.slug} item={item} depth={0} onClose={() => setOpen(false)} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

function MobileSidebarItem({
  item,
  depth,
  onClose,
}: {
  item: NavItem;
  depth: number;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const isActive = item.href ? pathname === item.href : false;
  const hasChildren = item.children && item.children.length > 0;

  const isChildActive = (navItem: NavItem): boolean => {
    if (navItem.href && pathname === navItem.href) return true;
    if (navItem.children) return navItem.children.some(isChildActive);
    return false;
  };

  const [open, setOpen] = useState(() => {
    if (!hasChildren) return false;
    return isChildActive(item);
  });

  if (hasChildren) {
    return (
      <li>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)]"
          aria-expanded={open}
        >
          <span>{item.title}</span>
          <svg
            className={`h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <ul className="mt-1 ml-3 space-y-1 border-l border-[var(--border)] pl-3">
            {item.children!.map((child) => (
              <MobileSidebarItem key={child.slug} item={child} depth={depth + 1} onClose={onClose} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href!}
        onClick={onClose}
        className={`flex items-center rounded-lg px-3 py-2 text-sm transition-colors ${
          isActive
            ? "bg-brand-50 font-medium text-brand-700 dark:bg-brand-950/50 dark:text-brand-400"
            : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {item.title}
      </Link>
    </li>
  );
}
