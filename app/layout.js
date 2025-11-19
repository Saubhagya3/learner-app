import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Memorise AI",
  description: "AI-powered memorisation cards to master any subject or exam in less time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-[#04050c] text-slate-100 antialiased"
        suppressHydrationWarning={true}
      >
        <div className="min-h-screen bg-[linear-gradient(180deg,#05050b_0%,#171c30_45%,#05050b_100%)]">
          <div className="relative mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 sm:px-8 lg:px-10">
            <Navbar />
            <main className="flex-1 pt-28 pb-20 space-y-24">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
