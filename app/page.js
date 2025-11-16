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
          "linear-gradient(rgba(0,5,25,0.78), rgba(0,5,25,0.78)), url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Optional cinematic overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      <div className="relative z-10">
        {/* NAV */}
        <div className="sticky top-0 z-40 w-full bg-black/30 backdrop-blur ring-1 ring-white/10">
          <Section className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2 font-semibold">
              <div className="relative h-8 w-8 overflow-hidden rounded-xl">
                <Image src="/logo.png" alt="FINEX logo" fill sizes="32px" className="object-contain" />
              </div>
              FINEX Tax Preparation
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

            <Card className="p-6 md:p-8">
              <div className="flex items-center gap-2 text-sm font-medium text-indigo-600">
                <ShieldCheck className="h-5 w-5 text-indigo-600" /> Secure client portal
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <ListItem icon={FileText} title="Individual & Family Returns">
                  W-2, 1099, investments, rentals, FBAR, ITIN.
                </ListItem>
                <ListItem icon={Calculator} title="Business & Self-Employed">
                  S-Corp, C-Corp, Partnerships, Schedule C.
                </ListItem>
                <ListItem icon={ShieldCheck} title="Audit Defense">
                  IRS & State notice resolution.
                </ListItem>
                <ListItem icon={Clock} title="Year-Round Support">
                  Quarterly planning + proactive advice.
                </ListItem>
              </div>
            </Card>
          </motion.div>
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
              <h3 className="text-lg font-semibold">Basic Individual Return</h3>
              <div className="mt-2 text-3xl font-extrabold">$199</div>
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
              <h3 className="text-lg font-semibold">Standard Return</h3>
              <div className="mt-2 text-3xl font-extrabold">$349</div>
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
                <div className="text-2xl font-extrabold">$599</div>
              </div>
              <p className="mt-1 text-xs text-slate-600">Duration: 1 week</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Individual Taxation
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
        <footer className="mt-8 border-t border-white/20 bg-black/30 backdrop-blur">
          <Section className="grid gap-6 py-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <div className="relative h-8 w-8 overflow-hidden rounded-xl">
                  <Image src="/logo.png" alt="FINEX logo" fill sizes="32px" className="object-contain" />
                </div>
                FINEX Tax Preparation
              </div>
              <p className="mt-3 text-sm text-slate-300">
                © {new Date().getFullYear()} FINEX. All rights reserved.
              </p>
            </div>

            <div className="text-sm">
              <div className="font-semibold text-white">Navigation</div>
              <ul className="mt-2 space-y-2 text-slate-300">
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#process">Process</a>
                </li>
                <li>
                  <a href="#academy">Tax Academy</a>
                </li>
                <li>
                  <a href="#news">News</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="https://app.taxdome.com/login">Client Portal</a>
                </li>
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
