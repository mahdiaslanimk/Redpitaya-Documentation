"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, NavItem } from "@/lib/navigation";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin py-6 pr-4">
        <nav aria-label="Documentation navigation">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <SidebarItem key={item.slug} item={item} depth={0} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

function SidebarItem({ item, depth }: { item: NavItem; depth: number }) {
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
          className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            depth === 0
              ? "text-[var(--foreground)] hover:bg-[var(--muted)]"
              : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
          aria-expanded={open}
        >
          <span>{item.title}</span>
          <svg
            className={`h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {open && (
          <ul className="mt-1 ml-3 space-y-1 border-l border-[var(--border)] pl-3">
            {item.children!.map((child) => (
              <SidebarItem key={child.slug} item={child} depth={depth + 1} />
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
        className={`flex items-center rounded-lg px-3 py-2 text-sm transition-colors ${
          isActive
            ? "bg-brand-50 font-medium text-brand-700 dark:bg-brand-950/50 dark:text-brand-400"
            : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {item.title}
        {item.badge && (
          <span className="ml-auto rounded-full bg-brand-100 px-1.5 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-900 dark:text-brand-300">
            {item.badge}
          </span>
        )}
      </Link>
    </li>
  );
}
