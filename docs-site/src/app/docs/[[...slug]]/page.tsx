import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumb from "@/components/Breadcrumb";
import { extractTableOfContents } from "@/lib/toc";
import { navigation, NavItem } from "@/lib/navigation";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

const CONTENT_DIR = path.join(process.cwd(), "src/content/docs");

async function getDocContent(slug: string[]) {
  const filePath = path.join(CONTENT_DIR, ...slug) + ".md";
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(raw);
    return { frontmatter: data, content };
  } catch {
    return null;
  }
}

function buildBreadcrumbs(slugParts: string[]) {
  const crumbs: { label: string; href?: string }[] = [
    { label: "Docs", href: "/docs/intro" },
  ];

  const findInNav = (items: NavItem[], slug: string): NavItem | null => {
    for (const item of items) {
      if (item.slug === slug) return item;
      if (item.children) {
        const found = findInNav(item.children, slug);
        if (found) return found;
      }
    }
    return null;
  };

  for (let i = 0; i < slugParts.length; i++) {
    const partialSlug = slugParts.slice(0, i + 1).join("/");
    const navItem = findInNav(navigation, partialSlug);
    if (navItem) {
      crumbs.push({
        label: navItem.title,
        href: i < slugParts.length - 1 ? navItem.href : undefined,
      });
    } else {
      crumbs.push({
        label: slugParts[i]
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" "),
      });
    }
  }

  return crumbs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugParts = slug ?? ["intro"];
  const doc = await getDocContent(slugParts);
  if (!doc) return { title: "Not Found" };
  return {
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
  };
}

export default async function DocsPage({ params }: PageProps) {
  const { slug } = await params;
  const slugParts = slug ?? ["intro"];
  const doc = await getDocContent(slugParts);

  if (!doc) {
    notFound();
  }

  const { content } = doc;
  const toc = extractTableOfContents(content);
  const breadcrumbs = buildBreadcrumbs(slugParts);

  return (
    <div className="flex gap-8">
      {/* Main content */}
      <article className="min-w-0 flex-1">
        <Breadcrumb items={breadcrumbs} />

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-brand-600 dark:prose-a:text-brand-400 prose-code:before:content-none prose-code:after:content-none prose-code:bg-[var(--code-bg)] prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-pre:bg-slate-900 prose-pre:border prose-pre:border-[var(--border)]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
            ]}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Page navigation */}
        <div className="mt-12 border-t border-[var(--border)] pt-6">
          <p className="text-sm text-[var(--muted-foreground)]">
            Help improve this page —{" "}
            <a
              href={`https://github.com/mahdiaslanimk/Redpitaya-Documentation/blob/master/docs-site/src/content/docs/${slugParts.join("/")}.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 dark:text-brand-400 hover:underline"
            >
              Edit on GitHub
            </a>
          </p>
        </div>
      </article>

      {/* Table of contents */}
      <TableOfContents items={toc} />
    </div>
  );
}
