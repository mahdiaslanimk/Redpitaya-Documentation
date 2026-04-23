export interface NavItem {
  title: string;
  href?: string;
  slug?: string;
  children?: NavItem[];
  badge?: string;
}

export const navigation: NavItem[] = [
  {
    title: "Introduction",
    href: "/docs/intro",
    slug: "intro",
  },
  {
    title: "Quick Start",
    slug: "quick-start",
    children: [
      { title: "What You Need", href: "/docs/quick-start/needs", slug: "quick-start/needs" },
      { title: "First Steps", href: "/docs/quick-start/first-steps", slug: "quick-start/first-steps" },
      { title: "OS Update", href: "/docs/quick-start/os-update", slug: "quick-start/os-update" },
      { title: "SD Card Setup", href: "/docs/quick-start/sdcard", slug: "quick-start/sdcard" },
      { title: "Troubleshooting", href: "/docs/quick-start/troubleshooting", slug: "quick-start/troubleshooting" },
    ],
  },
  {
    title: "Apps & Features",
    slug: "apps-features",
    children: [
      { title: "Overview", href: "/docs/apps-features/overview", slug: "apps-features/overview" },
      { title: "Oscilloscope", href: "/docs/apps-features/oscilloscope", slug: "apps-features/oscilloscope" },
      { title: "Signal Generator", href: "/docs/apps-features/signal-generator", slug: "apps-features/signal-generator" },
      { title: "Spectrum Analyzer", href: "/docs/apps-features/spectrum-analyzer", slug: "apps-features/spectrum-analyzer" },
      { title: "Remote Control (SCPI)", href: "/docs/apps-features/scpi", slug: "apps-features/scpi" },
      { title: "Command Line Tools", href: "/docs/apps-features/command-line", slug: "apps-features/command-line" },
    ],
  },
  {
    title: "Developer Guide",
    slug: "developer-guide",
    children: [
      { title: "Overview", href: "/docs/developer-guide/overview", slug: "developer-guide/overview" },
      {
        title: "Hardware",
        slug: "developer-guide/hardware",
        children: [
          { title: "Hardware Specs", href: "/docs/developer-guide/hardware/specs", slug: "developer-guide/hardware/specs" },
          { title: "Extension Connector", href: "/docs/developer-guide/hardware/extension-connector", slug: "developer-guide/hardware/extension-connector" },
        ],
      },
      {
        title: "Software",
        slug: "developer-guide/software",
        children: [
          { title: "Python API", href: "/docs/developer-guide/software/python", slug: "developer-guide/software/python" },
          { title: "C/C++ API", href: "/docs/developer-guide/software/c-api", slug: "developer-guide/software/c-api" },
          { title: "MATLAB", href: "/docs/developer-guide/software/matlab", slug: "developer-guide/software/matlab" },
          { title: "LabVIEW", href: "/docs/developer-guide/software/labview", slug: "developer-guide/software/labview" },
        ],
      },
      {
        title: "FPGA",
        slug: "developer-guide/fpga",
        children: [
          { title: "FPGA Overview", href: "/docs/developer-guide/fpga/overview", slug: "developer-guide/fpga/overview" },
          { title: "Vivado", href: "/docs/developer-guide/fpga/vivado", slug: "developer-guide/fpga/vivado" },
        ],
      },
    ],
  },
  {
    title: "Customization",
    slug: "customization",
    children: [
      { title: "Overview", href: "/docs/customization/overview", slug: "customization/overview" },
      { title: "Custom Apps", href: "/docs/customization/custom-apps", slug: "customization/custom-apps" },
    ],
  },
];

export function flattenNavigation(items: NavItem[]): NavItem[] {
  return items.reduce<NavItem[]>((acc, item) => {
    if (item.href) acc.push(item);
    if (item.children) acc.push(...flattenNavigation(item.children));
    return acc;
  }, []);
}

export function findNavItem(slug: string, items: NavItem[] = navigation): NavItem | null {
  for (const item of items) {
    if (item.slug === slug || item.href === `/docs/${slug}`) return item;
    if (item.children) {
      const found = findNavItem(slug, item.children);
      if (found) return found;
    }
  }
  return null;
}
