"use client";

import { useState } from "react";
import Link from "next/link";
import { MdHome, MdLink, MdMenu, MdClose, MdLock, MdVerifiedUser, MdSmartToy, MdCode } from "react-icons/md";
import { usePathname } from "next/navigation";
import { devToolsUrls } from "@/lib/urls/urls";

export default function DevToolsHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const baseclassLinks = "hover:text-blue-300 flex items-center gap-1";
  const inactiveClass = "text-blue-400";
  const activeClass = "text-blue-200";

  // Styling
  const toolsHomeStyling = `${baseclassLinks} ${pathname === "/tools/dev" ? activeClass : inactiveClass}`;
  const linkLabStyling = `${baseclassLinks} ${pathname === "/tools/dev/url" ? activeClass : inactiveClass}`;
  const samlStyling = `${baseclassLinks} ${pathname === "/tools/dev/saml" ? activeClass : inactiveClass}`;
  const formatterStyling = `${baseclassLinks} ${pathname.includes("/tools/dev/formatter") ? activeClass : inactiveClass}`;
  const agentTrackerStyling = `${baseclassLinks} ${pathname === "/tools/dev/agent" ? activeClass : inactiveClass}`;


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
                <Link href={devToolsUrls.devToolsHome} className={toolsHomeStyling}>
                  <MdHome className="h-5 w-5" />
                  Dev Tools Home
                </Link>
              </li>
              <li>
                <Link href={devToolsUrls.linkLab} className={linkLabStyling}>
                  <MdLink className="h-5 w-5" />
                  Link Lab
                </Link>
              </li>
              <li>
                <Link href={devToolsUrls.jwt} className={`${baseclassLinks} ${pathname === "/tools/jwt" ? activeClass : inactiveClass}`}>
                  <MdLock className="h-5 w-5" />
                  JWT Generator
                </Link>
              </li>
              <li>
                <Link href={devToolsUrls.saml} className={samlStyling}>
                  <MdVerifiedUser className="h-5 w-5" />
                  SAML Utility
                </Link>
              </li>
              <li>
                <Link href={devToolsUrls.formatter} className={formatterStyling}>
                  <MdCode className="h-5 w-5" />
                  XML and JSON Formatter
                </Link>
              </li>
              <li>
                <Link href={devToolsUrls.agent} className={agentTrackerStyling}>
                  <MdSmartToy className="h-5 w-5" />
                  Milo AI
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
              <Link href={devToolsUrls.devToolsHome} className={toolsHomeStyling}>
                <MdHome className="h-5 w-5" />
                Dev Tools Home
              </Link>
            </li>
            <li>
              <Link href={devToolsUrls.linkLab} className={linkLabStyling}>
                <MdLink className="h-5 w-5" />
                Link Lab
              </Link>
            </li>
            <li>
              <Link href={devToolsUrls.jwt} className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                <MdLock className="h-5 w-5" />
                JWT Generator
              </Link>
            </li>
            <li>
              <Link href={devToolsUrls.saml} className={`${baseclassLinks} ${pathname === "/tools/saml" ? activeClass : inactiveClass}`}>
                <MdVerifiedUser className="h-5 w-5" />
                SAML Utility
              </Link>
            </li>
            <li>
              <Link href={devToolsUrls.saml} className={`${baseclassLinks} ${pathname.includes("/tools/formatter") ? activeClass : inactiveClass}`}>
                <MdVerifiedUser className="h-5 w-5" />
                Xml and JSON Formatter
              </Link>
            </li>
            <li>
              <Link href={devToolsUrls.agent} className={agentTrackerStyling}>
                <MdSmartToy className="h-5 w-5" />
                Milo AI
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
