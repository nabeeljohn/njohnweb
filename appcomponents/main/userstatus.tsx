// Server component: fetch user and render status directly
import { cookies } from 'next/headers';
import { getCurrentUser, User } from '@/lib/authentication/redis';
import Link from 'next/link';

export default async function UserStatus() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('NJohnWebLogin')?.value;

  const user: User | null = await getCurrentUser(sessionId);

  if (!user) {
    return (
      <Link
        href="/authentication/signin"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        Sign In
      </Link>
    );
  }

  return (
    <div className="text-center text-sm flex items-center justify-center gap-2 px-3 py-2">
      <span>
        Hi <span className="font-semibold">{user.firstName} {user.lastName}</span>! (ID: {user.memberId})
      </span>
      <Link
        href="/authentication/signout"
        className="text-red-600 hover:text-red-800 transition-colors"
      >
        Logout
      </Link>
    </div>
  );
}