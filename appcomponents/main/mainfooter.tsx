"use client";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">

        {/* Copyright */}
        <p className="text-sm md:text-base">
          Code. Coffee. Repeat. — Nabeel John
          <br />
          <a href="mailto:nabeel@example.com" className="text-blue-400 hover:underline">
            mail@nabeeljohn.com
          </a>
          <span className="mx-2">|</span>
          <a href="tel:+15185126348" className="text-blue-400 hover:underline">(518) 512-6348</a>
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/nabeeljohn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors transform hover:scale-110"
            title="GitHub"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://linkedin.com/in/NabeelJohn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors transform hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://www.facebook.com/njohn83/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors transform hover:scale-110"
            title="Facebook"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href="https://www.instagram.com/_nabeeljohn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors transform hover:scale-110"
            title="Instagram"
          >
            <FaInstagram size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}
