"use client";

import { useState, useRef, useEffect } from "react";
import { handleLogoutContact } from "@/lib/authentication/actions";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function UserMenu({ user }: any) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative">
            {/* Trigger */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 group transition"
            >
                {/* Avatar */}
                <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">
                    {user.firstName?.[0]}
                </div>

                {/* Name */}
                <span className="font-medium text-gray-300 group-hover:text-white transition">
                    {user.firstName}
                </span>

                {/* Chevron */}
                <MdKeyboardArrowDown
                    className={`w-5 h-5 transition-all duration-200 ${open
                            ? "rotate-180 text-gray-200"
                            : "text-gray-400 group-hover:text-gray-200"
                        }`}
                />
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-2 w-72 bg-gray-900 border border-gray-800 rounded-xl shadow-xl p-4 text-sm animate-in fade-in zoom-in-95">

                    {/* User Info */}
<div className="mb-3">
  {/* Name */}
  <div className="text-white font-medium text-lg px-2">
    {user.firstName} {user.lastName}
  </div>

  {/* Email badge on its own line, right-aligned */}
  <div className="mt-1 flex justify-end">
    <span className="text-gray-400 text-sm bg-gray-700/30 px-2 py-1 rounded-md truncate">
      {user.email_address}
    </span>
  </div>

  {/* ID badge on its own line, right-aligned */}
  <div className="mt-1 flex justify-end">
    <span className="text-gray-400 text-xs bg-gray-700/20 px-2 py-1 rounded-md font-mono">
      ID: {user.memberId}
    </span>
  </div>
</div>

                    {/* Divider */}
                    <div className="border-t border-gray-800 my-2" />

                    {/* Actions */}
                    <form action={handleLogoutContact}>
                        <button
                            type="submit"
                            className="w-full text-right text-gray-400 hover:text-red-400 transition-colors"
                        >
                            Logout
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}