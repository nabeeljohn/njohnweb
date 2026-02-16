"use client";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        
        {/* Copyright */}
        <p className="text-sm md:text-base">
          Code. Coffee. Repeat. — Nabeel John
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
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/NabeelJohn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors transform hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/njohn83/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors transform hover:scale-110"
            title="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/_nabeeljohn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors transform hover:scale-110"
            title="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
