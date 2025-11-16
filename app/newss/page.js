"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Newspaper,
  Calendar,
  ExternalLink,
} from "lucide-react";

const newsItems = [
  {
    title: "Tax Season 2025 – What’s New",
    date: "Jan 15, 2025",
    tag: "General Update",
    summary:
      "A quick overview of important changes affecting most U.S. taxpayers this year.",
    url: "#",
  },
  {
    title: "Refund Delays Expected for Early Filers",
    date: "Jan 10, 2025",
    tag: "Filing",
    summary:
      "System processing changes may cause longer wait times for refunds filed in January.",
    url: "#",
  },
  {
    title: "Tax Credit Adjustments for 2024 Returns",
    date: "Dec 28, 2024",
    tag: "Credits",
    summary:
      "Several credits—including Child Tax Credit—have updated income limits and phaseouts.",
    url: "#",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
        
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to homepage
          </Link>

          <Link
            href="/"
            className="text-xs px-3 py-1 rounded-full border border-slate-800 bg-slate-900/70 text-slate-300"
          >
            eztax.app
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
            <Newspaper className="h-3 w-3" />
            Latest Tax News
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Updates that matter to taxpayers
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Key tax updates, filing insights, and important changes—written in
              simple language for individuals and small business owners.
            </p>
          </div>
        </header>

        {/* News List */}
        <section className="space-y-6">
          <div className="grid gap-5 sm:gap-6">
            {newsItems.map((item, idx) => (
              <article
                key={idx}
                className="group rounded-2xl bg-white/95 text-slate-900 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-md hover:ring-emerald-400/60 transition"
              >
                <div className="p-5 sm:p-6 space-y-3">
                  
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                    <span className="px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-[11px] font-medium tracking-wide">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-base sm:text-lg font-semibold leading-snug text-slate-900 group-hover:text-emerald-700">
                    {item.title}
                  </h2>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 max-w-3xl">
                    {item.summary}
                  </p>

                  {/* Link */}
                  <div className="pt-1">
                    <a
                      href={item.url}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-600"
                    >
                      Read more
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-4 rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-teal-500/15 p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold mb-1">
            Need help understanding how new tax changes affect you?
          </h3>
          <p className="text-sm text-emerald-50/90 mb-3 max-w-xl">
            Book a session and we’ll walk through what matters for your refund,
            balance due, and planning.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition"
          >
            Talk to a tax pro
          </Link>
        </section>
      </div>
    </main>
  );
}
