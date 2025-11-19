"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calculator,
  FileText,
  ShieldCheck,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Star,
  CalendarDays,
  DollarSign,
} from "lucide-react";
import "./globals.css";

/* -------------------- Layout helpers -------------------- */

const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </section>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl shadow-sm ring-1 ring-white/10 bg-white/90 backdrop-blur ${className}`}
  >
    {children}
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/20 px-3 py-1 text-xs font-medium text-slate-100/90">
    {children}
  </span>
);

/* -------------------- Tax deadlines data -------------------- */

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// month: 0–11, null = every month
const TAX_DEADLINES = [
  // INDIVIDUAL / ESTIMATED
  {
    id: 1,
    month: 0,
    day: 15,
    fullDate: "January 15",
    category: "Estimated Taxes",
    type: "Federal",
    title: "Q4 federal estimated tax payment",
    appliesTo: "Self-employed / 1099",
    details: "Final estimated payment for prior tax year (Form 1040-ES).",
  },
  {
    id: 2,
    month: 3,
    day: 15,
    fullDate: "April 15",
    category: "Individual Tax Day",
    type: "Federal",
    title: "Individual income tax return (Form 1040)",
    appliesTo: "Individuals",
    details:
      "Tax Day for most taxpayers. File return or extension and pay any balance due.",
  },
  {
    id: 3,
    month: 5,
    day: 15,
    fullDate: "June 15",
    category: "Estimated Taxes",
    type: "Federal",
    title: "Q2 federal estimated tax payment",
    appliesTo: "Self-employed / 1099",
    details: "Second quarterly estimated payment (Form 1040-ES).",
  },
  {
    id: 4,
    month: 8,
    day: 15,
    fullDate: "September 15",
    category: "Estimated Taxes",
    type: "Federal",
    title: "Q3 federal estimated tax payment",
    appliesTo: "Self-employed / 1099",
    details: "Third quarterly estimated payment (Form 1040-ES).",
  },

  // S CORP / PARTNERSHIP
  {
    id: 5,
    month: 2,
    day: 15,
    fullDate: "March 15",
    category: "S Corp",
    type: "Federal",
    title: "S corporation tax return (Form 1120-S)",
    appliesTo: "Calendar-year S corporations",
    details: "File return or extension and issue Schedule K-1s.",
  },
  {
    id: 6,
    month: 2,
    day: 15,
    fullDate: "March 15",
    category: "S Corp",
    type: "Federal",
    title: "Partnership tax return (Form 1065)",
    appliesTo: "Calendar-year partnerships/LLCs",
    details: "File return or extension and issue Schedule K-1s to partners.",
  },

  // NY SALES TAX – Quarterly (most common)
  {
    id: 7,
    month: 2,
    day: 20,
    fullDate: "March 20",
    category: "Sales Tax NY",
    type: "NY State",
    title: "NY sales tax – Q4 filing",
    appliesTo: "Quarterly filers",
    details:
      "File return and pay NY sales tax collected for the prior quarter.",
  },
  {
    id: 8,
    month: 5,
    day: 20,
    fullDate: "June 20",
    category: "Sales Tax NY",
    type: "NY State",
    title: "NY sales tax – Q1 filing",
    appliesTo: "Quarterly filers",
    details: "Typical due date for NY Q1 sales tax return and payment.",
  },
  {
    id: 9,
    month: 8,
    day: 20,
    fullDate: "September 20",
    category: "Sales Tax NY",
    type: "NY State",
    title: "NY sales tax – Q2 filing",
    appliesTo: "Quarterly filers",
    details: "Typical due date for NY Q2 sales tax return and payment.",
  },
  {
    id: 10,
    month: 11,
    day: 20,
    fullDate: "December 20",
    category: "Sales Tax NY",
    type: "NY State",
    title: "NY sales tax – Q3 filing",
    appliesTo: "Quarterly filers",
    details: "Typical due date for NY Q3 sales tax return and payment.",
  },

  // PAYROLL – 941s + deposits
  {
    id: 11,
    month: 3,
    day: 30,
    fullDate: "April 30",
    category: "Payroll",
    type: "Federal",
    title: "Form 941 – Q1 filing",
    appliesTo: "Employers with payroll",
    details: "Quarter 1 employer’s federal payroll tax return due.",
  },
  {
    id: 12,
    month: 6,
    day: 31,
    fullDate: "July 31",
    category: "Payroll",
    type: "Federal",
    title: "Form 941 – Q2 filing",
    appliesTo: "Employers with payroll",
    details: "Quarter 2 employer’s federal payroll tax return due.",
  },
  {
    id: 13,
    month: 9,
    day: 31,
    fullDate: "October 31",
    category: "Payroll",
    type: "Federal",
    title: "Form 941 – Q3 filing",
    appliesTo: "Employers with payroll",
    details: "Quarter 3 employer’s federal payroll tax return due.",
  },
  {
    id: 14,
    month: 0,
    day: 31,
    fullDate: "January 31",
    category: "Payroll",
    type: "Federal",
    title: "Form 941 – Q4 filing + W-2s",
    appliesTo: "Employers with payroll",
    details:
      "Quarter 4 Form 941 and Forms W-2/W-3 typically due to SSA and employees.",
  },
  {
    id: 15,
    month: null, // every month
    day: null,
    fullDate: "Varies",
    category: "Payroll",
    type: "Federal",
    title: "Federal payroll tax deposits",
    appliesTo: "Employers with payroll",
    details:
      "Monthly or semi-weekly deposit schedule depending on IRS lookback rules.",
  },
];

const FILTERS = [
  { key: "All", label: "All deadlines" },
  { key: "Individual Tax Day", label: "Individual / Tax Day" },
  { key: "S Corp", label: "S-Corp & Partnership" },
  { key: "Sales Tax NY", label: "NY Sales Tax" },
  { key: "Estimated Taxes", label: "Estimated Taxes" },
  { key: "Payroll", label: "Payroll" },
];

/* -------------------- TaxDeadlineCalendar component -------------------- */

const TaxDeadlineCalendar = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const now = new Date();
  const currentMonthIndex = now.getMonth();
  const currentMonthName = MONTH_NAMES[currentMonthIndex];

  const visibleDeadlines = TAX_DEADLINES.filter((d) => {
    const matchesMonth =
      d.month === null || d.month === currentMonthIndex; // null = every month
    const matchesCategory =
      activeFilter === "All" || d.category === activeFilter;
    return matchesMonth && matchesCategory;
  }).sort((a, b) => {
    if (a.day == null && b.day == null) return 0;
    if (a.day == null) return 1;
    if (b.day == null) return -1;
    return a.day - b.day;
  });

  return (
    <Section id="deadlines" className="py-20">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/30 w-fit">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>Key IRS & NY deadlines</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Deadlines for{" "}
            <span className="text-emerald-600">{currentMonthName}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            This calendar auto-updates every month based on today&apos;s date.
            It highlights federal Tax Day, S-corp and partnership filings, NY
            sales tax, estimated taxes, and payroll deadlines.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs sm:text-sm transition
                ${
                  activeFilter === filter.key
                    ? "border-emerald-500 bg-emerald-500 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-emerald-400 hover:text-emerald-600"
                }`}
            >
              {filter.key === "Estimated Taxes" && (
                <DollarSign className="h-3.5 w-3.5" />
              )}
              {filter.key === "Payroll" && <Clock className="h-3.5 w-3.5" />}
              {filter.key === "All" && (
                <CalendarDays className="h-3.5 w-3.5" />
              )}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <Card className="mt-2 bg-white shadow-sm ring-slate-100">
          <div className="p-4 sm:p-6">
            {visibleDeadlines.length === 0 ? (
              <p className="text-sm text-slate-500">
                No major deadlines in this category for {currentMonthName}.
                Choose &quot;All deadlines&quot; or another category to see
                more.
              </p>
            ) : (
              <div className="relative">
                <div className="absolute left-2 top-0 h-full w-px bg-slate-100 sm:left-3" />

                <div className="flex flex-col gap-5">
                  {visibleDeadlines.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="relative flex gap-4 pl-6 sm:pl-8"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center sm:left-0.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex flex-col gap-1">
                            <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                              {item.fullDate}
                            </div>
                            <div className="text-sm sm:text-base font-semibold text-slate-900">
                              {item.title}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1 text-right">
                            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-600">
                              {item.category}
                            </span>
                            <span className="text-[11px] text-slate-400">
                              {item.type}
                            </span>
                          </div>
                        </div>

                        <p className="mt-2 text-xs sm:text-sm text-slate-600">
                          {item.details}
                        </p>
                        {item.appliesTo && (
                          <p className="mt-1 text-[11px] font-medium text-slate-500">
                            Applies to: {item.appliesTo}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <p className="mt-4 text-[11px] text-slate-400">
              This calendar is for general information only and does not replace
              official IRS, NYS, or payroll service notices. Dates may shift
              when they fall on weekends or holidays.
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
};

/* -------------------- Main homepage -------------------- */

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.06),_transparent_55%)]" />
        <Section className="pt-20 pb-16 sm:pt-24 sm:pb-24 relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
            <div className="space-y-8">
              <Pill>
                <ShieldCheck className="mr-2 h-3.5 w-3.5" />
                IRS & NY tax help for individuals and small businesses
              </Pill>
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white"
                >
                  Stress-free tax preparation
                  <span className="block text-emerald-300">
                    with proactive IRS monitoring.
                  </span>
                </motion.h1>
                <p className="max-w-xl text-sm sm:text-base text-slate-300/90">
                  EZTax helps you file correctly, stay compliant, and avoid
                  surprises. From personal returns to S-corps, sales tax, and
                  payroll — we track the rules so you don&apos;t have to.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/30 hover:bg-emerald-300 transition">
                  Book a tax consultation
                  <ChevronDown className="ml-1.5 h-4 w-4 -rotate-90" />
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition">
                  Upload your tax documents
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="inline-flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 text-amber-300" />
                  <span>Trusted by NY self-employed & small business owners</span>
                </div>
                <span className="hidden sm:inline text-slate-600">•</span>
                <div className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Based in New York, serving clients nationwide</span>
                </div>
              </div>
            </div>

            <Card className="bg-slate-900/80 text-slate-100 ring-slate-700/60 shadow-xl shadow-slate-950/60">
              <div className="p-6 sm:p-7 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-semibold text-slate-50">
                      Snapshot of your tax year
                    </h2>
                    <p className="text-xs text-slate-400">
                      See where you stand at a glance.
                    </p>
                  </div>
                  <Calculator className="h-6 w-6 text-emerald-300" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Refund / balance</span>
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                        Live
                      </span>
                    </div>
                    <p className="mt-2 text-lg font-semibold text-emerald-300">
                      Checking...
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Based on IRS transcript & filings.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-3">
                    <span className="text-slate-400">Compliance status</span>
                    <p className="mt-2 text-lg font-semibold text-sky-300">
                      On track
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      No missing returns or unpaid notices detected.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-emerald-300" />
                      <span className="font-medium text-slate-100">
                        Next key deadline
                      </span>
                    </div>
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
                      Auto-updated
                    </span>
                  </div>
                  <p className="text-slate-200">
                    Stay ahead with our built-in calendar for federal, S-corp,
                    NY sales tax, estimated taxes, and payroll.
                  </p>
                </div>

                <button className="w-full inline-flex items-center justify-center rounded-xl bg-emerald-400/95 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/30 hover:bg-emerald-300 transition">
                  Get help with my taxes
                </button>
              </div>
            </Card>
          </div>
        </Section>
      </div>

      {/* Services */}
      <Section id="services" className="py-16 sm:py-20">
        <div className="flex flex-col gap-10">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Everything you need to stay compliant —{" "}
              <span className="text-emerald-300">in one place.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300/90">
              From basic returns to multi-entity structures, we help you file,
              plan, and stay on top of IRS and NY requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-slate-900/60 ring-slate-800 text-slate-100">
              <div className="p-5 space-y-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15">
                  <FileText className="h-4.5 w-4.5 text-emerald-300" />
                </div>
                <h3 className="text-sm font-semibold">Individual & family</h3>
                <p className="text-xs text-slate-300/90">
                  Federal and state returns, dependents, credits, deductions,
                  and tax planning for the year ahead.
                </p>
              </div>
            </Card>

            <Card className="bg-slate-900/60 ring-slate-800 text-slate-100">
              <div className="p-5 space-y-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15">
                  <Calculator className="h-4.5 w-4.5 text-sky-300" />
                </div>
                <h3 className="text-sm font-semibold">
                  S-Corps, LLCs & freelancers
                </h3>
                <p className="text-xs text-slate-300/90">
                  Entity setup guidance, S-corp and partnership filings,
                  reasonable salary, quarterly estimates, and more.
                </p>
              </div>
            </Card>

            <Card className="bg-slate-900/60 ring-slate-800 text-slate-100">
              <div className="p-5 space-y-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15">
                  <ShieldCheck className="h-4.5 w-4.5 text-amber-300" />
                </div>
                <h3 className="text-sm font-semibold">Sales tax & payroll</h3>
                <p className="text-xs text-slate-300/90">
                  NY sales tax filings, payroll coordination, Forms 941 & W-2,
                  and staying aligned with your bookkeeping.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Calendar on homepage */}
      <TaxDeadlineCalendar />

      {/* Testimonial / trust strip */}
      <Section className="pb-16">
        <Card className="bg-slate-900/80 ring-slate-800 text-slate-100">
          <div className="p-6 sm:p-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-medium">
                <Star className="h-3.5 w-3.5" />
                <span>Clients stay year after year</span>
              </div>
              <p className="text-sm text-slate-100">
                &quot;I used to dread tax season. Now I just upload my docs,
                review everything once, and that&apos;s it. EZTax also keeps an
                eye on my IRS account so I don&apos;t miss anything important.&quot;
              </p>
              <p className="text-xs text-slate-400">
                — Small business owner, New York
              </p>
            </div>
            <div className="mt-3 sm:mt-0">
              <button className="inline-flex items-center justify-center rounded-full border border-emerald-400/50 bg-slate-950/40 px-4 py-2 text-xs font-semibold text-emerald-200 hover:bg-emerald-500/10 transition">
                Schedule a free 15-minute call
              </button>
            </div>
          </div>
        </Card>
      </Section>

      {/* Contact strip */}
      <Section id="contact" className="pb-20">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Ready to simplify your taxes?
            </h2>
            <p className="text-sm text-slate-300/90">
              Send us a quick message or book a call. We&apos;ll review your
              situation and recommend the best way to move forward.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-200">
            <div className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-300" />
              <a
                href="mailto:info@eztax.app"
                className="hover:text-emerald-300 underline-offset-2 hover:underline"
              >
                info@eztax.app
              </a>
            </div>
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-300" />
              <span>New York • Remote appointments available</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
