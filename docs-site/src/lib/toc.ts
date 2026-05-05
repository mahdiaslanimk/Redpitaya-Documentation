export interface TocItem {
  id: string;
  title: string;
  level: number;
  children?: TocItem[];
}

export function extractTableOfContents(content: string): TocItem[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].replace(/\*\*/g, "").replace(/`/g, "").trim();
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    if (level <= 3) {
      headings.push({ id, title, level });
    }
  }

  return headings;
}
