import "./globals.css";

export const metadata = {
  title: "Income Tax – Stress-Free Filing",
  description:
    "Modern tax prep for individuals and businesses. Transparent pricing, fast turnaround, and year-round support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {/* No global header — homepage handles its own nav */}
        <main>{children}</main>
      </body>
    </html>
  );
}
