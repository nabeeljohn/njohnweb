import { User } from '@/lib/authentication/redis';

type Props = {
  user: User | null;
};

export default function UserStatus({ user }: Props) {
  if (!user) {
    return (
      <a
        href="/authentication/signin"
        className="inline-block bg-gray-700 hover:bg-gray-600 text-gray-100 font-medium px-4 py-2 rounded-md"
      >
        Sign In
      </a>
    );
  }

  return (
<>
  <div className="text-right text-sm flex items-center gap-2 px-3 py-2">
    <span>
      Hi <span className="font-semibold">{user.firstName} {user.lastName}</span>! (ID: {user.memberId})
    </span>
    <a
      href="/authentication/signout"
      className="text-red-600 hover:text-red-800 transition-colors"
    >
      Logout
    </a>
  </div>
</>
  );
}