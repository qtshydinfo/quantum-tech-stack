"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPolicy() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-id]");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 40%",
        onEnter: () => setActive(section.dataset.id),
        onEnterBack: () => setActive(section.dataset.id),
      });

      gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      });
    });
  }, []);

  const items = [
    "executive",
    "scope",
    "collection",
    "lawful",
    "usage",
    "sharing",
    "international",
    "security",
    "retention",
    "rights",
    "children",
    "incident",
    "changes",
    "contact",
  ];

  return (
    <div className="relative bg-black text-white min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-black to-purple-900/30 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-20 sm:py-24 md:py-32">

        {/* MOBILE TOC BUTTON */}
        <div className="md:hidden mb-10">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-full bg-white/10 border border-white/20 rounded-xl py-3 text-sm font-medium backdrop-blur-lg"
          >
            {mobileOpen ? "Close Contents" : "View Contents"}
          </button>

          {mobileOpen && (
            <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              {items.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm ${
                    active === id
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* DESKTOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">

          {/* DESKTOP SIDEBAR */}
          <aside className="hidden md:block md:col-span-1 sticky top-32 h-fit">
            <h2 className="text-lg lg:text-xl font-semibold mb-6 text-cyan-400">
              Contents
            </h2>
            <ul className="space-y-3 text-sm">
              {items.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`transition ${
                      active === id
                        ? "text-cyan-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* MAIN CONTENT */}
          <div
            ref={sectionRef}
            className="md:col-span-3 space-y-16 sm:space-y-20"
          >
            <Hero />

            <PolicyBlock
              id="executive"
              title="1. Executive Legal Overview"
              content={`This Privacy Policy governs the collection, processing, storage, and protection of personal data by Quantum Tech Stack. 
We operate in compliance with GDPR, CCPA, and DPDP regulations.`}
            />

            <PolicyBlock
              id="scope"
              title="2. Scope & Applicability"
              content={`Applies to website visitors, clients, partners, vendors, and SaaS users across jurisdictions.`}
            />

            <PolicyBlock
              id="collection"
              title="3. Categories of Data Collected"
              content={`• Identity Data
• Contact Data
• Technical Data
• Usage Data
• Billing Data`}
            />

            <PolicyBlock
              id="lawful"
              title="4. Lawful Basis for Processing"
              content={`Processing occurs under contractual necessity, legitimate interests, legal obligations, or consent.`}
            />

            <PolicyBlock
              id="usage"
              title="5. Purpose of Data Processing"
              content={`Service delivery, support, monitoring, analytics, and compliance.`}
            />

            <PolicyBlock
              id="sharing"
              title="6. Data Sharing"
              content={`Shared only with subprocessors under strict DPA agreements.`}
            />

            <PolicyBlock
              id="international"
              title="7. International Transfers"
              content={`Safeguards include SCCs and regulatory-compliant frameworks.`}
            />

            <PolicyBlock
              id="security"
              title="8. Security Controls"
              content={`AES-256 encryption, TLS 1.3, RBAC, zero-trust architecture.`}
            />

            <PolicyBlock
              id="retention"
              title="9. Data Retention"
              content={`Retained only as necessary per legal and operational requirements.`}
            />

            <PolicyBlock
              id="rights"
              title="10. Data Subject Rights"
              content={`Access, correction, deletion, portability, objection.`}
            />

            <PolicyBlock
              id="children"
              title="11. Children's Privacy"
              content={`Not directed to individuals under 18.`}
            />

            <PolicyBlock
              id="incident"
              title="12. Incident Response"
              content={`Structured breach notification and response framework.`}
            />

            <PolicyBlock
              id="changes"
              title="13. Policy Updates"
              content={`Updates reflected with revised date.`}
            />

            <PolicyBlock
              id="contact"
              title="14. Contact Information"
              content={`legal@quantumtechstack.com`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* HERO */
function Hero() {
  return (
    <section className="text-center mb-16 sm:mb-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
        Enterprise Privacy Policy
      </h1>
      <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
        Our commitment to transparency, compliance, and enterprise-grade data protection.
      </p>
    </section>
  );
}

/* POLICY BLOCK */
function PolicyBlock({ id, title, content }) {
  return (
    <section
      id={id}
      data-id={id}
      className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 mb-4 sm:mb-6">
        {title}
      </h2>
      <p className="text-gray-400 leading-relaxed whitespace-pre-line text-sm sm:text-base">
        {content}
      </p>
    </section>
  );
}
