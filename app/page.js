
"use client";

import React, { useState } from "react";
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
  <div className={`rounded-2xl shadow-sm ring-1 ring-slate-900/10 bg-white ${className}`}>{children}</div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur">
    {children}
  </span>
);

const Button = ({ as = "a", href = "#", children, className = "", ...props }) => {
  const Comp = as;
  return (
    <Comp
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm ring-1 ring-black/10 transition hover:-translate-y-[1px] active:translate-y-0 ${className}`}
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
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="text-sm text-slate-600">{children}</p>
    </div>
  </div>
);

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-900/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm text-slate-600">{a}</p>}
    </div>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50 text-zinc-900">
      {/* Nav */}
      <div className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 ring-1 ring-slate-900/10">
        <Section className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Calculator className="h-5 w-5" />
            </div>
            FINEX Tax Preparation
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a className="hover:opacity-70" href="#services">Services</a>
            <a className="hover:opacity-70" href="#pricing">Pricing</a>
            <a className="hover:opacity-70" href="#process">Process</a>
            <a className="hover:opacity-70" href="#academy">Tax Academy</a>
            <a className="hover:opacity-70" href="#news">News</a>
            <a className="hover:opacity-70" href="#faq">FAQ</a>
            <a className="hover:opacity-70" href="#contact">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button href="https://calendly.com/finex101" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white hover:shadow-md">Book Now</Button>
            <Button href="https://app.taxdome.com/login" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 ring-indigo-200 hover:shadow-sm">Client Portal</Button>
          </div>
        </Section>
      </div>

      {/* Hero */}
      <Section id="home" className="pt-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <div>
            <Pill>Stress-free filing. Expert results.</Pill>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Modern tax prep for busy people and growing businesses
            </h1>
            <p className="mt-4 text-base text-slate-600">
              Transparent pricing, fast turnaround, and year-round support from licensed professionals.
              We handle the forms; you keep your focus.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="https://calendly.com/finex101" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white hover:shadow-md">Book Now</Button>
              <Button href="https://app.taxdome.com/login" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900">Client Portal</Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1"><Star className="h-4 w-4 fill-black" /> 4.9/5 rated service</div>
              <div className="hidden h-3 w-px bg-indigo-600/10 sm:block" />
              <div>Enrolled Agent • Notary • FINRA Licensed</div>
            </div>
          </div>
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm font-medium text-indigo-700">
              <ShieldCheck className="h-5 w-5" /> Secure client portal
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <ListItem icon={FileText} title="Individual & Family Returns">
                W-2 & 1099 income, investments/RSUs, rentals (Schedule E), foreign accounts (FBAR/FATCA), ITIN.
              </ListItem>
              <ListItem icon={Calculator} title="Business & Self-Employed">
                S-Corp, C-Corp, Partnership, Schedule C, 1099/K-1.
              </ListItem>
              <ListItem icon={ShieldCheck} title="Audit Defense">
                Notice responses and representation with the IRS & states.
              </ListItem>
              <ListItem icon={Clock} title="Year-Round Support">
                Quarterly tax planning and mid-year check-ins.
              </ListItem>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Trust */}
      <Section className="pb-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-60">
          <span className="text-xs">Trusted by 500+ clients</span>
          <span className="text-xs">IRS Enrolled Agents</span>
          <span className="text-xs">E-File Provider</span>
          <span className="text-xs">Secure Document Vault</span>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">What we do</h2>
          <p className="mt-3 text-slate-600">Full-service preparation, smart planning, and proactive advice.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Individuals</h3>
            <p className="mt-2 text-sm text-slate-600">W-2 & 1099 income, investments/RSUs, rentals (Schedule E), foreign accounts (FBAR/FATCA), ITIN.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Maximize credits & deductions</li>
              <li>Multi-state + nonresident returns</li>
              <li>Amendments & prior-year reviews</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Businesses</h3>
            <p className="mt-2 text-sm text-slate-600">LLC/Partnerships, S-Corp & C-Corp returns, sales & payroll tax, reasonable comp, quarterly planning.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Entity selection, setup & S-Corp elections</li>
              <li>Quarterly estimates & cash-flow planning</li>
              <li>Year-end close & compliance</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Advisory</h3>
            <p className="mt-2 text-sm text-slate-600">Proactive strategies to reduce tax liability and plan cash flow year-round.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Tax strategy & projections</li>
              <li>IRS/State notice resolution</li>
              <li>Bookkeeping review & cleanup</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Process */}
      <Section id="process" className="py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">How it works</h2>
          <p className="mt-3 text-slate-600">A streamlined, three-step process that respects your time.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {["Upload", "Prepare", "File"].map((step, i) => (
            <Card key={step} className="p-6">
              <div className="text-sm font-semibold text-slate-500">Step {i + 1}</div>
              <h3 className="mt-1 text-lg font-semibold">{step}</h3>
              <p className="mt-2 text-sm text-slate-600">
                {i === 0 && "Securely submit your docs via our portal or in person."}
                {i === 1 && "We review, advise on deductions, and confirm everything with you."}
                {i === 2 && "We e-file and share your final return and next steps."}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Only pay for what you need. No hidden fees.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { name: "Starter 1040", price: "$199+", points: ["W-2 income","Standard deductions","E-file & transcript check"], cta: "Book Starter" },
            { name: "Pro Individual", price: "$399+", points: ["Itemized or investments","Rental, 1099, HSAs","Multi-state supported"], cta: "Book Pro", highlight: true },
            { name: "Business", price: "$899+", points: ["S-Corp / Partnership / C-Corp","Year-end tax planning","K-1s and state filings"], cta: "Book Business" },
          ].map((tier) => (
            <Card key={tier.name} className={`p-6 ${tier.highlight ? "ring-2 ring-black" : ""}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <div className="text-2xl font-extrabold">{tier.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {tier.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> {p}
                  </li>
                ))}
              </ul>
              <Button href="https://calendly.com/finex101" target="_blank" rel="noopener noreferrer" className="mt-6 w-full bg-indigo-600 text-white">
                {tier.cta}
              </Button>
              <p className="mt-3 text-xs text-slate-400">Final quote after document review.</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Tax Academy */}
      <Section id="academy" className="py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">FINEX Tax Academy</h2>
          <p className="mt-3 text-slate-600">Hands‑on training for aspiring tax pros. Choose a plan and get practical setup, software practice, and mentorship.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">PLAN 1</h3>
              <div className="text-2xl font-extrabold">$990</div>
            </div>
            <p className="mt-1 text-xs text-slate-500">Duration: 1 week</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> Individual Taxation</li>
            </ul>
            <a href="https://calendly.com/finex101" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white ring-1 ring-indigo-200 hover:shadow-md">Enroll (Calendly)</a>
          </Card>
          <Card className="p-6 ring-2 ring-black">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">PLAN 2</h3>
              <div className="text-2xl font-extrabold">$1,990</div>
            </div>
            <p className="mt-1 text-xs text-slate-500">Duration: 2 weeks</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> Individual Taxation</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> Business Formation</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> ERO (e‑filing) Setup</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> Tax Prep Software (practice)</li>
            </ul>
            <a href="https://calendly.com/finex101" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white ring-1 ring-indigo-200 hover:shadow-md">Enroll (Calendly)</a>
          </Card>
          <Card className="p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">PLAN 3</h3>
              <div className="text-2xl font-extrabold">$3,990</div>
            </div>
            <p className="mt-1 text-xs text-slate-500">Duration: 4 weeks</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> Individual Taxation</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> Business Formation</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> ERO (e‑filing) Setup</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> CRM (practice)</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> Tax Prep Software (practice)</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> Corporate Return</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> Partnership Return</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> NYS Tax Pro Account</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> Schedule EA Exam</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> Mentorship 3 months after</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" /> Video lessons access +6 months</li>
            </ul>
            <a href="https://calendly.com/finex101" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white ring-1 ring-indigo-200 hover:shadow-md">Enroll (Calendly)</a>
          </Card>
        </div>
      </Section>

      {/* News & Updates */}
      <Section id="news" className="py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">News & Updates</h2>
          <p className="mt-3 text-slate-600">Deadlines, tax law changes, and FINEX announcements.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { date: "Nov 2025", title: "Year-End Tax Planning Checklist", blurb: "Top deductions, retirement contributions, and planning moves before Dec 31.", href: "#" },
            { date: "Oct 2025", title: "Quarterly Estimates Reminder", blurb: "If you’re self-employed, the next estimated tax deadline is approaching.", href: "#" },
            { date: "Sep 2025", title: "Small Business Credits to Watch", blurb: "A quick overview of credits that might reduce your business tax bill.", href: "#" },
          ].map((item) => (
            <Card key={item.title} className="p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.date}</div>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.blurb}</p>
              <a href={item.href} className="mt-4 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white ring-1 ring-indigo-200 hover:shadow-md">Read more</a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials (updated with different reviews) */}
      <Section className="py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Clients say it best</h2>
          <p className="mt-3 text-slate-600">Real stories from individuals and business owners.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { text: "FINEX made my first year as an S‑Corp painless. They explained reasonable comp, set up my payroll correctly, and found deductions I didn’t know about.", author: "— Sarah P., E‑commerce Founder" },
            { text: "Clear pricing, fast communication, and they handled my multi‑state filing without any surprises. Best tax experience I’ve had in years.", author: "— Daniel K., Software Consultant" },
            { text: "They reviewed a prior‑year return and caught missed credits, then set up quarterly plan so I’m never behind again. Highly recommend.", author: "— Maya R., Real Estate Investor" },
          ].map((item, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-700">“{item.text}”</p>
              <p className="mt-4 text-xs font-medium text-slate-500">{item.author}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">FAQ</h2>
          <p className="mt-3 text-slate-600">Answers to common questions about our process and pricing.</p>
        </div>
        <div className="mx-auto mt-6 max-w-3xl">
          <FaqItem q="How fast can you complete my return?" a="Most individual returns are completed within 3–5 business days once we have all documents. Expedited options are available." />
          <FaqItem q="Do you work with clients outside New York?" a="Yes. We serve clients in all 50 states and can meet virtually via our secure portal." />
          <FaqItem q="What should I bring to our first meeting?" a="Photo ID, last year’s return, and all current-year tax documents (W-2, 1099, 1098, etc.). We’ll send a checklist." />
          <FaqItem q="How does pricing work?" a="We publish transparent base pricing and provide a firm quote after a quick document review. You only pay once you approve." />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-14">
        <Card className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          <div>
            <h3 className="text-xl font-bold">Talk to a tax pro</h3>
            <p className="mt-2 text-sm text-slate-600">Share a few details and we’ll reply within one business day.</p>
            <div className="mt-6 space-y-3 text-sm">
              <a className="flex items-center gap-2" href="mailto:1@finex101.com"><Mail className="h-4 w-4" /> 1@finex101.com</a>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> New York, NY</div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://calendly.com/finex101" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm ring-1 ring-indigo-200 bg-indigo-600 text-white hover:shadow-md">Book Now</a>
                <a href="https://app.taxdome.com/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm ring-1 ring-black/10 bg-white text-slate-900 hover:shadow-sm">Client Portal</a>
              </div>
            </div>
          </div>
          <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Name</label>
              <input className="rounded-xl border border-slate-900/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/20" placeholder="Your full name" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="rounded-xl border border-slate-900/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/20" placeholder="you@domain.com" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">What do you need help with?</label>
              <select className="rounded-xl border border-slate-900/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/20">
                <option>Individual tax return</option>
                <option>Business tax return</option>
                <option>Tax planning</option>
                <option>IRS/State notice</option>
                <option>Other</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Message</label>
              <textarea rows={4} className="rounded-xl border border-slate-900/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/20" placeholder="Tell us a bit about your situation" />
            </div>
            <Button as="button" className="bg-indigo-600 text-white">Send message</Button>
            <p className="text-xs text-slate-400">By submitting, you agree to our friendly privacy policy.</p>
          </form>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="mt-8 border-t border-slate-900/10 bg-white">
        <Section className="grid gap-6 py-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Calculator className="h-5 w-5" />
              </div>
              FINEX Tax Preparation
            </div>
            <p className="mt-3 text-sm text-slate-600">© {new Date().getFullYear()} FINEX. All rights reserved.</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Navigation</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="#services" className="hover:opacity-70">Services</a></li>
              <li><a href="#pricing" className="hover:opacity-70">Pricing</a></li>
              <li><a href="#process" className="hover:opacity-70">Process</a></li>
              <li><a href="#academy" className="hover:opacity-70">Tax Academy</a></li>
              <li><a href="#news" className="hover:opacity-70">News</a></li>
              <li><a href="#faq" className="hover:opacity-70">FAQ</a></li>
              <li><a href="#contact" className="hover:opacity-70">Contact</a></li>
              <li><a href="https://app.taxdome.com/login" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">Client Portal</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> 1@finex101.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> New York, NY</li>
            </ul>
          </div>
        </Section>
      </footer>
    </div>
  );
}
