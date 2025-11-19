"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calculator,
  FileText,
  ShieldCheck,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";
import "./globals.css";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl shadow-sm ring-1 ring-white/10 bg-white/90 backdrop-blur text-slate-900 ${className}`}
  >
    {children}
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/30 px-3 py-1 text-xs font-medium backdrop-blur text-slate-900">
    {children}
  </span>
);

const Button = ({ as = "a", href = "#", children, className = "", ...props }) => {
  const Comp = as;
  return (
    <Comp
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm ring-1 ring-black/20 transition hover:-translate-y-[1px] active:translate-y-0 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

const ListItem = ({ icon: Icon, title, children }) => (
  <div className="flex gap-3">
    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="text-base font-semibold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600">{children}</p>
    </div>
  </div>
);

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-white">{q}</span>
        <ChevronDown className={`h-5 w-5 text-white transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm text-slate-200">{a}</p>}
    </div>
  );
};

export default function Page() {
  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        backgroundImage:
          "radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 55%), radial-gradient(circle at bottom, rgba(56,189,248,0.14), transparent 55%), linear-gradient(135deg, #020617 0%, #020617 40%, #0f172a 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional cinematic overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10">
        {/* NAV */}
        <div className="sticky top-0 z-40 w-full bg-black/40 backdrop-blur ring-1 ring-white/10">
          <Section className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2 font-semibold">
              <div className="relative h-8 w-8 overflow-hidden rounded-xl bg-white/10">
                <Image src="/logo.png" alt="FINEX logo" fill sizes="32px" className="object-contain" />
              </div>
              FINEX "EZ-Tax"
            </a>

            <nav className="hidden gap-6 text-sm font-medium md:flex">
              <a href="#services" className="hover:opacity-70">
                Services
              </a>
              <a href="#pricing" className="hover:opacity-70">
                Pricing
              </a>
              <a href="#process" className="hover:opacity-70">
                Process
              </a>
              <a href="#academy" className="hover:opacity-70">
                Tax Academy
              </a>
              <a href="#news" className="hover:opacity-70">
                News
              </a>
              <a href="#faq" className="hover:opacity-70">
                FAQ
              </a>
              <a href="#contact" className="hover:opacity-70">
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button href="https://calendly.com/finex101" className="bg-indigo-600 text-white">
                Book Now
              </Button>
              <Button href="https://app.taxdome.com/login" className="bg-white text-slate-900">
                Client Portal
              </Button>
            </div>
          </Section>
        </div>

        {/* HERO */}
        <Section id="home" className="pt-16 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-10 md:grid-cols-2"
          >
            <div>
              <Pill>Stress-free filing. Expert results.</Pill>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl text-white">
                Modern tax prep for busy people and growing businesses
              </h1>
              <p className="mt-4 text-base text-slate-200">
                Transparent pricing, fast turnaround, and year-round support from licensed professionals.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="https://calendly.com/finex101" className="bg-indigo-600 text-white">
                  Book Now
                </Button>
                <Button href="https://app.taxdome.com/login" className="bg-white text-slate-900">
                  Client Portal
                </Button>
              </div>
            </div>

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

  // Shown every month (no specific day)
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

/* -------------------- Multi-month calendar component -------------------- */

const TaxDeadlineCalendar = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [monthOffset, setMonthOffset] = useState(0);

  const today = new Date();
  const baseYear = today.getFullYear();
  const baseMonth = today.getMonth();

  const displayDate = new Date(baseYear, baseMonth + monthOffset, 1);
  const displayYear = displayDate.getFullYear();
  const displayMonthIndex = displayDate.getMonth();
  const displayMonthName = MONTH_NAMES[displayMonthIndex];

  const daysInMonth = new Date(displayYear, displayMonthIndex + 1, 0).getDate();
  const firstWeekday = displayDate.getDay(); // 0 = Sun

  const getEventsForDay = (day) =>
    TAX_DEADLINES.filter((d) => {
      if (d.day == null) return false;
      const monthOK = d.month === displayMonthIndex;
      const dayOK = d.day === day;
      const filterOK = activeFilter === "All" || d.category === activeFilter;
      return monthOK && dayOK && filterOK;
    });

  const otherThisMonth = TAX_DEADLINES.filter((d) => {
    const monthOK =
      d.month === null || d.month === displayMonthIndex; // null = every month
    const noDay = d.day == null;
    const filterOK = activeFilter === "All" || d.category === activeFilter;
    return monthOK && noDay && filterOK;
  });

  const totalCells = firstWeekday + daysInMonth;
  const cells = Array.from({ length: totalCells }, (_, i) => {
    const dayNumber = i - firstWeekday + 1;
    if (dayNumber < 1 || dayNumber > daysInMonth) return { dayNumber: null };

    const events = getEventsForDay(dayNumber);
    const hasEvents = events.length > 0;
    const isToday =
      dayNumber === today.getDate() &&
      displayMonthIndex === today.getMonth() &&
      displayYear === today.getFullYear();

    return { dayNumber, events, hasEvents, isToday };
  });

  const allEventsForList = TAX_DEADLINES.filter((d) => {
    const monthOK =
      d.month === displayMonthIndex || (d.month === null && d.day == null);
    const filterOK = activeFilter === "All" || d.category === activeFilter;
    return monthOK && filterOK;
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
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/40 w-fit">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>Key IRS & NY deadlines</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Calendar for{" "}
                <span className="text-emerald-300">
                  {displayMonthName} {displayYear}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300/90 mt-1">
                Scroll through months and see IRS, S-corp, NY sales tax,
                estimated tax, and payroll deadlines highlighted.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMonthOffset((n) => n - 1)}
                className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-slate-700 bg-slate-900/70 text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setMonthOffset(0)}
                className="px-3 py-1.5 rounded-full text-xs font-medium border border-slate-700 bg-slate-900/70 text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition"
              >
                This month
              </button>
              <button
                type="button"
                onClick={() => setMonthOffset((n) => n + 1)}
                className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-slate-700 bg-slate-900/70 text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
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
                    ? "border-emerald-300 bg-emerald-400/90 text-slate-950 shadow-sm"
                    : "border-slate-700 bg-slate-900/60 text-slate-200 hover:border-emerald-400 hover:text-emerald-300"
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

        {/* Calendar + list */}
        <Card className="mt-2 bg-slate-900/80 ring-slate-800 text-slate-100">
          <div className="p-4 sm:p-6 space-y-6">
            {/* Mobile month controls */}
            <div className="flex items-center justify-between gap-3 sm:hidden">
              <button
                type="button"
                onClick={() => setMonthOffset((n) => n - 1)}
                className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-slate-700 bg-slate-950/60 text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm font-medium text-slate-100">
                {displayMonthName} {displayYear}
              </span>
              <button
                type="button"
                onClick={() => setMonthOffset((n) => n + 1)}
                className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-slate-700 bg-slate-950/60 text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Month grid */}
            <div>
              <div className="grid grid-cols-7 text-[11px] font-medium text-slate-400 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d} className="text-center">
                    {d}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {cells.map((cell, idx) => {
                  if (!cell.dayNumber) {
                    return <div key={idx} className="h-9 sm:h-10" />;
                  }

                  const { dayNumber, hasEvents, isToday } = cell;

                  return (
                    <button
                      key={idx}
                      type="button"
                      className={`relative flex items-center justify-center h-9 sm:h-10 rounded-full text-xs sm:text-sm
                        ${
                          hasEvents
                            ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                            : "text-slate-200 hover:bg-slate-800/70"
                        }
                        ${isToday ? "ring-2 ring-emerald-300/70" : ""}
                      `}
                    >
                      <span>{dayNumber}</span>
                      {hasEvents && (
                        <span className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-emerald-900/70" />
                      )}
                    </button>
                  );
                })}
              </div>

              <p className="mt-3 text-[11px] text-slate-400">
                Green dates have one or more tax deadlines in the selected
                category.
              </p>
            </div>

            {/* Event list under calendar */}
            <div className="border-t border-slate-800 pt-4">
              {allEventsForList.length === 0 ? (
                <p className="text-sm text-slate-400">
                  No major deadlines this month for this category.
                </p>
              ) : (
                <div className="space-y-3">
                  {allEventsForList.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-1 text-xs sm:text-sm"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                            {item.day
                              ? `${displayMonthName} ${item.day}`
                              : item.fullDate}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-200">
                            {item.category}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500">
                          {item.type}
                        </span>
                      </div>
                      <div className="font-semibold text-slate-100">
                        {item.title}
                      </div>
                      <p className="text-[12px] text-slate-300">
                        {item.details}
                      </p>
                      {item.appliesTo && (
                        <p className="text-[11px] text-slate-400">
                          Applies to: {item.appliesTo}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {otherThisMonth.length > 0 && (
                <p className="mt-2 text-[11px] text-slate-400">
                  Includes monthly / variable obligations like payroll tax
                  deposits.
                </p>
              )}

              <p className="mt-3 text-[11px] text-slate-500">
                This calendar is for general information only and does not
                replace official IRS, NYS, or payroll service notices. Dates may
                shift when they fall on weekends or holidays.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

          </motion.div>
        </Section>

        {/* SERVICES */}
        <Section id="services" className="py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl text-white">Services</h2>
            <p className="mt-3 text-slate-200">
              End-to-end tax and advisory services for individuals, families, and growing businesses.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Individual & Family Tax</h3>
              <p className="mt-2 text-sm text-slate-700">
                Accurate, optimized returns for W-2 earners, investors, and multi-state filers.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✓ Federal & State returns</li>
                <li>✓ Credits & deductions review</li>
                <li>✓ Multi-state & remote work</li>
                <li>✓ IRS notice guidance</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold">Business & Self-Employed</h3>
              <p className="mt-2 text-sm text-slate-700">
                Strategic support for LLCs, S-Corps, C-Corps, and freelancers.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✓ Entity selection & setup</li>
                <li>✓ Quarterly tax planning</li>
                <li>✓ Books review & cleanup</li>
                <li>✓ Payroll & 1099 support</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold">Planning & Advisory</h3>
              <p className="mt-2 text-sm text-slate-700">
                Year-round tax strategy tailored to your goals and cash flow.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✓ Tax-efficient investing</li>
                <li>✓ Retirement & stock options</li>
                <li>✓ Multi-year scenario planning</li>
                <li>✓ On-call tax questions</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* PRICING */}
        <Section id="pricing" className="py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl text-white">Pricing</h2>
            <p className="mt-3 text-slate-200">
              Transparent, simple, and all-inclusive tax preparation packages.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* BASIC RETURN */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Essential</h3>
              <div className="mt-2 text-3xl font-extrabold">$199+</div>
              <p className="mt-1 text-xs text-slate-700">W-2 employees with simple returns</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✓ Federal + State return</li>
                <li>✓ Up to 2 W-2s</li>
                <li>✓ e-File included</li>
                <li>✓ 3-month support</li>
              </ul>
              <a
                href="https://calendly.com/finex101"
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white"
              >
                Start Filing
              </a>
            </Card>

            {/* STANDARD RETURN */}
            <Card className="p-6 ring-2 ring-indigo-600">
              <h3 className="text-lg font-semibold">Premium</h3>
              <div className="mt-2 text-3xl font-extrabold">$449+</div>
              <p className="mt-1 text-xs text-slate-700">Most taxpayers choose this</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✓ All Basic features</li>
                <li>✓ 1099 income</li>
                <li>✓ Investments (stocks/crypto)</li>
                <li>✓ Itemized deductions</li>
                <li>✓ Child tax credits</li>
              </ul>
              <a
                href="https://calendly.com/finex101"
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white"
              >
                Start Filing
              </a>
            </Card>

            {/* BUSINESS RETURN */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Business Return</h3>
              <div className="mt-2 text-3xl font-extrabold">$699+</div>
              <p className="mt-1 text-xs text-slate-700">S-Corp, C-Corp, Partnership, Schedule C</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✓ Federal + State returns</li>
                <li>✓ Books review</li>
                <li>✓ Depreciation schedules</li>
                <li>✓ Estimated tax planning</li>
                <li>✓ Year-round support</li>
              </ul>
              <a
                href="https://calendly.com/finex101"
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white"
              >
                Start Filing
              </a>
            </Card>
          </div>
        </Section>

        {/* PROCESS */}
        <Section id="process" className="py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl text-white">How It Works</h2>
            <p className="mt-3 text-slate-200">
              A streamlined, digital-first process designed to save you time and reduce stress.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 items-start">
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Simple 4-step process</h3>
              <ol className="mt-4 space-y-4 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                    1
                  </span>
                  <div>
                    <div className="font-semibold">Book a consult</div>
                    <p className="text-slate-600">
                      Choose a time that works for you and tell us about your situation.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                    2
                  </span>
                  <div>
                    <div className="font-semibold">Upload your documents</div>
                    <p className="text-slate-600">
                      Securely upload W-2s, 1099s, statements, and prior returns to our portal.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                    3
                  </span>
                  <div>
                    <div className="font-semibold">Review your draft</div>
                    <p className="text-slate-600">
                      We walk you through your return, answer questions, and finalize everything.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                    4
                  </span>
                  <div>
                    <div className="font-semibold">File & plan ahead</div>
                    <p className="text-slate-600">
                      We e-file your return and provide actionable recommendations for next year.
                    </p>
                  </div>
                </li>
              </ol>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold">Built for busy professionals</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>✓ 100% remote option available</li>
                <li>✓ Clear deadlines & expectations</li>
                <li>✓ Secure messaging inside the portal</li>
                <li>✓ Support even after your return is filed</li>
              </ul>
              <Button href="https://calendly.com/finex101" className="mt-6 bg-indigo-600 text-white w-full justify-center">
                Start the process
              </Button>
            </Card>
          </div>
        </Section>

        {/* ACADEMY */}
        <Section id="academy" className="py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl text-white">FINEX Tax Academy</h2>
            <p className="mt-3 text-slate-200">Hands-on training for aspiring tax pros.</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* PLAN 1 */}
            <Card className="p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">PLAN 1</h3>
                <div className="text-2xl font-extrabold">$399</div>
              </div>
              <p className="mt-1 text-xs text-slate-600">Duration: 1 week</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Individual Taxation (w-2, 1099s)
                </li>
              </ul>
              <a
                href="https://calendly.com/finex101"
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white"
              >
                Enroll
              </a>
            </Card>

            {/* PLAN 2 */}
            <Card className="p-6 ring-2 ring-indigo-600">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">PLAN 2</h3>
                <div className="text-2xl font-extrabold">$1,299</div>
              </div>
              <p className="mt-1 text-xs text-slate-600">Duration: 2 weeks</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> Individual Taxation
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> Business Formation
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> ERO Setup
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> Tax Software Practice
                </li>
              </ul>
              <a
                href="https://calendly.com/finex101"
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white"
              >
                Enroll
              </a>
            </Card>

            {/* PLAN 3 */}
            <Card className="p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">PLAN 3</h3>
                <div className="text-2xl font-extrabold">$1,990</div>
              </div>
              <p className="mt-1 text-xs text-slate-600">Duration: 4 weeks</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> Individual Taxation
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> Business Formation
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> ERO Setup
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> CRM Practice
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> Tax Software Practice
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> Corporate Return
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> Partnership Return
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> NYS Tax Pro Account
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> EA Exam Scheduling
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> 3-Month Mentorship
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> 6-Month Video Access
                </li>
              </ul>
              <a
                href="https://calendly.com/finex101"
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white"
              >
                Enroll
              </a>
            </Card>
          </div>
        </Section>

        {/* NEWS */}
        <Section id="news" className="py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl text-white">FINEX News & Updates</h2>
            <p className="mt-3 text-slate-200">
              Latest updates, tax changes, and announcements from our team.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* NEWS ITEM 1 */}
            <Card className="p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                January 2025
              </div>
              <h3 className="mt-2 text-lg font-semibold">
                2024 Tax Season Now Open
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                We are accepting new and returning clients for the 2024 filing season with both remote
                and in-person options available.
              </p>
              <a
                href="https://calendly.com/finex101"
                className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:underline"
              >
                Book your slot →
              </a>
            </Card>

            {/* NEWS ITEM 2 */}
            <Card className="p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                December 2024
              </div>
              <h3 className="mt-2 text-lg font-semibold">
                New Business Tax Planning Packages
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Small businesses and self-employed clients can now enroll in our quarterly planning
                program to avoid surprises at tax time.
              </p>
              <a
                href="#pricing"
                className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:underline"
              >
                View pricing →
              </a>
            </Card>

            {/* NEWS ITEM 3 */}
            <Card className="p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                November 2024
              </div>
              <h3 className="mt-2 text-lg font-semibold">
                Tax Academy Cohort Enrollment
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Enrollment is open for the next FINEX Tax Academy cohort. Learn individual and business
                taxation with hands-on practice.
              </p>
              <a
                href="#academy"
                className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:underline"
              >
                Learn more →
              </a>
            </Card>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" className="py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl text-white">FAQs</h2>
            <p className="mt-3 text-slate-200">
              Answers to common questions about working with FINEX.
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <FaqItem
              q="Do you work with clients outside New York?"
              a="Yes. We work remotely with clients across the U.S. using our secure online portal, as long as you are required to file a U.S. tax return."
            />
            <FaqItem
              q="How long does it take to complete my return?"
              a="Most individual returns are completed within 5–7 business days once we have all your documents. Complex and business returns may take longer, but we’ll share a clear timeline upfront."
            />
            <FaqItem
              q="What if I receive an IRS or state notice?"
              a="If a notice relates to a return we prepared, we will help you interpret it and advise on next steps. Many issues can be handled with a written response or minor correction."
            />
            <FaqItem
              q="Do you offer payment plans?"
              a="In many cases, yes. For larger engagements and academy programs, we can split payments into installments. Let us know your situation during the consultation."
            />
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" className="py-14">
          <Card className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
            <div>
              <h3 className="text-xl font-bold">Talk to a tax pro</h3>
              <p className="mt-2 text-sm text-slate-700">Reply within one business day.</p>

              <div className="mt-6 space-y-3 text-sm">
                {/* EMAIL REMOVED */}
                <div className="flex items-center gap-2 text-slate-900">
                  <MapPin className="h-4 w-4" /> New York, NY
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://calendly.com/finex101"
                    className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-semibold"
                  >
                    Book Now
                  </a>

                  <a
                    href="https://app.taxdome.com/login"
                    className="inline-flex rounded-2xl px-5 py-3 bg-white ring-1 ring-black/10 text-slate-900"
                  >
                    Client Portal
                  </a>
                </div>
              </div>
            </div>

            <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium text-slate-900">Name</label>
                <input
                  className="rounded-xl border px-3 py-2 w-full bg-white text-slate-900 placeholder-slate-400"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-900">Email</label>
                <input
                  type="email"
                  className="rounded-xl border px-3 py-2 w-full bg-white text-slate-900 placeholder-slate-400"
                  placeholder="you@domain.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-900">What do you need help with?</label>
                <select className="rounded-xl border px-3 py-2 w-full bg-white text-slate-900">
                  <option>Individual tax return</option>
                  <option>Business tax return</option>
                  <option>Tax planning</option>
                  <option>IRS/State notice</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-900">Message</label>
                <textarea
                  rows={4}
                  className="rounded-xl border px-3 py-2 w-full bg-white text-slate-900 placeholder-slate-400"
                  placeholder="Tell us a bit about your situation"
                ></textarea>
              </div>

              <Button as="button" className="bg-indigo-600 text-white">
                Send Message
              </Button>
            </form>
          </Card>
        </Section>

        {/* FOOTER */}
        <footer className="mt-8 border-t border-white/20 bg-black/40 backdrop-blur">
          <Section className="grid gap-6 py-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <div className="relative h-8 w-8 overflow-hidden rounded-xl bg-white/10">
                  <Image src="/logo.png" alt="FINEX logo" fill sizes="32px" className="object-contain" />
                </div>
                FINEX "EZ-Tax"
              </div>
              <p className="mt-3 text-sm text-slate-300">
                © {new Date().getFullYear()} FINEX. All rights reserved.
              </p>
            </div>

            <div className="text-sm">
              <div className="font-semibold text-white">Navigation</div>
              <ul className="mt-2 space-y-2 text-slate-300">
                <li><a href="#services">Services</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#academy">Tax Academy</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://app.taxdome.com/login">Client Portal</a></li>
              </ul>
            </div>

            <div className="text-sm">
              <div className="font-semibold text-white">Contact</div>
              <ul className="mt-2 space-y-2 text-slate-300">
                {/* EMAIL REMOVED */}
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> New York, NY
                </li>
              </ul>
            </div>
          </Section>
        </footer>
      </div>
    </div>
  );
}
