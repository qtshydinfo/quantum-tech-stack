import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand & CTA */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Quantum Tech Stack
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            Helping businesses scale with intelligent web solutions & modern tech.
          </p>
          <Link href="/contact">
            <button className="px-5 py-2 text-sm cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get in Touch
            </button>
          </Link>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#services" className="hover:text-white text-sm">
                SaaS Product Development
              </a>
            </li>
            <li>
              <a href="#ai" className="hover:text-white text-sm">
                Full Stack Web Applications
              </a>
            </li>
            <li>
              <a href="#cloud" className="hover:text-white text-sm">
                Cloud & DevOps Engineering
              </a>
            </li>
            <li>
              <a href="#design" className="hover:text-white text-sm">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#design" className="hover:text-white text-sm">
                AI Automation
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-l font-semibold text-white mb-4">
            Company
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="/about" className="hover:text-white text-sm">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white text-sm">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white text-sm">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white text-sm">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>

          <div className="flex items-center gap-2 text-sm mb-2">
            <Mail size={16} className="text-blue-400" />
            <span>info@quantumtechstack.com</span>
          </div>

          <div className="flex items-center gap-2 text-sm mb-2">
            <Phone size={16} className="text-blue-400" />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-start gap-2 text-sm mt-3">
            <MapPin size={16} className="text-blue-400 mt-1" />
            <span>
              Hitech City, Madhapur,<br />
              Hyderabad, India
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-gray-400">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://www.naukri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Briefcase size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Quantum Tech Stack. All rights reserved.
      </div>
    </footer>
  );
}
