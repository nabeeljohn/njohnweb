"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  MdApps,
  MdBuild,
  MdPhotoCamera,
  MdDescription,
  MdMenu,
  MdClose,
  MdHome,
  MdKeyboardArrowDown,
} from "react-icons/md";
import MainLogo from "./logo";
import { ProductivityToolsDropdownItems } from "./toolsmenuitems/productivitytoolsdropdownitems";
import { DeveloperToolsDropdownItems } from "./toolsmenuitems/developertoolsdropdownitems";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || "";
  const isProductivityToolsRoute = pathname.startsWith("/tools/productivity");
  const [isProductivityDropdownOpen, setIsProductivityDropdownOpen] = useState(false);
  const [isMobileProductivityDropdownOpen, setIsMobileProductivityDropdownOpen] = useState(false);
  const productivityDropdownRef = useRef<HTMLLIElement | null>(null);
  const isDeveloperToolsRoute = pathname.startsWith("/tools/dev");
  const [isDeveloperDropdownOpen, setIsDeveloperDropdownOpen] = useState(false);
  const [isMobileDeveloperDropdownOpen, setIsMobileDeveloperDropdownOpen] = useState(false);
  const developerDropdownRef = useRef<HTMLLIElement | null>(null);

  const linkBase = "flex items-center gap-1 hover:text-blue-300 transition";
  const activeClass = "text-blue-200";
  const inactiveClass = "text-blue-400";

  const isActive = (path: string) =>
    path === "/"
      ? pathname === "/"
      : pathname === path || pathname.startsWith(path + "/");

  const homeStyles = `${linkBase} ${isActive("/") ? activeClass : inactiveClass}`;
  const devToolsStyles = `${linkBase} ${isActive("/tools/dev") ? activeClass : inactiveClass}`;
  const productivityToolsStyles = `${linkBase} ${isActive("/tools/productivity") ? activeClass : inactiveClass}`;
  const photographyStyles = `${linkBase} ${isActive("/photography") ? activeClass : inactiveClass}`;
  const resumeStyles = `${linkBase} ${isActive("/resume") ? activeClass : inactiveClass}`;

  // Close the dropdown whenever we navigate away from productivity tools.
  useEffect(() => {
    if (!isProductivityToolsRoute) setIsProductivityDropdownOpen(false);
    if (!isProductivityToolsRoute) setIsMobileProductivityDropdownOpen(false);
  }, [isProductivityToolsRoute]);

  // Close the dropdown whenever we navigate away from developer tools.
  useEffect(() => {
    if (!isDeveloperToolsRoute) setIsDeveloperDropdownOpen(false);
    if (!isDeveloperToolsRoute) setIsMobileDeveloperDropdownOpen(false);
  }, [isDeveloperToolsRoute]);

  // If the mobile menu closes, also close any expanded nested menus.
  useEffect(() => {
    if (!isOpen) {
      setIsMobileProductivityDropdownOpen(false);
      setIsMobileDeveloperDropdownOpen(false);
    }
  }, [isOpen]);

  // Close the dropdown when clicking outside.
  useEffect(() => {
    if (!isProductivityDropdownOpen) return;

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (productivityDropdownRef.current?.contains(target)) return;
      setIsProductivityDropdownOpen(false);
    };

    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isProductivityDropdownOpen]);

  // Close the dropdown when clicking outside.
  useEffect(() => {
    if (!isDeveloperDropdownOpen) return;

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (developerDropdownRef.current?.contains(target)) return;
      setIsDeveloperDropdownOpen(false);
    };

    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isDeveloperDropdownOpen]);

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
                className={homeStyles}
              >
                <MdHome className="h-5 w-5" />
                Home
              </Link>
            </li>
            <li ref={developerDropdownRef} className="relative">
              <button
                type="button"
                className={`${devToolsStyles} inline-flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-700/40 transition`}
                aria-haspopup="menu"
                aria-expanded={isDeveloperDropdownOpen}
                onClick={() => setIsDeveloperDropdownOpen((v) => !v)}
              >
                <MdBuild className="h-5 w-5" />
                Developer Tools
                <MdKeyboardArrowDown
                  className={`h-4 w-4 transition-transform ${
                    isDeveloperDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDeveloperDropdownOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-56 rounded-md bg-gray-700/95 border border-gray-600 shadow-lg py-1"
                >
                  <DeveloperToolsDropdownItems
                    variant="desktop"
                    onNavigate={() => setIsDeveloperDropdownOpen(false)}
                  />
                </div>
              )}
            </li>
            <li ref={productivityDropdownRef} className="relative">
              <button
                type="button"
                className={`${productivityToolsStyles} inline-flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-700/40 transition`}
                aria-haspopup="menu"
                aria-expanded={isProductivityDropdownOpen}
                onClick={() => setIsProductivityDropdownOpen((v) => !v)}
              >
                <MdApps className="h-5 w-5" />
                Productivity Tools
                <MdKeyboardArrowDown
                  className={`h-4 w-4 transition-transform ${isProductivityDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isProductivityDropdownOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-56 rounded-md bg-gray-700/95 border border-gray-600 shadow-lg py-1"
                >
                  <ProductivityToolsDropdownItems
                    variant="desktop"
                    onNavigate={() => setIsProductivityDropdownOpen(false)}
                  />
                </div>
              )}
            </li>
            <li>
              <Link
                href="/photography"
                className={photographyStyles}
              >
                <MdPhotoCamera className="h-5 w-5" />
                Photography
              </Link>
            </li>
            <li>
              <a
                href="https://resume.nabeeljohn.com"
                target="_blank"
                rel="noopener noreferrer"
                className={resumeStyles}
              >
                <MdDescription className="h-5 w-5" />
                Resume
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
                className={homeStyles}
              >
                <MdHome className="h-5 w-5" />
                Home
              </Link>
            </li>
            <li>
              <button
                type="button"
                className={`${devToolsStyles} w-full justify-between px-2 py-1 rounded-md`}
                aria-haspopup="menu"
                aria-expanded={isMobileDeveloperDropdownOpen}
                onClick={() => {
                  setIsMobileDeveloperDropdownOpen((v) => !v);
                  setIsMobileProductivityDropdownOpen(false);
                }}
              >
                <span className="flex items-center gap-1">
                  <MdBuild className="h-5 w-5" />
                  Developer Tools
                </span>
                <MdKeyboardArrowDown
                  className={`h-4 w-4 transition-transform ${
                    isMobileDeveloperDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileDeveloperDropdownOpen && (
                <div className="mt-2 ml-6 flex flex-col gap-1">
                  <DeveloperToolsDropdownItems
                    variant="mobile"
                    onNavigate={() => {
                      setIsOpen(false);
                      setIsMobileDeveloperDropdownOpen(false);
                    }}
                  />
                </div>
              )}
            </li>

            <li>
              <button
                type="button"
                className={`${productivityToolsStyles} w-full justify-between px-2 py-1 rounded-md`}
                aria-haspopup="menu"
                aria-expanded={isMobileProductivityDropdownOpen}
                onClick={() => {
                  setIsMobileProductivityDropdownOpen((v) => !v);
                  setIsMobileDeveloperDropdownOpen(false);
                }}
              >
                <span className="flex items-center gap-1">
                  <MdApps className="h-5 w-5" />
                  Productivity Tools
                </span>
                <MdKeyboardArrowDown
                  className={`h-4 w-4 transition-transform ${
                    isMobileProductivityDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileProductivityDropdownOpen && (
                <div className="mt-2 ml-6 flex flex-col gap-1">
                  <ProductivityToolsDropdownItems
                    variant="mobile"
                    onNavigate={() => {
                      setIsOpen(false);
                      setIsMobileProductivityDropdownOpen(false);
                    }}
                  />
                </div>
              )}
            </li>
            <li>
              <Link
                href="/photography"
                className={photographyStyles}
              >
                <MdPhotoCamera className="h-5 w-5" />
                Photography
              </Link>
            </li>
            <li>
              <a
                href="https://resume.nabeeljohn.com"
                target="_blank"
                rel="noopener noreferrer"
                className={resumeStyles}
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
