// Server component: can use cookies() and Redis
import { cookies } from 'next/headers';
import { getCurrentUser, User } from '@/lib/authentication/redis';
import UserStatus from './userstatus';

export default async function UserStatusWrapper() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('NJohnWebLogin')?.value;

  const user: User | null = await getCurrentUser(sessionId);

  return <UserStatus user={user} />; // pass user info as props
}