"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname() || "";

  const linkBase = "flex items-center gap-1 hover:text-blue-300 transition";
  const activeClass = "text-blue-200";
  const inactiveClass = "text-blue-400";

  const isActive = (path: string) =>
    path === "/"
      ? pathname === "/"
      : pathname === path || pathname.startsWith(path + "/");

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
        <nav className="hidden md:flex ml-auto items-center gap-8">
          {/* Main links */}
          <ul className="flex gap-8 items-center">
            <li>
              <Link
                href="/"
                className={`${linkBase} ${isActive("/") ? activeClass : inactiveClass}`}
              >
                <MdHome className="h-5 w-5" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/tools"
                className={`${linkBase} ${isActive("/tools") ? activeClass : inactiveClass}`}
              >
                <MdBuild className="h-5 w-5" />
                Developer Tools
              </Link>
            </li>
            <li>
              <Link
                href="/photography"
                className={`${linkBase} ${isActive("/photography") ? activeClass : inactiveClass}`}
              >
                <MdPhotoCamera className="h-5 w-5" />
                Photography
              </Link>
            </li>
            <li>
              <Link
                href="/activities"
                className={`${linkBase} ${isActive("/activities") ? activeClass : inactiveClass}`}
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
                className={`${linkBase} ${isActive("/resume") ? activeClass : inactiveClass}`}
              >
                <MdDescription className="h-5 w-5" />
                Resume
              </a>
            </li>
          </ul>

          {/* Auth button */}
          <div className="ml-8">
            <Link
              href="/login"
              className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white transition"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                className={`${linkBase} ${isActive("/") ? activeClass : inactiveClass}`}
              >
                <MdHome className="h-5 w-5" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/tools"
                className={`${linkBase} ${isActive("/tools") ? activeClass : inactiveClass}`}
              >
                <MdBuild className="h-5 w-5" />
                Developer Tools
              </Link>
            </li>
            <li>
              <Link
                href="/photography"
                className={`${linkBase} ${isActive("/photography") ? activeClass : inactiveClass}`}
              >
                <MdPhotoCamera className="h-5 w-5" />
                Photography
              </Link>
            </li>
            <li>
              <Link
                href="/activities"
                className={`${linkBase} ${isActive("/activities") ? activeClass : inactiveClass}`}
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

            {/* Mobile Login */}
            <li>
              <Link
                href="/login"
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
