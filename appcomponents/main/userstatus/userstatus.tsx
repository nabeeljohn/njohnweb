// Server component: fetch user and render status directly
import { cookies } from 'next/headers';
import { getCurrentUser, User } from '@/lib/authentication/redis';
import { handleLogoutContact } from '@/lib/authentication/actions';
import Link from 'next/link';

export default async function UserStatus() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('NJohnWebLogin')?.value;

  const user: User | null = await getCurrentUser(sessionId);

  return (
    <div className="bg-gray-900/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm text-gray-300">

        {/* Left side */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span>
                Hi,{" "}
                <span className="font-medium text-white">
                  {user.firstName} {user.lastName}
                </span>
              </span>

              <span className="bg-gray-800 text-gray-400 px-2 py-0.5 rounded-md text-xs">
                ID: {user.memberId}
              </span>
            </>
          ) : (
            <span className="text-gray-400">Welcome, guest</span>
          )}
        </div>

        {/* Right side */}
        {user ? (
          <form action={handleLogoutContact}>
            <button
              type="submit"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              Logout
            </button>
          </form>
        ) : (
          <Link
            href="/authentication/signin"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}