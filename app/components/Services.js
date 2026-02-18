"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Services() {
  const services = [
    {
      icon: "⚛️",
      title: "MERN Stack Development",
      desc: "Build modern, scalable full-stack web applications using MongoDB, Express, React & Node.",
    },
    {
      icon: "🚀",
      title: "Custom SaaS Platforms",
      desc: "Design, build and launch SaaS systems that scale with your business.",
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps Solutions",
      desc: "CI/CD automation, deployment strategies, and scalable cloud infrastructure.",
    },
    {
      icon: "📈",
      title: "AI & Data Analytics",
      desc: "Transform data into insights with intelligent analytics and reporting.",
    },
    {
      icon: "🔐",
      title: "API & Backend Systems",
      desc: "Secure, high-performance backends with REST, GraphQL and microservices.",
    },
    {
      icon: "🎨",
      title: "UI/UX & Product Design",
      desc: "Intuitive interfaces and design thinking for better user engagement.",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=3840&q=100",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=3840&q=100",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=3840&q=100",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=3840&q=100",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">

      {/* Background Slider */}
      <motion.div
        className="absolute inset-0 flex"
        animate={{ x: `-${current * 100}%` }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative max-w-7xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12"
        >
          What We Do
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/15 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-white/20"
            >
              <div className="text-4xl md:text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-200 text-sm md:text-base">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
