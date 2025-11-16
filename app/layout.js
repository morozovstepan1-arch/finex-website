// app/layout.js

import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Income Tax – Stress-Free Filing",
  description:
    "Modern tax prep for individuals and businesses. Transparent pricing, fast turnaround, and year-round support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="min-h-screen flex flex-col">
          {/* Global header / nav */}
          <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <Link
                href="/"
                className="text-sm sm:text-base font-semibold tracking-tight"
              >
                eztax<span className="text-emerald-400">.app</span>
              </Link>

              <nav className="flex items-center gap-5 text-xs sm:text-sm text-slate-300">
                <Link href="/" className="hover:text-emerald-300">
                  Home
                </Link>
                <Link
                  href="/#services"
                  className="hover:text-emerald-300 hidden sm:inline"
                >
                  Services
                </Link>
                <Link
                  href="/#contact"
                  className="hover:text-emerald-300 hidden sm:inline"
                >
                  Contact
                </Link>
                <Link href="/news" className="hover:text-emerald-300">
                  News
                </Link>
              </nav>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
