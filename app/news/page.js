const newsItems = [
  {
    date: "January 15, 2025",
    tag: "Season Update",
    title: "2024 Filing Season Launch",
    description:
      "All virtual and in-person appointment slots are now open. Early filers receive priority review and audit support.",
    cta: {
      label: "Book a consultation",
      href: "https://calendly.com/finex101",
    },
  },
  {
    date: "January 6, 2025",
    tag: "Policy Watch",
    title: "IRS mileage rate increases",
    description:
      "Standard mileage deductions rise to 67 cents per mile for business trips. We automatically update deductions for our bookkeeping clients.",
    cta: {
      label: "View IRS notice",
      href: "https://www.irs.gov/newsroom",
    },
  },
  {
    date: "December 28, 2024",
    tag: "Tax Academy",
    title: "Winter cohort almost full",
    description:
      "Only three seats remain for the FINEX Tax Academy mentorship. Includes live instruction, mock exams, and client case studies.",
    cta: {
      label: "Reserve a seat",
      href: "https://calendly.com/finex101",
    },
  },
  {
    date: "December 10, 2024",
    tag: "Advisory",
    title: "Quarterly planning enrollments",
    description:
      "Growth-stage businesses can lock 2025 tax strategy sessions now and receive bookkeeping cleanup before Q1 closes.",
    cta: {
      label: "Explore packages",
      href: "/#pricing",
    },
  },
];

const highlights = [
  {
    title: "IRS opens Modernized e-File",
    detail: "We transmit returns through secure e-file with average refunds released in 12 days.",
  },
  {
    title: "State conformity tracker",
    detail: "Our compliance team monitors New York and multi-state rule changes every week.",
  },
  {
    title: "Practice hiring update",
    detail: "We added two EA-certified preparers to accelerate response times this season.",
  },
];

const resources = [
  {
    title: "Small business tax planning",
    description: "Retainers that combine quarterly strategy, payroll, and bookkeeping oversight.",
    href: "/#pricing",
  },
  {
    title: "FINEX Tax Academy",
    description: "Live cohort-based program for aspiring preparers and accountants.",
    href: "/#academy",
  },
  {
    title: "Client onboarding kit",
    description: "Secure uploader links, required document checklist, and milestone timeline.",
    href: "https://app.taxdome.com/login",
  },
];

const Section = ({ children, className = "" }) => (
  <section className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const Card = ({ children }) => (
  <div className="rounded-2xl bg-white/95 p-6 text-slate-900 shadow-xl shadow-slate-900/10 ring-1 ring-black/5 backdrop-blur">
    {children}
  </div>
);

export const metadata = {
  title: "FINEX News Feed",
  description: "Updates, policy alerts, and community highlights from the FINEX tax team.",
};

export default function NewsPage() {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 55%), radial-gradient(circle at bottom, rgba(56,189,248,0.14), transparent 55%), linear-gradient(135deg, #020617 0%, #020617 40%, #0f172a 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      <div className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur">
        <Section className="py-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Field reports</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">FINEX Dispatch</h1>
          <p className="mt-4 text-base text-slate-200">
            Weekly intelligence on regulatory shifts, seasonal bandwidth, and academy updates from the FINEX team.
          </p>
        </Section>
      </div>

      <main className="relative z-10 space-y-16 py-16">
        <Section className="space-y-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-indigo-200">Latest dispatches</p>
              <h2 className="mt-2 text-2xl font-bold text-white">What we're watching right now</h2>
            </div>
            <a
              href="https://calendly.com/finex101"
              className="inline-flex items-center justify-center rounded-2xl bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 ring-1 ring-white/50 transition hover:-translate-y-0.5"
            >
              Talk with an advisor
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {newsItems.map((item) => (
              <Card key={item.title}>
                <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{item.date}</div>
                <p className="mt-1 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700">
                  {item.tag}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                <a
                  href={item.cta.href}
                  className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-400"
                >
                  {item.cta.label} →
                </a>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase text-indigo-200">Signals & insights</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Quick hits from the FINEX desk</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => (
              <Card key={highlight.title}>
                <h3 className="text-lg font-semibold text-slate-900">{highlight.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{highlight.detail}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase text-indigo-200">Stay connected</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Resources mentioned across our updates</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource.title}>
                <h3 className="text-lg font-semibold text-slate-900">{resource.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{resource.description}</p>
                <a
                  href={resource.href}
                  className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-400"
                >
                  Visit resource →
                </a>
              </Card>
            ))}
          </div>
          <div className="rounded-3xl bg-white/90 p-8 text-center text-slate-900 shadow-2xl shadow-slate-900/10 ring-1 ring-black/5">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Newsletter</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">Get news in your inbox</h3>
            <p className="mt-3 text-sm text-slate-600">
              Quarterly digest with tax deadlines, regulatory alerts, and practice availability. No spam, unsubscribe anytime.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <input
                type="email"
                placeholder="Email address"
                className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none sm:w-72"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Section>
      </main>
    </div>
  );
}
