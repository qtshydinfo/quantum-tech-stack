"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "saas-analytics",
    title: "Enterprise SaaS Analytics Platform",
    desc: "Scalable dashboard built with MERN & microservices.",
  },
  {
    slug: "ecommerce-platform",
    title: "Global E-Commerce Platform",
    desc: "High-performance commerce system with secure payments.",
  },
  {
    slug: "ai-automation",
    title: "AI Business Automation Suite",
    desc: "AI-driven workflow optimization tools.",
  },
  {
    slug: "fintech-app",
    title: "FinTech Investment Application",
    desc: "Secure financial management & portfolio tracking.",
  },
  {
    slug: "healthcare-system",
    title: "Healthcare Management System",
    desc: "Patient records, appointment & billing automation.",
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Listing Platform",
    desc: "Property marketplace with dynamic filtering.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white px-6 md:px-20 py-32">

      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-purple-400 mb-6">
          Our Portfolio
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of enterprise-grade solutions engineered for scale,
          performance, and measurable impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6">
              {project.desc}
            </p>
            <Link
              href={`/portfolio/${project.slug}`}
              className="text-purple-400 hover:text-purple-300 font-semibold"
            >
              View Case Study →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
