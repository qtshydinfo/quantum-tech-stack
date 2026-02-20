import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: {
    default: "Quantum Tech Stack",
    template: "%s | Quantum Tech Stack",
  },
  description:
    "Quantum Tech Stack is a modern MERN stack development company building scalable SaaS platforms and enterprise applications.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Toaster position="top-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}