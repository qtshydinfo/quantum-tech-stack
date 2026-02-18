"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function EliteContact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-purple-900 opacity-40"></div>

      <div className="relative z-10 px-6 md:px-20 py-24">

        {/* Hero Section */}
        <section className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Get In Touch With Us
          </motion.h1>

          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We build scalable digital solutions for forward-thinking brands.
            Let’s discuss your next big idea.
          </p>
        </section>

        {/* Company Info Section */}
        <section className="grid md:grid-cols-3 gap-10 mb-24">

          <InfoCard
            title="Head Office"
            content={`Quantum Tech Stack Pvt.Ltd.
Hitech City
Madhapur
Hyderabad, India`}
          />

          <InfoCard
            title="Contact Details"
            content={`Email: info@quantumtechstack.com
Phone: +91 98765 43210`}
          />

          <InfoCard
            title="Business Hours"
            content={`Monday - Friday
9:00 AM - 6:00 PM`}
          />

        </section>

        {/* Contact Form Section */}
        <section className="max-w-3xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 shadow-2xl">

          <h2 className="text-3xl font-semibold mb-10 text-center">
            Send Us A Message
          </h2>

          <form className="space-y-8" onSubmit={handleSubmit}>

            <InputField
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <InputField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              label="Company Name"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />

            <div className="relative">
              <textarea
                rows="5"
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-white/10 border border-white/30 rounded-xl focus:outline-none focus:border-indigo-500 text-white"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-white hover:scale-105 transition-transform duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-green-400 text-center mt-4">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center mt-4">
                ❌ Failed to send message. Try again.
              </p>
            )}

          </form>

        </section>

      </div>
    </div>
  );
}

/* Info Card Component */
function InfoCard({ title, content }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg whitespace-pre-line"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-white/70">{content}</p>
    </motion.div>
  );
}

/* Input Field */
function InputField({ label, type, name, value, onChange }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={label}
        className="w-full p-4 bg-white/10 border border-white/30 rounded-xl focus:outline-none focus:border-indigo-500 text-white"
      />
    </div>
  );
}
