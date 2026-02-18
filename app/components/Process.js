"use client";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategic Planning",
      description:
        "We begin by understanding your business goals, target audience, and technical requirements to craft a strategic roadmap tailored for success.",
    },
    {
      number: "02",
      title: "Design & Experience Prototyping",
      description:
        "Our design team transforms concepts into intuitive user experiences through wireframes, UI systems, and interactive prototypes.",
    },
    {
      number: "03",
      title: "Development & Engineering",
      description:
        "Using modern technologies and scalable architecture, we build secure, high-performance digital solutions optimized for growth.",
    },
    {
      number: "04",
      title: "Launch, Optimization & Support",
      description:
        "After rigorous testing and deployment, we provide continuous monitoring, updates, and optimization for long-term success.",
    },
  ];

  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden">

      <div className="max-w-7xl mx-auto text-center">

        {/* 🔥 Enhanced Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Proven Development Process
          </h2>

          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We follow a strategic, transparent, and results-driven methodology to transform
            ideas into scalable digital solutions. From discovery to post-launch support,
            our structured workflow ensures innovation, efficiency, and measurable impact.
          </p>
        </motion.div>

        {/* Timeline Line (Desktop) */}
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/30 via-blue-400 to-blue-500/30 -translate-y-1/2"></div>

          {/* Steps Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid md:grid-cols-4 gap-10 relative"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-blue-500/20 transition duration-500 group"
              >
                {/* Large Background Number */}
                <div className="absolute top-6 right-6 text-7xl font-extrabold text-white/5 group-hover:text-blue-500/10 transition duration-500">
                  {step.number}
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute -top-6 left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-black shadow-lg"></div>

                <h3 className="text-lg font-semibold text-blue-400 mb-4 tracking-wide">
                  Step {step.number}
                </h3>

                <h4 className="text-xl font-bold text-white mb-4 leading-snug">
                  {step.title}
                </h4>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>

              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
