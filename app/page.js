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
  <div className={`rounded-2xl shadow-sm ring-1 ring-slate-900/10 bg-white ${className}`}>
    {children}
  </div>
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

      {/* NAV */}
      <div className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur ring-1 ring-slate-900/10">
        <Section className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <div className="relative h-8 w-8 overflow-hidden rounded-xl">
              <Image src="/logo.png" alt="FINEX logo" fill sizes="32px" className="object-contain" />
            </div>
            FINEX Tax Preparation
          </a>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#pricing" className="hover:opacity-70">Pricing</a>
            <a href="#process" className="hover:opacity-70">Process</a>
            <a href="#academy" className="hover:opacity-70">Tax Academy</a>
            <a href="#news" className="hover:opacity-70">News</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button href="https://calendly.com/finex101" className="bg-indigo-600 text-white">Book Now</Button>
            <Button href="https://app.taxdome.com/login" className="bg-white text-slate-900">Client Portal</Button>
          </div>
        </Section>
      </div>


      {/* HERO */}
      <Section id="home" className="pt-16 pb-16">
        {/* ... your hero code unchanged ... */}
      </Section>

      {/* SERVICES, PROCESS, PRICING, ACADEMY, NEWS, TESTIMONIALS, FAQ — unchanged */}


      {/* CONTACT — EMAIL REMOVED */}
      <Section id="contact" className="py-14">
        <Card className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          <div>
            <h3 className="text-xl font-bold">Talk to a tax pro</h3>
            <p className="mt-2 text-sm text-slate-600">Share a few details and we’ll reply within one business day.</p>

            <div className="mt-6 space-y-3 text-sm">

              {/* EMAIL REMOVED */}

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> New York, NY
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://calendly.com/finex101" className="inline-flex rounded-2xl px-5 py-3 bg-indigo-600 text-white font-semibold">Book Now</a>
                <a href="https://app.taxdome.com/login" className="inline-flex rounded-2xl px-5 py-3 bg-white ring-1 ring-black/10">Client Portal</a>
              </div>
            </div>
          </div>

          {/* contact form remains the same */}
          <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium">Name</label>
              <input className="rounded-xl border px-3 py-2" placeholder="Your full name" />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="rounded-xl border px-3 py-2" placeholder="you@domain.com" />
            </div>

            <div>
              <label className="text-sm font-medium">What do you need help with?</label>
              <select className="rounded-xl border px-3 py-2">
                <option>Individual tax return</option>
                <option>Business tax return</option>
                <option>Tax planning</option>
                <option>IRS/State notice</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea rows={4} className="rounded-xl border px-3 py-2" placeholder="Tell us a bit about your situation"></textarea>
            </div>

            <Button as="button" className="bg-indigo-600 text-white">Send message</Button>
          </form>
        </Card>
      </Section>


      {/* FOOTER — EMAIL REMOVED */}
      <footer className="mt-8 border-t bg-white">
        <Section className="grid gap-6 py-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <div className="relative h-8 w-8 overflow-hidden rounded-xl">
                <Image src="/logo.png" alt="FINEX logo" fill sizes="32px" className="object-contain" />
              </div>
              FINEX Tax Preparation
            </div>
            <p className="mt-3 text-sm text-slate-600">© {new Date().getFullYear()} FINEX. All rights reserved.</p>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Navigation</div>
            <ul className="mt-2 space-y-2 text-slate-600">
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
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 space-y-2 text-slate-600">

              {/* EMAIL REMOVED */}

              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> New York, NY
              </li>
            </ul>
          </div>
        </Section>
      </footer>

    </div>
  );
}
