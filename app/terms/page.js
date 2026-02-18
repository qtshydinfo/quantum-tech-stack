"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-purple-900 opacity-40"></div>

      <div className="relative z-10 px-6 md:px-20 py-24 max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-white/70 text-lg">
            Effective Date: January 1, 2026
          </p>
        </motion.div>

        <div className="space-y-16 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 md:p-16 shadow-2xl">

          <Section
            title="1. Acceptance of Terms"
            content={`By accessing or using Quantum Tech Stack's services, website, 
software platforms, or digital products, you agree to be legally bound 
by these Terms of Service. If you do not agree, you must discontinue 
use immediately.`}
          />

          <Section
            title="2. Services Overview"
            content={`Quantum Tech Stack provides enterprise-grade software development, 
SaaS platforms, cloud solutions, and digital engineering services. 
We reserve the right to modify or discontinue services at any time 
without prior notice.`}
          />

          <Section
            title="3. User Responsibilities"
            content={`You agree to use our services only for lawful purposes and in 
compliance with applicable regulations. You shall not attempt to 
reverse engineer, disrupt, or compromise our systems.`}
          />

          <Section
            title="4. Intellectual Property"
            content={`All intellectual property rights, including software, code, 
design assets, documentation, and branding, remain the exclusive 
property of Quantum Tech Stack unless otherwise agreed in writing.`}
          />

          <Section
            title="5. Confidentiality"
            content={`Both parties agree to maintain confidentiality of proprietary 
information shared during project execution. Confidential information 
shall not be disclosed to third parties without written consent.`}
          />

          <Section
            title="6. Payment & Billing"
            content={`Clients agree to pay all invoices according to agreed contract terms. 
Late payments may result in suspension of services or additional fees.`}
          />

          <Section
            title="7. Limitation of Liability"
            content={`To the maximum extent permitted by law, Quantum Tech Stack 
shall not be liable for indirect, incidental, or consequential damages 
arising from use of our services.`}
          />

          <Section
            title="8. Termination"
            content={`We reserve the right to suspend or terminate access to services 
for violation of these terms or misuse of our systems.`}
          />

          <Section
            title="9. Governing Law"
            content={`These Terms shall be governed by and construed in accordance 
with the laws of India. Any disputes shall be resolved in the 
courts of Bangalore, India.`}
          />

          <Section
            title="10. Changes to Terms"
            content={`We may update these Terms periodically. Continued use of 
our services after changes constitutes acceptance of the revised Terms.`}
          />

          <div className="pt-10 border-t border-white/20 text-center">
            <p className="text-white/70">
              If you have questions regarding these Terms, contact us at:
            </p>
            <p className="text-indigo-400 font-semibold mt-2">
              legal@quantumtechstack.com
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

/* Section Component */
function Section({ title, content }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-400">
        {title}
      </h2>
      <p className="text-white/70 leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </div>
  );
}
