"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

export default function TrustedBy() {
  const [active, setActive] = useState(null);

  const companies = [
    { name: "StartupX", desc: "AI-driven SaaS platform helping startups scale globally." },
    { name: "Cloudify", desc: "Enterprise cloud infrastructure and DevOps solutions." },
    { name: "DevCore", desc: "Custom software engineering and enterprise systems." },
    { name: "NextGen", desc: "Next-generation digital transformation company." },
    { name: "TechNova", desc: "Innovative AI and automation solutions provider." },
    { name: "ScaleHub", desc: "Growth-focused product development studio." },
    { name: "InnovaSoft", desc: "Secure fintech and SaaS software company." },
    { name: "FutureStack", desc: "Modern full-stack development and AI integration." }
  ];

  const duplicated = useMemo(() => {
    return [...companies, ...companies];
  }, []);

  return (
    <section className="py-28 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 uppercase tracking-[0.4em] text-sm">
            Trusted by Innovative Companies
          </p>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
            Powering Global Brands & Fast-Growing Startups
          </h2>
        </motion.div>

        {/* Marquee */}
        <div className="relative mt-16 perspective-[1200px]">

          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 10, // Smooth slow scroll
              ease: "linear"
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {duplicated.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                whileHover={{ rotateY: 15, rotateX: 10, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={() => setActive(company)}
                className="text-gray-400 text-xl md:text-2xl font-semibold cursor-pointer bg-white/5 px-8 py-5 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg hover:shadow-blue-500/30 transform-gpu"
              >
                {company.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="fixed inset-0 flex items-center justify-center z-50 px-6"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-10 max-w-lg w-full shadow-2xl text-center">
                <h3 className="text-3xl font-bold text-white mb-6">
                  {active.name}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {active.desc}
                </p>

                <button
                  onClick={() => setActive(null)}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
