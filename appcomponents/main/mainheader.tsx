"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MdBuild,
  MdPhotoCamera,
  MdSportsSoccer,
  MdDescription,
  MdMenu,
  MdClose,
  MdHome,
} from "react-icons/md";
import MainLogo from "./logo";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  // Hydration-safe: set current path only on client
  useEffect(() => {
    setCurrentPath(window.location.pathname.replace(/\/$/, "")); // remove trailing slash
  }, []);

  const baseClassHome = "text-blue-400 hover:text-blue-300 flex items-center gap-1";
  const baseclassLinks = "flex items-center gap-1 text-blue-400 hover:text-blue-300 transition";
  const baseclassLinksMobile = "flex items-center gap-1 text-blue-400 hover:text-blue-300";

  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center h-24">
        {/* Logo */}
        <MainLogo />

        {/* Hamburger (mobile only) */}
        <button
          className="ml-auto md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex ml-auto">
          <ul className="flex gap-8 items-center">
            <li>
              <Link
                href="/"
                className={`${baseClassHome} ${currentPath === "" ? "text-blue-200" : ""}`}
              >
                <MdHome className="h-5 w-5" /> Home
              </Link>
            </li>
            <li>
              <Link
                href="/tools"
                className={`${baseclassLinks} ${currentPath.startsWith("/tools") ? "text-blue-200" : ""}`}
              >
                <MdBuild className="h-5 w-5" /> Developer Tools
              </Link>
            </li>
            <li>
              <Link
                href="/photography"
                className={`${baseclassLinks} ${currentPath === "/photography" ? "text-blue-200" : ""}`}
              >
                <MdPhotoCamera className="h-5 w-5" /> Photography
              </Link>
            </li>
            <li>
              <Link
                href="/activities"
                className={`${baseclassLinks} ${currentPath === "/activities" ? "text-blue-200" : ""}`}
              >
                <MdSportsSoccer className="h-5 w-5" /> Activities
              </Link>
            </li>
            <li>
              <a
                href="https://resume.nabeeljohn.com"
                target="_blank"
                rel="noopener noreferrer"
                className={baseclassLinks}
              >
                <MdDescription className="h-5 w-5" /> Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                className={`${baseclassLinksMobile} ${currentPath === "" ? "text-blue-200" : ""}`}
              >
                <MdHome className="h-5 w-5" /> Home
              </Link>
            </li>
            <li>
              <Link
                href="/tools"
                className={`${baseclassLinksMobile} ${currentPath.startsWith("/tools") ? "text-blue-200" : ""}`}
              >
                <MdBuild className="h-5 w-5" /> Developer Tools
              </Link>
            </li>
            <li>
              <Link
                href="/photography"
                className={`${baseclassLinksMobile} ${currentPath === "/photography" ? "text-blue-200" : ""}`}
              >
                <MdPhotoCamera className="h-5 w-5" /> Photography
              </Link>
            </li>
            <li>
              <Link
                href="/activities"
                className={`${baseclassLinksMobile} ${currentPath === "/activities" ? "text-blue-200" : ""}`}
              >
                <MdSportsSoccer className="h-5 w-5" /> Activities
              </Link>
            </li>
            <li>
              <a
                href="https://resume.nabeeljohn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
              >
                <MdDescription className="h-5 w-5" /> Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
