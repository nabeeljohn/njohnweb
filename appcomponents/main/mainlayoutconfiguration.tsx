'use client'

import { usePathname } from "next/navigation";

export default function MainLayoutConfiguration({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Only apply global padding for non-tools pages
    const containerClass = pathname.startsWith("/tools")
        ? "w-full"               // minimal horizontal padding
        : "bg-gray-700 text-gray-100 py-12 max-w-7xl mx-auto px-6"; // original for non-tools

    return (
        <div className={containerClass}>
            {children}
        </div>
    )
}