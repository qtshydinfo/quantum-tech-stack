"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 20);

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;

      setScrollProgress(progress);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // update immediately

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);


  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          showNav ? "top-0" : "-top-24"
        } ${
          scrolled
            ? "bg-black/40 backdrop-blur-lg shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl tracking-wide relative group">
  <span className="bg-gradient-to-r from-gray-200 via-blue-400 to-indigo-600 bg-clip-text text-transparent"
>
    Quantum Tech Stack
  </span>

  {/* Shine animation layer */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 animate-shine pointer-events-none"></span>
</h1>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 items-center font-medium text-white relative">

            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>

            {/* MEGA MENU */}
            <div
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              className="relative"
            >
              <button className="hover:text-blue-400 transition">
                Solutions ▾
              </button>

              {megaOpen && (
                <div className="absolute top-10 left-0 bg-black/95 backdrop-blur-xl shadow-2xl rounded-2xl p-8 w-[600px] grid grid-cols-2 gap-6 text-white border border-white/10">

                  <div>
                    <h4 className="font-bold mb-3 text-blue-400">
                      Development
                    </h4>
                    <p className="text-sm text-gray-300 hover:text-white cursor-pointer">
                      MERN Stack Apps
                    </p>
                    <p className="text-sm text-gray-300 hover:text-white cursor-pointer">
                      SaaS Platforms
                    </p>
                    <p className="text-sm text-gray-300 hover:text-white cursor-pointer">
                      API Systems
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 text-blue-400">
                      Enterprise
                    </h4>
                    <p className="text-sm text-gray-300 hover:text-white cursor-pointer">
                      Cloud Deployment
                    </p>
                    <p className="text-sm text-gray-300 hover:text-white cursor-pointer">
                      AI Automation
                    </p>
                    <p className="text-sm text-gray-300 hover:text-white cursor-pointer">
                      DevOps Services
                    </p>
                  </div>

                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
            <Link
                 href="/careers"
                 className="hover:text-blue-400 transition"
            >
             Careers
            </Link>

            {/* CTA */}
            <Link
              href="/contact"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Quote
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4 text-white">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block">
              Home
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block">
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block">
              Contact
            </Link>

            <button
              onClick={() => setDark(!dark)}
              className="mt-4 px-3 py-1 rounded-lg bg-gray-700 text-white"
            >
              {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
