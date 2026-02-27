"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

export default function Careers() {
  const [open, setOpen] = useState(false);

  // ✅ USE EMBED LINK (NOT forms.gle)
  const formLink =
    "https://docs.google.com/forms/d/1I2i67hd7rx7KjHrPulhqHvxxHV1-yi-PKG-smYixpI0/edit?pli=1#responses";

  const handleClose = () => {
    setOpen(false);

    toast.success("Application submitted successfully 🚀", {
      duration: 3000,
    });

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-200 via-blue-400 to-indigo-600 bg-clip-text text-transparent"
        >
          Careers at Quantum Tech Stack
        </motion.h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          We are looking for passionate engineers to join our remote-first team
          and build scalable enterprise-grade MERN stack applications.
        </p>
      </section>

      {/* OPEN POSITION */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-lg shadow-xl text-center"
          >
            <h3 className="text-3xl font-semibold mb-4">
              MERN Stack Developer
            </h3>

            <div className="text-sm text-gray-400 mb-6">
              Full-Time • Remote
            </div>

            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              We are hiring skilled MERN Stack Developers with strong expertise
              in MongoDB, Express.js, React.js, and Node.js. You will work on
              scalable SaaS platforms, enterprise dashboards, and high-performance
              web applications used by startups and global clients.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl w-full max-w-4xl relative overflow-hidden shadow-2xl"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-black font-semibold">
                  Apply for MERN Stack Developer
                </h3>

                <button
                  onClick={() => setOpen(false)}
                  className="text-black text-xl font-bold"
                >
                  ✕
                </button>
              </div>

              {/* GOOGLE FORM IFRAME */}
              <iframe
                src={formLink}
                width="100%"
                height="650"
                className="border-none"
                loading="lazy"
              ></iframe>

              {/* CONFIRM BUTTON */}
              <div className="p-4 text-center">
                <button
                  onClick={handleClose}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  I Have Submitted
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}