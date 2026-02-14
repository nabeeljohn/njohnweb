"use client";

import { useState } from "react";
import Link from "next/link";
import { MdHome, MdLink, MdChecklist, MdMenu, MdClose } from "react-icons/md";

export default function DevToolsHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center h-24">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
            NJ
          </div>
          <h1 className="text-xl font-bold">DevTools</h1>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="ml-auto text-gray-300 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <MdClose className="h-6 w-6" />
          ) : (
            <MdMenu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop / md+ nav */}
        <nav className="hidden md:flex ml-auto">
          <ul className="flex gap-6 items-center">
            <li>
              <Link href="/" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                <MdHome className="h-5 w-5" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/tools/url" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                <MdLink className="h-5 w-5" />
                URL Encoder
              </Link>
            </li>
            <li>
              <Link href="/tools/todo" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                <MdChecklist className="h-5 w-5" />
                Todo List
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800">
          <ul className="flex flex-col gap-4 px-6 pb-4">
            <li>
              <Link
                href="/"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <MdHome className="h-5 w-5" />
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/tools/url"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <MdLink className="h-5 w-5" />
                URL Encoder
              </Link>
            </li>

            <li>
              <Link
                href="/tools/todo"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <MdChecklist className="h-5 w-5" />
                Todo List
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
