"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MdChevronRight } from "react-icons/md";

type BreadcrumbItem = {
    label: string;
    href: string;
};

function itemsForPath(pathname: string, items: BreadcrumbItem[]): BreadcrumbItem[] {
    if (items.length === 0) return [];

    const root = items[0];
    const rest = items.slice(1);

    if (pathname === root.href) {
        return [root];
    }

    const matches = rest.filter(
        (item) => pathname === item.href || pathname.startsWith(item.href + "/")
    );

    const best = matches.sort((a, b) => b.href.length - a.href.length)[0];
    if (!best) {
        return [root];
    }

    return [root, best];
}

export default function ToolsMenuBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
    const pathname = usePathname() || "";
    const visible = itemsForPath(pathname, items);

    return (
        <div className="pb-4">
            <div className="inline-flex items-center gap-1 mb-2 bg-gray-900/20 p-2 rounded-b-md px-4">
                <nav className="text-sm text-gray-400 flex items-center gap-1" aria-label="breadcrumb">
                    {visible.map((item, index) => (
                        <span key={`${item.href}-${index}`} className="flex items-center gap-1">
                            {index > 0 && <MdChevronRight className="h-4 w-4 opacity-50" />}
                            <span className={index === visible.length - 1 ? "font-semibold text-gray-200" : ""}>
                                {item.label}
                            </span>
                        </span>
                    ))}
                </nav>
            </div>
        </div>
    );
}
