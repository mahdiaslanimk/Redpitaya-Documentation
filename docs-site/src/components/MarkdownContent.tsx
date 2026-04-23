"use client";

import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import CopyButton from "./CopyButton";

interface MarkdownContentProps {
  html: string;
  className?: string;
}

export default function MarkdownContent({ html, className }: MarkdownContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preElements = Array.from(container.querySelectorAll("pre"));
    const roots: ReturnType<typeof createRoot>[] = [];

    preElements.forEach((pre) => {
      const codeEl = pre.querySelector("code");
      const code = codeEl?.innerText ?? codeEl?.textContent ?? "";

      // Make the pre element a positioning context for the button
      pre.style.position = "relative";

      const btnContainer = document.createElement("div");
      pre.appendChild(btnContainer);

      const root = createRoot(btnContainer);
      root.render(<CopyButton code={code} />);
      roots.push(root);
    });

    return () => {
      roots.forEach((r) => {
        try {
          r.unmount();
        } catch {
          // ignore unmount errors during fast refresh
        }
      });
    };
  }, [html]);

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
