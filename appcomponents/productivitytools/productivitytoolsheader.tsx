"use client";

import { useState } from "react";
import Link from "next/link";
import { MdHome, MdChecklist, MdMenu, MdClose, MdPayment} from "react-icons/md";
import { usePathname } from "next/navigation";
import { productivityToolsUrls } from "@/lib/urls/urls";

export default function ProductivityToolsHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const baseclassLinks = "hover:text-blue-300 flex items-center gap-1";
  const inactiveClass = "text-blue-400";
  const activeClass = "text-blue-200";

  // Styling
  const toolsHomeStyling = `${baseclassLinks} ${pathname === "/tools/productivity" ? activeClass : inactiveClass}`;
  const tasksStyling = `${baseclassLinks} ${pathname === "/tools/productivity/tasks" ? activeClass : inactiveClass}`
  const payTrackerStyling = `${baseclassLinks} ${pathname === "/tools/productivity/paytracker" ? activeClass : inactiveClass}`;


  return (
    <header className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center h-12">

        {/* Push everything to the right */}
        <div className="ml-auto flex items-center gap-8">

          {/* Heading */}
          <h1 className="text-lg font-semibold text-gray-600">[ Productivity Tools ]</h1>

          {/* Desktop / md+ nav */}
          <nav className="hidden md:flex">
            <ul className="flex gap-6 items-center">
              <li>
                <Link href={productivityToolsUrls.productivityToolsHome} className={toolsHomeStyling}>
                  <MdHome className="h-5 w-5" />
                  Productivity Tools Home
                </Link>
              </li>
              <li>
                <Link href={productivityToolsUrls.tasks} className={tasksStyling}>
                  <MdChecklist className="h-5 w-5" />
                  Tasks
                </Link>
              </li>
              <li>
                <Link href={productivityToolsUrls.payTracker} className={payTrackerStyling}>
                  <MdPayment className="h-5 w-5" />
                  PayTracker
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
              <Link href={productivityToolsUrls.productivityToolsHome} className={toolsHomeStyling}>
                <MdHome className="h-5 w-5" />
                Productivity Tools Home
              </Link>
            </li>
            <li>
              <Link href={productivityToolsUrls.tasks} className={tasksStyling}>
                <MdChecklist className="h-5 w-5" />
                Tasks
              </Link>
            </li>
            <li>
              <Link href={productivityToolsUrls.payTracker} className={payTrackerStyling}>
                <MdPayment className="h-5 w-5" />
                PayTracker
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
