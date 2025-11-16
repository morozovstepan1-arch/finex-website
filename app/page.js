"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calculator,
  FileText,
  ShieldCheck,
  Mail,
  MapPin,
  Clock,
  Star,
  Menu,
  X,
  ChevronRight,
  GraduationCap,
  Newspaper,
  HelpCircle,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Tax Academy", href: "#academy" },
  { label: "News", href: "#news" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 ${className}`}
  >
    {children}
  </section>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl bg-white/90 shadow-sm ring-1 ring-slate-200 backdrop-blur ${className}`}>
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
    {children}
  </span>
);

const PrimaryButton = ({ href, children }) => (
  <Link
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
  >
    {children}
  </Link>
);

const GhostButton = ({ href, children }) => (
  <Link
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
  >
    {children}
  </Link>
);

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.38),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(15,23,42,0.9),_transparent_55%)]" />

      {/* Shell */}
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 shadow-sm">
                <Calculator className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-white">
                  FINEX Tax Preparation
                </span>
                <span className="text-xs text-slate-300">Stress-free filing</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-6 text-xs font-medium text-slate-100 md:flex">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-sky-300"
                >
                  {item.label}
                </a>
              ))}
              <PrimaryButton href="https://calendly.com/finex101">
                Book Now
              </PrimaryButton>
              <GhostButton href="https://app.taxdome.com/login">
                Client Portal
              </GhostButton>
            </nav>

            {/* Mobile nav */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-slate-100 hover:bg-white/10 md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {mobileOpen && (
            <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
              <nav className="flex flex-col gap-2 text-sm text-slate-100">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2 py-1.5 hover:bg-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-2">
                <PrimaryButton href="https://calendly.com/finex101">
                  Book Now
                </PrimaryButton>
                <GhostButton href="https://app.taxdome.com/login">
                  Client Portal
                </GhostButton>
              </div>
            </div>
          )}
        </header>

        {/* Hero */}
        <Section id="top" className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.3fr)] lg:items-center">
            <div className="space-y-6">
              <Badge>4.9/5 rated • 500+ clients</Badge>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Modern tax preparation for busy people and growing businesses.
              </motion.h1>

              <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
                Transparent pricing, quick turnaround, and year-round help from
                licensed professionals. We handle the forms so you can stay
                focused on your life and business.
              </p>

              <div className="flex flex-wrap gap-3">
                <PrimaryButton href="https://calendly.com/finex101">
                  <span>Book a call</span>
                  <ChevronRight className="ml-1.5 h-4 w-4" />
                </PrimaryButton>
                <GhostButton href="https://app.taxdome.com/login">
                  Open Client Portal
                </GhostButton>
              </div>

              <dl className="mt-4 grid gap-4 text-xs text-slate-200 sm:grid-cols-3">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-sky-400" />
                  <div>
                    <dt className="font-semibold">Credentials</dt>
                    <dd>EA • Notary • FINRA licensed</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="mt-0.5 h-4 w-4 text-sky-400" />
                  <div>
                    <dt className="font-semibold">Secure portal</dt>
                    <dd>E-signature & document vault</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 text-sky-400" />
                  <div>
                    <dt className="font-semibold">Year-round support</dt>
                    <dd>Planning, estimates & notices</dd>
                  </div>
                </div>
              </dl>
            </div>

            <Card className="relative border border-sky-100/70 bg-white/95 p-6 shadow-xl shadow-sky-900/20">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                    Stress-free filing
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Start your 2024–2025 tax season with clarity.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-500">
                  <Star className="h-4 w-4 fill-amber-500" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-slate-500">/5</span>
                </div>
              </div>

              <div className="mt-5 space-y-3 rounded-xl bg-slate-50 p-4 text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span>Individuals & families</span>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700">
                    W-2 • 1099 • rentals • foreign
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Businesses & self-employed</span>
                  <span className="rounded-full bg-indigo-50 px-2 py-1 text-[11px] font-medium text-indigo-700">
                    LLC • S-Corp • C-Corp • K-1
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Audit & notice support</span>
                  <span className="rounded-full bg-rose-50 px-2 py-1 text-[11px] font-medium text-rose-700">
                    IRS & state letters
                  </span>
                </div>
              </div>

              <div className="mt-4 border-t border-slate-200 pt-4 text-xs text-slate-600">
                <p>Answer a few questions and we&apos;ll confirm pricing after reviewing your documents.</p>
              </div>

              <div className="mt-4 flex flex-col gap-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-sky-500" />
                  Registered IRS e-file provider
                </div>
                <div className="flex items-center gap-2">
                  <LockIcon />
                  Bank-level encryption & secure storage
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* Services */}
        <Section id="services">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                What we do
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                Full-service preparation, planning, and support for individuals,
                investors, and business owners.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border border-white/10 bg-slate-950/60 p-6 text-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/20">
                  <FileText className="h-4 w-4 text-sky-400" />
                </div>
                <h3 className="text-sm font-semibold">Individuals</h3>
              </div>
              <p className="mt-3 text-xs text-slate-300">
                Returns for W-2 & 1099 income, investment and RSU activity,
                rentals (Schedule E), foreign accounts and ITIN scenarios.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li>• Optimize deductions and credits</li>
                <li>• Multi-state & nonresident filings</li>
                <li>• Amend and review prior-year returns</li>
              </ul>
            </Card>

            <Card className="border border-white/10 bg-slate-950/60 p-6 text-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15">
                  <Calculator className="h-4 w-4 text-emerald-400" />
                </div>
                <h3 className="text-sm font-semibold">Businesses</h3>
              </div>
              <p className="mt-3 text-xs text-slate-300">
                Support for LLCs, partnerships, S-Corps and C-Corps including
                sales and payroll tax and year-end planning.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li>• Entity selection and setup</li>
                <li>• Reasonable compensation and estimates</li>
                <li>• Year-end close and compliance</li>
              </ul>
            </Card>

            <Card className="border border-white/10 bg-slate-950/60 p-6 text-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15">
                  <ShieldCheck className="h-4 w-4 text-amber-400" />
                </div>
                <h3 className="text-sm font-semibold">Advisory</h3>
              </div>
              <p className="mt-3 text-xs text-slate-300">
                Proactive tax strategy, cash-flow planning, and help responding
                to notices—so you&apos;re not just filing, you&apos;re planning.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li>• Projections and &quot;what-if&quot; planning</li>
                <li>• IRS & state notice resolution</li>
                <li>• Bookkeeping review and cleanup</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Process */}
        <Section id="process">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                How it works
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                A streamlined three-step process that respects your time while
                keeping you informed at every stage.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <StepCard
              step="Step 1"
              title="Upload"
              description="Securely upload your tax documents through the client portal or bring them in person."
            />
            <StepCard
              step="Step 2"
              title="Prepare"
              description="We review, identify tax opportunities, and walk you through the key decisions."
            />
            <StepCard
              step="Step 3"
              title="File"
              description="We e-file your return, share copies for your records, and outline next steps."
            />
          </div>
        </Section>

        {/* Pricing */}
        <Section id="pricing">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Simple, transparent pricing
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                You only pay for what you need. Final pricing is confirmed after
                document review—no surprise add-ons.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PricingCard
              name="Starter 1040"
              price="$199+"
              description="For straightforward individual returns."
              items={[
                "W-2 income",
                "Standard deduction",
                "E-file and transcript check",
              ]}
              cta="Book Starter"
            />
            <PricingCard
              name="Pro Individual"
              price="$399+"
              description="For more complex personal situations."
              items={[
                "Itemized deductions or investments",
                "Rentals, 1099s, HSAs",
                "Multi-state support",
              ]}
              highlighted
              cta="Book Pro"
            />
            <PricingCard
              name="Business"
              price="$899+"
              description="For LLCs, S-Corps, C-Corps and partnerships."
              items={[
                "Business returns and K-1s",
                "Year-end planning",
                "State filings as needed",
              ]}
              cta="Book Business"
            />
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Final quotes are provided after we review your documents and scope.
          </p>
        </Section>

        {/* Tax Academy */}
        <Section id="academy">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                <GraduationCap className="h-5 w-5 text-sky-400" />
                FINEX Tax Academy
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                Hands-on training for future tax professionals. Learn
                preparation, software, and practice setup with real-world
                examples.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <AcademyPlan
              name="PLAN 1"
              price="$599"
              duration="1 week"
              bullets={["Core individual taxation foundations."]}
            />
            <AcademyPlan
              name="PLAN 2"
              price="$2,000"
              duration="2 weeks"
              bullets={[
                "Individual taxation",
                "Business formation basics",
                "ERO (e-file) setup",
                "Tax prep software practice",
              ]}
            />
            <AcademyPlan
              name="PLAN 3"
              price="$4,000"
              duration="4 weeks"
              bullets={[
                "Individual & business taxation",
                "ERO setup and CRM practice",
                "Corporate & partnership returns",
                "NYS tax pro account walkthrough",
                "EA exam planning & 3-month mentorship",
                "Extended access to video lessons",
              ]}
            />
          </div>
        </Section>

        {/* News */}
        <Section id="news">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                <Newspaper className="h-5 w-5 text-sky-400" />
                News & updates
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                Deadlines, law changes, and FINEX announcements to keep you a
                step ahead of tax season.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <NewsCard
              month="Nov 2025"
              title="Year-end tax planning checklist"
              description="A concise list of deductions, retirement moves, and planning ideas to consider before December 31."
            />
            <NewsCard
              month="Oct 2025"
              title="Quarterly estimates reminder"
              description="If you&apos;re self-employed, don&apos;t miss the upcoming estimated tax deadline."
            />
            <NewsCard
              month="Sep 2025"
              title="Small business credits to watch"
              description="An overview of key credits that may lower your overall business tax bill."
            />
          </div>
        </Section>

        {/* Testimonials */}
        <Section id="testimonials">
          <div className="mb-8">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Clients say it best
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Real feedback from founders, consultants, and investors who use
              FINEX year after year.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="FINEX made my first year running an S-Corp smooth. Payroll, reasonable compensation, and deductions were all clearly explained."
              name="Sarah P."
              role="E-commerce founder"
            />
            <TestimonialCard
              quote="Straightforward pricing, quick replies, and no surprises—even with multi-state filings."
              name="Daniel K."
              role="Software consultant"
            />
            <TestimonialCard
              quote="They reviewed a prior-year return, found missed opportunities, and set up a quarterly plan so I never fall behind again."
              name="Maya R."
              role="Real estate investor"
            />
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                <HelpCircle className="h-5 w-5 text-sky-400" />
                Frequently asked questions
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                Answers to common questions about timing, pricing, and how to
                prepare for your first meeting.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FaqItem
              question="How fast can you complete my return?"
              answer="Turnaround depends on complexity and how complete your documents are, but many individual returns are finished within a few business days after everything is received."
            />
            <FaqItem
              question="Do you work with clients outside New York?"
              answer="Yes. We serve clients across the U.S. and can handle multi-state and nonresident filings where required."
            />
            <FaqItem
              question="What should I bring to our first meeting?"
              answer="Prior-year returns, current-year income documents (W-2, 1099, K-1, etc.), and any details on major life or business changes help us get you an accurate quote."
            />
            <FaqItem
              question="How does pricing work?"
              answer="We start with the ranges shown above, then finalize a quote after reviewing your documents and tax situation together."
            />
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" className="pb-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.5fr)]">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Talk to a tax pro
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                Share a few details about your situation and we&apos;ll follow
                up within one business day.
              </p>

              <dl className="mt-6 space-y-3 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-sky-400" />
                  <span>1@finex101.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-sky-400" />
                  <span>New York, NY</span>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <PrimaryButton href="https://calendly.com/finex101">
                  <PhoneCallIcon />
                  <span className="ml-1.5">Book a consultation</span>
                </PrimaryButton>
                <GhostButton href="https://app.taxdome.com/login">
                  Open Client Portal
                </GhostButton>
              </div>
            </div>

            <Card className="border border-white/10 bg-slate-950/80 p-6 text-slate-100">
              <form className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-200">
                    What do you need help with?
                  </label>
                  <div className="mt-2 grid gap-2 text-xs text-slate-200 sm:grid-cols-2">
                    {[
                      "Individual tax return",
                      "Business tax return",
                      "Tax planning",
                      "IRS/State notice",
                      "Other",
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-600 bg-slate-950/60 px-3 py-2 hover:border-sky-500"
                      >
                        <input
                          type="checkbox"
                          className="h-3.5 w-3.5 rounded border-slate-500 bg-slate-900 text-sky-500 focus:ring-sky-500"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-200">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="Share a bit about your situation or questions."
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Send message
                </button>

                <p className="text-[11px] leading-relaxed text-slate-400">
                  By submitting, you agree to our friendly privacy practices.
                </p>
              </form>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-medium text-slate-200">
                  FINEX Tax Preparation
                </p>
                <p>© {new Date().getFullYear()} FINEX. All rights reserved.</p>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href="#services" className="hover:text-sky-300">
                  Services
                </a>
                <a href="#pricing" className="hover:text-sky-300">
                  Pricing
                </a>
                <a href="#process" className="hover:text-sky-300">
                  Process
                </a>
                <a href="#academy" className="hover:text-sky-300">
                  Tax Academy
                </a>
                <a href="#news" className="hover:text-sky-300">
                  News
                </a>
                <a href="#faq" className="hover:text-sky-300">
                  FAQ
                </a>
                <a href="#contact" className="hover:text-sky-300">
                  Contact
                </a>
                <a
                  href="https://app.taxdome.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300"
                >
                  Client Portal
                </a>
              </div>
              <div className="space-y-1 text-right sm:text-left">
                <p>1@finex101.com</p>
                <p>New York, NY</p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

/* Helper components */

const StepCard = ({ step, title, description }) => (
  <Card className="border border-white/10 bg-slate-950/70 p-6 text-slate-100">
    <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
      {step}
    </p>
    <h3 className="mt-2 text-sm font-semibold">{title}</h3>
    <p className="mt-2 text-xs text-slate-300">{description}</p>
  </Card>
);

const PricingCard = ({ name, price, description, items, highlighted, cta }) => (
  <Card
    className={`flex h-full flex-col border ${
      highlighted
        ? "border-sky-400/60 bg-slate-950/80 shadow-lg shadow-sky-900/30"
        : "border-white/10 bg-slate-950/70"
    } p-6 text-slate-100`}
  >
    <div className="flex items-start justify-between gap-2">
      <div>
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="mt-1 text-xs text-slate-300">{description}</p>
      </div>
      {highlighted && (
        <span className="rounded-full bg-sky-500/15 px-2 py-1 text-[11px] font-medium text-sky-300">
          Most popular
        </span>
      )}
    </div>
    <p className="mt-4 text-2xl font-semibold text-white">{price}</p>
    <ul className="mt-4 space-y-2 text-xs text-slate-200">
      {items.map((item) => (
        <li key={item}>• {item}</li>
      ))}
    </ul>
    <div className="mt-6">
      <PrimaryButton href="https://calendly.com/finex101">
        {cta}
      </PrimaryButton>
    </div>
    <p className="mt-2 text-[11px] text-slate-400">
      Final quote after document review.
    </p>
  </Card>
);

const AcademyPlan = ({ name, price, duration, bullets }) => (
  <Card className="border border-white/10 bg-slate-950/70 p-6 text-slate-100">
    <div className="flex items-baseline justify-between gap-2">
      <h3 className="text-sm font-semibold">{name}</h3>
      <span className="text-sm font-semibold text-sky-300">{price}</span>
    </div>
    <p className="mt-1 text-xs text-slate-300">Duration: {duration}</p>
    <ul className="mt-4 space-y-2 text-xs text-slate-200">
      {bullets.map((b) => (
        <li key={b}>• {b}</li>
      ))}
    </ul>
    <div className="mt-5">
      <PrimaryButton href="https://calendly.com/finex101">
        Enroll (Calendly)
      </PrimaryButton>
    </div>
  </Card>
);

const NewsCard = ({ month, title, description }) => (
  <Card className="border border-white/10 bg-slate-950/70 p-5 text-slate-100">
    <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
      {month}
    </p>
    <h3 className="mt-1 text-sm font-semibold">{title}</h3>
    <p className="mt-2 text-xs text-slate-300">{description}</p>
    <button
      type="button"
      className="mt-3 inline-flex items-center text-xs font-semibold text-sky-300 hover:text-sky-200"
    >
      Read more
      <ChevronRight className="ml-1 h-3 w-3" />
    </button>
  </Card>
);

const TestimonialCard = ({ quote, name, role }) => (
  <Card className="border border-white/10 bg-slate-950/70 p-6 text-slate-100">
    <div className="flex gap-1 text-amber-400">
      <Star className="h-4 w-4 fill-amber-400" />
      <Star className="h-4 w-4 fill-amber-400" />
      <Star className="h-4 w-4 fill-amber-400" />
      <Star className="h-4 w-4 fill-amber-400" />
      <Star className="h-4 w-4 fill-amber-400" />
    </div>
    <p className="mt-3 text-xs text-slate-200">{quote}</p>
    <p className="mt-4 text-xs font-semibold text-slate-100">{name}</p>
    <p className="text-[11px] text-slate-400">{role}</p>
  </Card>
);

const FaqItem = ({ question, answer }) => (
  <Card className="border border-white/10 bg-slate-950/70 p-5 text-slate-100">
    <p className="text-xs font-semibold text-slate-100">{question}</p>
    <p className="mt-2 text-xs text-slate-300">{answer}</p>
  </Card>
);

const LockIcon = () => (
  <svg
    className="h-4 w-4 text-slate-500"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M7 10V8a5 5 0 0 1 10 0v2h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1zm2 0h6V8a3 3 0 0 0-6 0v2z"
      fill="currentColor"
    />
  </svg>
);

const PhoneCallIcon = () => (
  <span className="inline-flex items-center">
    <svg
      className="h-4 w-4 text-slate-100"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M6.6 3.2 8.9 3a2 2 0 0 1 2.1 1.4l.7 2.6a2 2 0 0 1-.5 1.9l-1.3 1.3a12.5 12.5 0 0 0 4.9 4.9l1.3-1.3a2 2 0 0 1 1.9-.5l2.6.7A2 2 0 0 1 22 17l-.2 2.3a2 2 0 0 1-2 1.7A17.5 17.5 0 0 1 3 6.2a2 2 0 0 1 1.7-2z"
        fill="currentColor"
      />
    </svg>
  </span>
);
