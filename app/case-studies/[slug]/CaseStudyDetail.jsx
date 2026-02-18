"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CaseStudyDetail({ data }) {
  return (
    <section className="bg-black text-white">

      {/* ================= HERO ================= */}
      <div className="relative h-\[700px] w-full overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          priority
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-56">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            {data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 text-gray-300 text-xl max-w-3xl leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>
      </div>

      {/* ================= EXECUTIVE SUMMARY ================= */}
      <Section
        title="Executive Summary"
        
        text={data.executiveSummary}
      />

      {/* ================= CHALLENGE ================= */}
      <Section
        title="The Challenge"
        text={data.challenge}
      />

      {/* ================= STRATEGY ================= */}
      <Section
        title="Strategy & Research"
        text={data.strategy}
      />

      {/* ================= ARCHITECTURE ================= */}
      <Section
        title="System Architecture"
        text={data.architecture}
      />

      {/* ================= IMPLEMENTATION ================= */}
      <Section
        title="Implementation & Engineering"
        text={data.implementation}
      />

      {/* ================= PERFORMANCE ================= */}
      <Section
        title="Performance Optimization"
        text={data.performance}
      />

      {/* ================= SECURITY ================= */}
      <Section
        title="Security & Compliance"
        text={data.security}
      />

      {/* ================= SCALING ================= */}
      <Section
        title="Scaling Strategy"
        text={data.scaling}
      />

      {/* ================= METRICS ================= */}
      <div className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Measurable Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {data.metrics.map((metric, index) => (
            <Metric key={index} metric={metric} />
          ))}
        </div>
      </div>

      {/* ================= TECH STACK ================= */}
      <div className="bg-white/5 py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Technology Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {data.stack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-white/10 rounded-full text-sm border border-white/20"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BUSINESS IMPACT ================= */}
      <Section
        title="Business Impact"
        text={data.results}
      />

      {/* ================= CTA ================= */}
      <div className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to build something transformative?
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          Let’s design your next high-performance digital platform.
        </p>

        <button className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
          Start a Project
        </button>
      </div>

    </section>
  );
}

/* ================= REUSABLE SECTION ================= */

function Section({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-6 py-24"
    >
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <p className="text-gray-400 text-lg leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}

/* ================= METRIC COUNTER ================= */

function Metric({ metric }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = metric.value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [metric.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10 text-center"
    >
      <div className="text-5xl font-bold">
        {Math.floor(count).toLocaleString()}
      </div>
      <div className="text-gray-400 mt-4 text-lg">
        {metric.label}
      </div>
    </motion.div>
  );
}
