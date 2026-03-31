import { cookies } from 'next/headers';
import { getCurrentUser, User } from '@/lib/authentication/redis';
import Link from 'next/link';
import UserMenu from './usermenu'; //

export default async function UserStatus() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('NJohnWebLogin')?.value;

  const user: User | null = await getCurrentUser(sessionId);

  return (
    <div className="bg-gray-900/80 backdrop-blur shadow-md shadow-gray-500/20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-end items-center">
        {user ? (
          <UserMenu user={user} />
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