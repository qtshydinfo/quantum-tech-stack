"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Quantum Tech Stack transformed our idea into a scalable SaaS product with exceptional performance and architecture clarity.",
      name: "CEO, StartupX",
    },
    {
      text: "Highly professional team with deep MERN expertise and outstanding execution discipline.",
      name: "Founder, DevCore",
    },
    {
      text: "Our platform now scales globally without performance bottlenecks. Truly transformative work.",
      name: "CTO, ScaleFlow",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-40 bg-black text-white overflow-hidden">

      {/* Animated Floating Orbs */}
      <FloatingOrb className="top-[-100px] left-[-100px]" size={500} />
      <FloatingOrb className="bottom-[-120px] right-[-100px]" size={600} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-24"
        >
          What Our Clients Say
        </motion.h2>

        {/* Carousel */}
        <div className="relative h-[350px] flex items-center justify-center">

          {testimonials.map((item, i) => {
            const isActive = i === index;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.9,
                }}
                transition={{ duration: 0.8 }}
                className="absolute w-full"
              >
                {isActive && <PremiumCard item={item} />}
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

/* ================= PREMIUM CARD ================= */

function PremiumCard({ item }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set((y - centerY) / 20);
    rotateY.set((centerX - x) / 20);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="relative mx-auto max-w-3xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-14 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
    >

      {/* Gradient Border Glow */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] -z-10"
      />

      {/* Stars */}
      <div className="flex justify-center mb-8 gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Star size={20} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl leading-relaxed text-gray-200"
      >
        “{item.text}”
      </motion.p>

      {/* Name */}
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-lg font-semibold text-white"
      >
        — {item.name}
      </motion.h4>
    </motion.div>
  );
}

/* ================= FLOATING BACKGROUND ORB ================= */

function FloatingOrb({ className, size }) {
  return (
    <motion.div
      animate={{
        y: [0, 40, 0],
        x: [0, -30, 0],
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
