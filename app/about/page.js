"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Section animation
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Cards animation
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Fade-in elements
      const elements =
        sectionRef.current.querySelectorAll(".fade-in");

      elements.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-black to-purple-900/30 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            About Quantum Tech Stack
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            We build high-performance MERN stack applications and scalable
            digital products engineered for growth. Our mission is to transform
            bold ideas into powerful, production-ready software solutions.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {[
            {
              title: "🚀 Innovation First",
              desc: "We leverage cutting-edge technologies to build future-ready systems.",
            },
            {
              title: "⚡ Performance Driven",
              desc: "Optimized architecture ensuring speed, scalability, and reliability.",
            },
            {
              title: "🌍 Global Impact",
              desc: "Serving clients worldwide with enterprise-grade digital solutions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:scale-105 transition-transform duration-500 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-10 text-center mb-32">
          <Stat number="37+" label="Projects Delivered" />
          <Stat number="19+" label="Global Clients" />
          <Stat number="3+" label="Years Experience" />
        </div>

        {/* Vision */}
        <div className="mb-16 fade-in">
          <h3 className="text-3xl font-semibold text-cyan-300 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Our vision is to become a global leader in digital transformation
            by delivering cutting-edge software solutions that redefine
            efficiency, scalability, and innovation.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We believe technology should not merely solve problems — it should
            unlock sustainable growth and competitive advantage.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16 fade-in">
          <h3 className="text-3xl font-semibold text-cyan-300 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            To design, build, and scale enterprise-grade software solutions
            that are secure, reliable, and future-ready.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Every project is executed with precision engineering and long-term
            scalability in mind.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-16 fade-in">
          <h3 className="text-3xl font-semibold text-cyan-300 mb-6">
            What We Do
          </h3>
          <ul className="space-y-4 text-gray-400 leading-relaxed">
            <li>• Full-stack MERN application development</li>
            <li>• SaaS platform engineering & architecture design</li>
            <li>• Cloud-native deployment & DevOps automation</li>
            <li>• API development & microservices architecture</li>
            <li>• Performance optimization & system scaling</li>
            <li>• Security hardening & compliance-ready solutions</li>
          </ul>
        </div>

        {/* Engineering Excellence */}
        <div className="mb-16 fade-in">
          <h3 className="text-3xl font-semibold text-cyan-300 mb-4">
            Engineering Excellence
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We follow modular architecture patterns, clean coding standards,
            and scalable database designs to ensure long-term performance and maintainability.
          </p>
        </div>

        {/* Security & Compliance */}
        <div className="mb-16 fade-in">
          <h3 className="text-3xl font-semibold text-cyan-300 mb-4">
            Security & Compliance
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Security is engineered into every layer with encrypted storage,
            secure authentication, and compliance-ready frameworks.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-20 fade-in">
          <h3 className="text-3xl font-semibold text-cyan-300 mb-8 text-center">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard title="Innovation" />
            <ValueCard title="Integrity" />
            <ValueCard title="Excellence" />
          </div>
        </div>

        {/* Closing */}
        <div className="text-center fade-in">
          <p className="text-2xl font-medium text-gray-300">
            We don’t just build applications —
            <span className="text-cyan-400"> we engineer digital ecosystems.</span>
          </p>
        </div>

      </div>
    </section>
  );
}

/* Stat Component */
function Stat({ number, label }) {
  return (
    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg">
      <h4 className="text-4xl font-bold text-white mb-2">{number}</h4>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

/* Value Card */
function ValueCard({ title }) {
  return (
    <div className="bg-[#1f2937] p-8 rounded-xl shadow-lg hover:scale-105 transition">
      <h4 className="text-xl font-semibold text-cyan-400 mb-3">
        {title}
      </h4>
      <p className="text-gray-400">
        We are committed to delivering high-quality, scalable,
        and performance-driven software solutions.
      </p>
    </div>
  );
}
