"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MdBuild,
  MdPhotoCamera,
  MdSportsSoccer,
  MdDescription,
  MdMenu,
  MdClose,
} from "react-icons/md";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center h-24">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
            NJ
          </div>
          <h1 className="text-xl font-bold">Nabeel John</h1>
        </div>

        {/* Hamburger (only on mobile) */}
        <button
          className="ml-auto md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <MdClose className="h-6 w-6" />
          ) : (
            <MdMenu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop navigation (hidden on mobile) */}
        <nav className="hidden md:flex ml-auto">
          <ul className="flex gap-8 items-center">
            <li className="flex items-center gap-1">
              <Link
                href="/tools"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
              >
                <MdBuild className="h-5 w-5" />
                Developer Tools
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <Link
                href="/photography"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
              >
                <MdPhotoCamera className="h-5 w-5" />
                Photography
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <Link
                href="/activities"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
              >
                <MdSportsSoccer className="h-5 w-5" />
                Activities
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <a
                href="https://resume.nabeeljohn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
              >
                <MdDescription className="h-5 w-5" />
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu (shown when isOpen=true) */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/tools"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
              >
                <MdBuild className="h-5 w-5" />
                Developer Tools
              </Link>
            </li>
            <li>
              <Link
                href="/photography"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
              >
                <MdPhotoCamera className="h-5 w-5" />
                Photography
              </Link>
            </li>
            <li>
              <Link
                href="/activities"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
              >
                <MdSportsSoccer className="h-5 w-5" />
                Activities
              </Link>
            </li>
            <li>
              <a
                href="https://resume.nabeeljohn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
              >
                <MdDescription className="h-5 w-5" />
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
