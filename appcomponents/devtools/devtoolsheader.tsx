"use client";

import { useState } from "react";
import Link from "next/link";
import { MdHome, MdLink, MdChecklist, MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function DevToolsHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const baseclassLinks = "text-blue-400 hover:text-blue-300 flex items-center gap-1";


  return (
   <header className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-6 flex items-center h-12">

    {/* Push everything to the right */}
    <div className="ml-auto flex items-center gap-8">

      {/* Heading */}
      <h1 className="text-lg font-semibold text-gray-600">[ Dev Tools ]</h1>

      {/* Desktop / md+ nav */}
      <nav className="hidden md:flex">
        <ul className="flex gap-6 items-center">
          <li>
            <Link href="/tools/" className={`${baseclassLinks} ${pathname === "/tools" ? "text-blue-200" : ""}`}>
              <MdHome className="h-5 w-5" />
              Dev Tools Home
            </Link>
          </li>
          <li>
            <Link href="/tools/url" className={`${baseclassLinks} ${pathname === "/tools/url" ? "text-blue-200" : ""}`}>
              <MdLink className="h-5 w-5" />
              Link Lab
            </Link>
          </li>
          <li>
            <Link href="/tools/todo" className={`${baseclassLinks} ${pathname === "/tools/todo" ? "text-blue-200" : ""}`}>
              <MdChecklist className="h-5 w-5" />
              Todo List
            </Link>
          </li>
        </ul>
      </nav>

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

  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <nav className="md:hidden bg-gradient-to-r from-gray-800 to-gray-900">
      <ul className="flex flex-col gap-4 px-6 pb-4">
        <li>
          <Link href="/tools/" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
            <MdHome className="h-5 w-5" />
            Dev Tools Home
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
  )}
</header>


  );
}
