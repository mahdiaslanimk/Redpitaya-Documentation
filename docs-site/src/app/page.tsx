import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Red Pitaya Documentation",
  description:
    "Official Red Pitaya technical documentation — quick start guides, API references, FPGA development, and more.",
};

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Quick Start",
    description: "Get your Red Pitaya board up and running in minutes with our step-by-step guides.",
    href: "/docs/quick-start/needs",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Apps & Features",
    description: "Explore the built-in oscilloscope, signal generator, spectrum analyzer, and more.",
    href: "/docs/apps-features/overview",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Developer Guide",
    description: "Python, C/C++, MATLAB APIs and FPGA development with Xilinx Vivado.",
    href: "/docs/developer-guide/overview",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Customization",
    description: "Build custom FPGA designs, applications, and extend board functionality.",
    href: "/docs/customization/overview",
  },
];

const stats = [
  { label: "ADC/DAC Resolution", value: "14-bit" },
  { label: "Sampling Rate", value: "125 MS/s" },
  { label: "CPU", value: "Dual ARM A9" },
  { label: "FPGA", value: "Zynq 7010" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--background)] to-[var(--muted)] py-20 sm:py-32">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Version 2.07-51 — Now Available
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Red Pitaya
            <br />
            <span className="text-brand-600 dark:text-brand-400">Documentation</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--muted-foreground)] leading-relaxed">
            Comprehensive technical documentation for Red Pitaya boards. From quick start
            guides to advanced FPGA development — everything you need to build with Red Pitaya.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/quick-start/first-steps"
              className="rounded-xl bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-colors"
            >
              Get Started →
            </Link>
            <Link
              href="/docs/intro"
              className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-6 py-3 text-base font-semibold text-[var(--foreground)] shadow-sm hover:bg-[var(--muted)] transition-colors"
            >
              What is Red Pitaya?
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-4"
              >
                <div className="text-2xl font-bold text-brand-600 dark:text-brand-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-[var(--muted-foreground)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              Everything you need
            </h2>
            <p className="mt-3 text-[var(--muted-foreground)]">
              Comprehensive guides for every aspect of Red Pitaya development
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md dark:hover:border-brand-700"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400 group-hover:bg-brand-100 dark:group-hover:bg-brand-900 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold text-[var(--foreground)]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-brand-600 dark:text-brand-400">
                  Learn more
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--foreground)]">
                Start building in minutes
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                Red Pitaya provides a Python API that makes signal acquisition and generation
                straightforward. Connect to your board over Ethernet and start measuring.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Python, C/C++, MATLAB & LabVIEW support",
                  "SCPI remote control over TCP/IP",
                  "Open-source FPGA firmware",
                  "Web-based instrument dashboard",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[var(--foreground)]">
                    <svg className="h-4 w-4 text-brand-600 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/docs/developer-guide/overview"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                >
                  View Developer Guide
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Code block */}
            <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-xl">
              <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--card)] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <span className="ml-2 text-xs text-[var(--muted-foreground)] font-mono">
                  example.py
                </span>
              </div>
              <pre className="overflow-x-auto bg-slate-900 p-6 text-sm leading-relaxed">
                <code className="text-slate-300 font-mono">
                  <span className="text-slate-500"># Connect to Red Pitaya{"\n"}</span>
                  <span className="text-purple-400">import</span>
                  <span> rp{"\n\n"}</span>
                  <span className="text-slate-500"># Initialize{"\n"}</span>
                  <span>rp.</span>
                  <span className="text-yellow-300">rp_Init</span>
                  <span>(){"\n\n"}</span>
                  <span className="text-slate-500"># Generate 10kHz sine wave{"\n"}</span>
                  <span>rp.</span>
                  <span className="text-yellow-300">rp_GenWaveform</span>
                  <span>(rp.RP_CH_1, rp.RP_WAVEFORM_SINE){"\n"}</span>
                  <span>rp.</span>
                  <span className="text-yellow-300">rp_GenFreq</span>
                  <span>(rp.RP_CH_1, </span>
                  <span className="text-orange-300">10000</span>
                  <span>){"\n"}</span>
                  <span>rp.</span>
                  <span className="text-yellow-300">rp_GenAmp</span>
                  <span>(rp.RP_CH_1, </span>
                  <span className="text-orange-300">0.5</span>
                  <span>){"\n"}</span>
                  <span>rp.</span>
                  <span className="text-yellow-300">rp_GenOutEnable</span>
                  <span>(rp.RP_CH_1){"\n\n"}</span>
                  <span className="text-slate-500"># Read analog input{"\n"}</span>
                  <span className="text-blue-300">value</span>
                  <span> = rp.</span>
                  <span className="text-yellow-300">rp_AIpinGetValue</span>
                  <span>(</span>
                  <span className="text-orange-300">0</span>
                  <span>){"\n"}</span>
                  <span className="text-purple-400">print</span>
                  <span>(</span>
                  <span className="text-green-300">f&quot;Input: </span>
                  <span className="text-blue-300">&#123;value&#125;</span>
                  <span className="text-green-300"> V&quot;</span>
                  <span>)</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600 dark:bg-brand-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to get started?
          </h2>
          <p className="mt-4 text-brand-100 text-lg">
            Follow our quick start guide to have your Red Pitaya running in under 10 minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/quick-start/first-steps"
              className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-sm hover:bg-brand-50 transition-colors"
            >
              Quick Start Guide
            </Link>
            <Link
              href="/docs/intro"
              className="rounded-xl border border-brand-400 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
