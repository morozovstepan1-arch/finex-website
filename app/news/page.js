// app/news/page.js
// Server component: auto-imports IRS news + matches eztax.app homepage style

import Link from "next/link";
import {
  ArrowLeft,
  Newspaper,
  Calendar,
  ExternalLink,
} from "lucide-react";

// Revalidate at most once per hour (tune as you like)
export const revalidate = 3600;

const IRS_NEWS_URL =
  "https://www.irs.gov/newsroom/news-releases-for-current-month";

async function getIrsNews() {
  const res = await fetch(IRS_NEWS_URL, {
    // Let Next.js cache this on the server
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error("Failed to fetch IRS news:", res.status);
    return [];
  }

  const html = await res.text();
  return parseIrsNewsHtml(html).slice(0, 12); // keep top 10–12 items
}

/**
 * Very simple HTML parser tailored to the current IRS
 * "News releases for current month" page structure.
 *
 * As of Nov 2025 the page renders each item roughly as:
 *
 *   <h3><a href="/newsroom/...">Title…</a></h3>
 *   <p><strong>IR-2025-112, Nov. 13, 2025</strong> — Summary…</p>
 *
 * If IRS changes markup, update this regex.
 */
function parseIrsNewsHtml(html) {
  const items = [];

  const itemRegex =
    /<h3[^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>(.*?)<\/a>\s*<\/h3>\s*<p>\s*<strong>([^<]+)<\/strong>\s*—\s*([^<]+)<\/p>/gis;

  let match;
  while ((match = itemRegex.exec(html)) !== null) {
    const [, href, rawTitle, rawMeta, rawSummary] = match;

    const title = stripTags(rawTitle).trim();
    const meta = stripTags(rawMeta).trim(); // e.g. "IR-2025-112, Nov. 13, 2025"
    const summary = stripTags(rawSummary).trim();

    // Try to split IR code and date from meta
    let irCode = null;
    let dateString = null;

    const parts = meta.split(",");
    if (parts.length >= 2) {
      irCode = parts[0].trim(); // "IR-2025-112"
      dateString = parts.slice(1).join(",").trim(); // "Nov. 13, 2025"
    } else {
      irCode = meta;
    }

    // Normalized absolute URL
    const url = href.startsWith("http")
      ? href
      : `https://www.irs.gov${href}`;

    items.push({
      title,
      irCode,
      dateString,
      summary,
      url,
    });
  }

  return items;
}

function stripTags(str) {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}

export default async function NewsPage() {
  const newsItems = await getIrsNews();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
        {/* Top bar – matches a modern finance landing style */}
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

        {/* Header – aligned with your hero typography */}
        <header className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
            <Newspaper className="h-3 w-3" />
            Real-time IRS News & Releases
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              IRS news that actually matters to your taxes
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              This page pulls live updates from the official IRS newsroom so
              you and your clients can see what&apos;s changing—without
              refreshing IRS.gov all day.
            </p>
          </div>
        </header>

        {/* Content */}
        <section className="space-y-6">
          {newsItems.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm text-slate-300">
                We couldn&apos;t load IRS news right now. You can still check
                the{" "}
                <a
                  href={IRS_NEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-emerald-400/70 underline-offset-2"
                >
                  official IRS newsroom
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:gap-6">
              {newsItems.map((item, idx) => (
                <article
                  key={`${item.irCode ?? item.title}-${idx}`}
                  className="group rounded-2xl bg-white/95 text-slate-900 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-md hover:ring-emerald-400/60 transition"
                >
                  <div className="p-5 sm:p-6 space-y-3">
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      {item.dateString && (
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.dateString}
                        </span>
                      )}
                      {item.irCode && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-slate-300" />
                          <span className="px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-[11px] font-medium tracking-wide">
                            {item.irCode}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-base sm:text-lg font-semibold leading-snug text-slate-900 group-hover:text-emerald-700">
                      {item.title}
                    </h2>

                    {/* Summary */}
                    {item.summary && (
                      <p className="text-sm text-slate-600 max-w-3xl">
                        {item.summary}
                      </p>
                    )}

                    {/* Link */}
                    <div className="pt-1">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-600"
                      >
                        View on IRS.gov
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* CTA that fits your brand */}
        <section className="mt-4 rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/15 via-emerald-500/10 to-teal-500/15 p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold mb-1">
            Want these IRS changes translated into plain English for your
            situation?
          </h3>
          <p className="text-sm text-emerald-50/90 mb-3 max-w-xl">
            Book a session and we&apos;ll walk through what today&apos;s IRS
            updates mean for your refund, balance due, and planning.
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

