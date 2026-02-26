"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

function Counter({ end, startAnimation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, startAnimation]);

  return <span>{count}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      number: 37,
      label: "Projects Delivered",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: 19,
      label: "Happy Clients Worldwide",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      number: 3,
      label: "Years of Industry Experience",
      gradient: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#111827] text-white">

      {/* Background Glow Blobs */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-600/30 rounded-full blur-[100px] sm:blur-[120px]" />
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-600/30 rounded-full blur-[100px] sm:blur-[120px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Delivering Impact Through Innovation
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2 sm:px-0">
            At{" "}
            <span className="text-purple-400 font-semibold">
              Quantum Tech Stack
            </span>
            , we build scalable digital products that empower businesses to grow
            faster, operate smarter, and innovate confidently. From startups to
            enterprise clients, our solutions are crafted with precision,
            performance, and long-term vision.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 150 }}
              className="relative group"
            >
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl transition-all duration-500">

                <h2
                  className={`text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  <Counter end={stat.number} startAnimation={isInView} />+
                </h2>

                <p className="mt-6 text-base sm:text-lg text-gray-300">
                  {stat.label}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Line + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-gray-400 text-base sm:text-lg px-2 sm:px-0">
            Trusted by startups, scale-ups, and enterprise innovators across
            the globe.
          </p>

          <div className="mt-8">
            <Link href="/contact">
  <button className="px-6 sm:px-8 py-3  cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition w-full sm:w-auto">
    Start Your Project With Us
  </button>
</Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
