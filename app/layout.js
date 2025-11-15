export const metadata = {
  title: "Income Tax – Stress‑Free Filing",
  description: "Modern prep for individuals and businesses. Transparent pricing, fast turnaround, and year‑round support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-zinc-900">{children}</body>
    </html>
  );
}
