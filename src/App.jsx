import React, { useMemo } from "react";
import { QRCodeCanvas } from "qrcode.react";

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1KIbdaQQ3MpBFnwkzisuw403gWa8ttQPX?usp=drive_link";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50/70 px-3 py-1 text-xs font-semibold text-amber-900 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="mb-3 flex justify-center">
          <Pill>{eyebrow}</Pill>
        </div>
      ) : null}
      <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-pretty text-sm leading-6 text-slate-600 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Card({ title, subtitle, children, footer }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-slate-300">
      <div>
        <h3 className="text-base font-bold text-slate-900">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
      </div>
      <div className="mt-4 text-sm text-slate-700">{children}</div>
      {footer ? <div className="mt-4 border-t border-slate-100 pt-4">{footer}</div> : null}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((it) => (
        <li key={it} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-slate-900/70" />
          <span className="leading-6 text-slate-700">{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Anchor({ href, children, className }) {
  const external = href?.startsWith("http");
  return (
    <a
      href={href}
      className={cx(
        "underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-400 rounded",
        className
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function PrimaryButton({ href, children }) {
  const external = href?.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:from-indigo-500 hover:via-blue-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
    >
      {children}
    </a>
  );
}

export default function App() {
  const nav = useMemo(
    () => [
      { label: "Programs", href: "#programs" },
      { label: "Labs & Tools", href: "#labs" },
      { label: "Project Domains", href: "#domains" },
      { label: "Why Recruit", href: "#why" },
      { label: "Resumes", href: "#resumes" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-700 to-sky-600 text-white font-bold">
              ECE
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold">IIT Bhubaneswar — ECE</div>
              <div className="text-xs text-slate-600">
                Semiconductor • Wireless • DSP • Embedded
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-5 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <PrimaryButton href={DRIVE_LINK}>Access Resumes</PrimaryButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-amber-50" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                <Pill>Talent Snapshot 2024–25</Pill>
                <Pill>Semiconductor & Telecom Ready</Pill>
                <Pill>VLSI • PHY • DSP • Systems</Pill>
              </div>

              <h1 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Engineering Talent for Silicon, Wireless & Systems Innovation
              </h1>

              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
                Industry-ready ECE graduates trained in VLSI design, wireless PHY, signal processing,
                and embedded systems—prepared for semiconductor and telecom R&amp;D roles.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <PrimaryButton href={DRIVE_LINK}>Access Student Resumes</PrimaryButton>
                <SecondaryButton href="#programs">Explore Programs & Labs</SecondaryButton>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "B.Tech", v: "~60 / year" },
                  { k: "M.Tech (VLSI)", v: "~25 / year" },
                  { k: "M.Tech (SPC)", v: "~25 / year" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="text-sm font-bold text-slate-900">{x.k}</div>
                    <div className="mt-1 text-sm text-slate-600">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      Verified Student Resume Repository
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      B.Tech &amp; M.Tech | ECE | IIT Bhubaneswar
                    </div>
                  </div>
                  <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">
                    QR + Link
                  </span>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:items-center">
                  <a
                    href={DRIVE_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100"
                    aria-label="Open resume repository"
                    title="Open resume repository"
                  >
                    <div className="rounded-xl bg-white p-3 shadow-sm transition group-hover:shadow">
                      <QRCodeCanvas value={DRIVE_LINK} size={128} includeMargin />
                    </div>
                    <div className="mt-3 text-xs font-semibold text-slate-800">
                      Click QR to open Drive
                    </div>
                    <div className="mt-1 text-[11px] text-slate-600 text-center">
                      Works on desktop &amp; mobile
                    </div>
                  </a>

                  <div>
                    <div className="text-sm font-bold text-slate-900">Quick access for hiring teams</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Consolidated, shareable folder for shortlisting across VLSI, Wireless PHY,
                      DSP/ML and Embedded tracks.
                    </p>
                    <div className="mt-4">
                      <PrimaryButton href={DRIVE_LINK}>Open Drive Folder</PrimaryButton>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-700">Hiring fit</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "Design Verification",
                      "Physical Design",
                      "Analog/Mixed-Signal",
                      "Modem/PHY Algorithms",
                      "DSP/ML",
                      "Embedded/Firmware",
                      "Validation/Test",
                    ].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Tip: Add this page link to your internal job posting for one-click resume access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <SectionTitle
          eyebrow="Department Overview"
          title="Built for rigorous analysis and real-world implementation"
          subtitle="Graduates translate mathematical models into hardware- and software-efficient implementations, operate across abstraction levels, and contribute effectively to semiconductor and telecom product teams."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card title="First-principles competence" subtitle="Math-first engineering mindset">
            <BulletList
              items={[
                "Strong foundations in signals, systems, probability, and optimization",
                "Comfort with derivations, performance bounds, and trade-off analysis",
                "Ability to reason under PVT, noise, bandwidth, and latency constraints",
              ]}
            />
          </Card>

          <Card title="Tool- and workflow-ready" subtitle="From simulation to prototyping">
            <BulletList
              items={[
                "Industry-aligned EDA and simulation exposure (VLSI, RF, DSP)",
                "Algorithm development in MATLAB/Python with validation discipline",
                "Prototyping mindset with FPGA/SDR/embedded platforms",
              ]}
            />
          </Card>

          <Card title="R&D execution" subtitle="Documentation + experimentation">
            <BulletList
              items={[
                "Structured experimentation and reproducible reporting",
                "System-level thinking and cross-layer articulation",
                "Suitable for applied research, product engineering, and verification",
              ]}
            />
          </Card>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            eyebrow="Academic Programs"
            title="Tracks aligned to semiconductor and telecom roles"
            subtitle="Program structure emphasizes depth, systems thinking, and execution capability expected in silicon and wireless teams."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Card
              title="B.Tech — Electronics & Communication Engineering"
              subtitle="Intake ~60 / year"
              footer={
                <div className="text-xs text-slate-600">
                  Suitable for entry-level{" "}
                  <span className="font-semibold text-slate-800">silicon, firmware, validation, systems</span>{" "}
                  roles.
                </div>
              }
            >
              <div className="text-xs font-semibold text-slate-700">Core strengths</div>
              <BulletList
                items={[
                  "Signals & linear systems, transforms, random processes",
                  "Digital & analog circuits; communication systems fundamentals",
                  "Embedded systems, coding foundations, project-centric learning",
                ]}
              />
            </Card>

            <Card
              title="M.Tech — Microelectronics & VLSI Design"
              subtitle="Intake ~25 / year"
              footer={
                <div className="text-xs text-slate-600">
                  Ready for{" "}
                  <span className="font-semibold text-slate-800">PD, analog/RF, mixed-signal, DV</span>{" "}
                  pipelines.
                </div>
              }
            >
              <div className="text-xs font-semibold text-slate-700">Specialization focus</div>
              <BulletList
                items={[
                  "Analog CMOS IC design; mixed-signal & RF blocks",
                  "Digital VLSI and physical implementation concepts",
                  "Process-aware design thinking and trade-off analysis",
                ]}
              />
            </Card>

            <Card
              title="M.Tech — Signal Processing & Communication"
              subtitle="Intake ~25 / year"
              footer={
                <div className="text-xs text-slate-600">
                  Strong fit for{" "}
                  <span className="font-semibold text-slate-800">modem/PHY, DSP, applied ML</span>{" "}
                  roles.
                </div>
              }
            >
              <div className="text-xs font-semibold text-slate-700">Specialization focus</div>
              <BulletList
                items={[
                  "Advanced DSP, statistical signal processing",
                  "Wireless PHY (5G/6G concepts), MIMO/OFDM modeling",
                  "ML for signal/image processing with complexity awareness",
                ]}
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Labs & Tools */}
      <section id="labs" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            eyebrow="Labs & Technical Infrastructure"
            title="Hands-on exposure with industry-relevant toolchains"
            subtitle="Lab themes and tooling are aligned to silicon design flows, wireless simulation stacks, and embedded prototyping."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Card title="Core Laboratories">
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "VLSI & Microelectronics Design Lab",
                  "Wireless Communication & 5G Systems Lab",
                  "Signal Processing & ML Lab",
                  "Embedded Systems & IoT Lab",
                  "Microwave, RF & Antenna Lab",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Tools & Platforms">
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "MATLAB / Simulink",
                  "Python (NumPy, SciPy, PyTorch)",
                  "Cadence / Synopsys (VLSI flow)",
                  "HFSS / CST",
                  "FPGA platforms",
                  "SDR prototyping",
                  "MCU & Embedded toolchains",
                  "Measurement & validation workflows",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section id="domains" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            eyebrow="Research & M.Tech Project Domains"
            title="Industry-aligned project themes for silicon and wireless teams"
            subtitle="Domains emphasize execution under practical constraints—power, bandwidth, noise, latency, and verification rigor."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Card title="Semiconductor & VLSI">
              <BulletList
                items={[
                  "Analog / mixed-signal IC design themes",
                  "Low-power digital architectures and design trade-offs",
                  "Physical design optimization and timing closure awareness",
                  "Variability and PVT-aware analysis",
                  "RF front-end and mixed-signal interfacing blocks",
                ]}
              />
            </Card>

            <Card title="Wireless & Telecom (PHY)">
              <BulletList
                items={[
                  "5G/6G PHY algorithms and waveform reasoning",
                  "MIMO detection and channel estimation techniques",
                  "OFDM modeling, impairments, and link-level simulation",
                  "Interference management and spectral efficiency analysis",
                  "Performance benchmarking against baselines",
                ]}
              />
            </Card>

            <Card title="Signal Processing & AI">
              <BulletList
                items={[
                  "DSP algorithm optimization and complexity control",
                  "Deep learning for comms and signal/image pipelines",
                  "Image/video processing under compute constraints",
                  "Biomedical signal analysis and denoising themes",
                  "Edge AI deployment perspectives",
                ]}
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Why Recruit */}
      <section id="why" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            eyebrow="Recruiter Value Proposition"
            title="Why semiconductor and telecom teams recruit here"
            subtitle="Candidates exhibit depth in fundamentals, comfort with toolchains, and discipline in verification and documentation."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card title="What hiring managers typically notice">
              <BulletList
                items={[
                  "Mathematically rigorous reasoning with clean derivations",
                  "Algorithm-to-implementation thinking (compute, memory, latency)",
                  "Comfort moving across system, block, and component abstraction levels",
                  "Structured debugging and experimental validation habits",
                ]}
              />
            </Card>

            <Card title="Best-fit roles">
              <div className="flex flex-wrap gap-2">
                {[
                  "Design Verification (DV)",
                  "Physical Design (PD)",
                  "Analog / Mixed-Signal",
                  "RF / Front-End",
                  "Modem / PHY Algorithms",
                  "DSP / ML Engineer",
                  "Embedded / Firmware",
                  "Validation / Test",
                  "Systems Engineer",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                Prefer fast shortlisting? Use the resume repository and filter by track keywords:
                <span className="font-semibold text-slate-800">
                  {" "}VLSI / PD / DV / RF / PHY / MIMO / OFDM / DSP / Embedded
                </span>
                .
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Resumes */}
      <section id="resumes" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-950 via-slate-900 to-sky-900 px-6 py-10 text-white shadow-soft sm:px-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                  Resume Repository
                </div>
                <h2 className="mt-4 text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Access verified student resumes in one click
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                  Centralized drive folder for B.Tech and M.Tech candidates across VLSI, Wireless PHY,
                  DSP/ML and Embedded profiles.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={DRIVE_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60"
                  >
                    Open Drive Folder
                  </a>
                  <a
                    href="#programs"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                  >
                    Review Programs
                  </a>
                </div>
                <p className="mt-4 text-xs text-white/70">
                  Link:{" "}
                  <Anchor href={DRIVE_LINK} className="text-white/90">
                    {DRIVE_LINK}
                  </Anchor>
                </p>
              </div>

              <div className="lg:col-span-5">
                <a
                  href={DRIVE_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group mx-auto flex max-w-sm flex-col items-center rounded-2xl bg-white/10 p-6 text-center transition hover:bg-white/15"
                >
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <QRCodeCanvas value={DRIVE_LINK} size={160} includeMargin />
                  </div>
                  <div className="mt-4 text-sm font-semibold">Scan / Click to open resumes</div>
                  <div className="mt-1 text-xs text-white/70">
                    Share this QR internally for fast shortlisting
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row">
            <div className="text-sm font-semibold text-slate-900">Career Development Cell (CDC) — IIT Bhubaneswar</div>
            <div className="text-sm text-slate-600">
              Built for semiconductor &amp; telecom hiring workflows •{" "}
              <Anchor href={DRIVE_LINK} className="font-semibold text-slate-800">
                Resumes
              </Anchor>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 z-50 w-[min(92vw,520px)] -translate-x-1/2 md:hidden">
        <a
          href={DRIVE_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-soft"
        >
          <div>
            <div className="text-sm font-bold text-slate-900">Access Resumes</div>
            <div className="text-xs text-slate-600">Drive repository (verified)</div>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-3 py-2 text-xs font-semibold text-white">Open</div>
        </a>
      </div>
    </div>
  );
}
