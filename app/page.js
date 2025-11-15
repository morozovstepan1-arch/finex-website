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
  <div className={`rounded-2xl shadow-sm ring-1 ring-white/10 bg-white/90 backdrop-blur ${className}`}>
    {children}
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/30 px-3 py-1 text-xs font-medium backdrop-blur">
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
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="text-sm text-slate-200">{children}</p>
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
        // NYC sunrise over Brooklyn Bridge background
        backgroundImage:
          "linear-gradient(rgba(0,5,25,0.78), rgba(0,5,25,0.78)), url('/brooklyn-bridge-sunrise.jpg')",
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

            <nav className="hidden gap-6
