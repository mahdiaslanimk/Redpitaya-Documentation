"use client";

import { useEffect, useState } from "react";
import { type TocItem } from "@/lib/toc";

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0 }
    );

    const headingElements = document.querySelectorAll("h1, h2, h3");
    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      className="hidden xl:block sticky top-24 w-56 shrink-0 self-start"
      aria-label="Table of contents"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
        On this page
      </p>
      <ul className="space-y-1 text-sm">
        {items.map((item) => (
          <TocItem key={item.id} item={item} activeId={activeId} />
        ))}
      </ul>
    </nav>
  );
}

function TocItem({
  item,
  activeId,
}: {
  item: TocItem;
  activeId: string;
}) {
  const isActive = activeId === item.id;
  const indent = item.level === 2 ? "" : item.level === 3 ? "ml-3" : "ml-6";

  return (
    <li className={indent}>
      <a
        href={`#${item.id}`}
        className={`block rounded py-1 px-2 text-sm transition-colors ${
          isActive
            ? "font-medium text-brand-600 dark:text-brand-400"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        }`}
        aria-current={isActive ? "true" : undefined}
      >
        {item.title}
      </a>
    </li>
  );
}
