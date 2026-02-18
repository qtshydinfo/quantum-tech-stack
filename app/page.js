"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Added
import Services from "./components/Services";
import Process from "./components/Process";
import TrustedBy from "./components/TrustedBy";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import { motion, AnimatePresence } from "framer-motion";
import TechOrbit from "./components/TechOrbit";
import AnimatedBackground from "./components/AnimatedBackground";
import SectionWrapper from "./components/SectionWrapper";
import Footer from "./components/Footer";

export default function Home() {

  const router = useRouter(); // ✅ Added

  /* =========================
     ROTATING TEXT
  ==========================*/
  const words = [
    "MERN Stack",
    "SaaS Platform",
    "Enterprise Sys",
    "Cloud System",
    "DevOps System",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const rotatingText = words[index];

  return (
    <>
      <Navbar />

      {/* ===== Shared Animated Background Wrapper ===== */}
      <div className="relative overflow-hidden text-white bg-black">

        {/* 3D Animated Background */}
        <AnimatedBackground />

        {/* ================= HERO SECTION ================= */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-center text-center px-4 sm:px-6 relative z-10">

          <div className="w-full max-w-7xl">

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight flex flex-col md:flex-row items-center justify-center md:whitespace-nowrap">

              <span className="md:px-4 shrink-0">
                We&nbsp;Build&nbsp;Scalable&nbsp;
              </span>

              <span className="relative inline-block w-[240px] sm:w-[300px] md:w-[420px] h-[40px] sm:h-[60px] md:h-[72px] shrink-0">

                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center text-blue-400 whitespace-nowrap"
                  >
                    {rotatingText}
                  </motion.span>
                </AnimatePresence>

              </span>

              <span className="md:px-4 shrink-0">
                &nbsp;Applications
              </span>

            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-2">
              Quantum Tech Stack helps startups and enterprises build secure,
              high-performance web applications with modern technologies.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => router.push("/contact")} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
                Get Free Consultation
              </button>

              {/* ✅ Modified Only This Button */}
              <button
                onClick={() => router.push("/portfolio")}
                className="px-6 py-3 border border-white text-white rounded-lg cursor-pointer hover:bg-white hover:text-black transition w-full sm:w-auto"
              >
                View Portfolio
              </button>
            </div>

          </div>
        </section>

        {/* ================= TECHNOLOGIES SECTION ================= */}
        <div className="relative z-10">
          <TechOrbit />
        </div>

      </div>

      {/* Remaining sections normal background */}
      <SectionWrapper>
        <Stats />
      </SectionWrapper>

      <SectionWrapper delay={0.1}>
        <Services />
      </SectionWrapper>

      <SectionWrapper delay={0.2}>
        <Process />
      </SectionWrapper>

      <SectionWrapper delay={0.3}>
        <TrustedBy />
      </SectionWrapper>

      <SectionWrapper delay={0.4}>
        <CaseStudies />
      </SectionWrapper>

      <SectionWrapper delay={0.5}>
        <Testimonials />
      </SectionWrapper>
    </>
  );
}
