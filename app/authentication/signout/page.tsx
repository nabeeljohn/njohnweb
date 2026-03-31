'use client';

import { handleLogoutContact } from '@/lib/authentication/actions';

export default function SignOutPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full px-6 py-6 bg-gray-800/70 rounded-lg shadow-lg text-gray-300 text-sm flex flex-col gap-4 items-center">
        {/* Info Text */}
        <div className="text-center">
          <p className="text-gray-400">You're about to log out.</p>
          <p className="mt-1 text-white font-medium">Click below to safely end your session.</p>
        </div>

        {/* Logout Button */}
        <form action={handleLogoutContact}>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 text-white font-medium px-5 py-2 rounded-md transition-colors shadow-sm"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}