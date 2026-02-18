"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function CaseStudies() {
  const router = useRouter();

  const cases = [
    {
      slug: "saas-analytics-platform",
      title: "SaaS Analytics Platform",
      desc: "Built a scalable MERN-based analytics dashboard handling 100k+ users.",
      tag: "SaaS",
    },
    {
      slug: "ecommerce-web-app",
      title: "E-Commerce Web App",
      desc: "Developed full-stack e-commerce platform with secure payments.",
      tag: "E-Commerce",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white px-6 relative overflow-hidden">

      <div className="max-w-7xl mx-auto text-center">

        {/* Premium Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Real Results. Real Impact.
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            We craft digital experiences engineered for performance,
            scalability, and measurable growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-16 perspective-[1500px]">
          {cases.map((item, index) => (
            <MagneticCard
              key={index}
              item={item}
              onClick={() =>
                router.push(`/case-studies/${item.slug}`)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MagneticCard({ item, onClick }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      layoutId={item.slug}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className="cursor-pointer bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden transition-transform duration-200 ease-out transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Spotlight effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />

        {/* Top Image Section */}
        <div
          className="h-64 relative flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              item.slug === "saas-analytics-platform"
                ? "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop')"
                : "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop')",
          }}
        >

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          <span className="absolute top-4 left-4 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full shadow z-10">
            {item.tag}
          </span>

          <motion.div
            className="relative z-10 text-white text-xl font-semibold"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            View Project →
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-10 text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
