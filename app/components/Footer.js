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
          <button className="px-5 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get in Touch
          </button>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#services" className="hover:text-white text-sm">MERN Development</a></li>
            <li><a href="#ai" className="hover:text-white text-sm">AI & Data</a></li>
            <li><a href="#cloud" className="hover:text-white text-sm">Cloud & DevOps</a></li>
            <li><a href="#design" className="hover:text-white text-sm">UI/UX Design</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-l font-semibold text-white mb-4">
            Company
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="/about" className="hover:text-white text-sm">About Us</a></li>
            <li><a href="/contact" className="hover:text-white text-sm">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white text-sm">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white text-sm">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <p className="text-sm">info@quantumtechstack.com</p>
          <p className="text-sm">+91 98765 43210</p>
          <p className="mt-3 text-sm">Hitech City, Madhapur, Hyderabad, India</p>

          {/* Social Icons (example) */}
          <div className="flex gap-4 mt-4 text-gray-400">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">GitHub</a>
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
