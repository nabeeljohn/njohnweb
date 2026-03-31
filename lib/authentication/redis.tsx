import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export type User = {
  firstName: string;
  lastName: string;
  memberId: string;
};

// Server-only: read session from Redis
export async function getCurrentUser(sessionId: string | undefined): Promise<User | null> {
  if (!sessionId) return null;

  const sessionData = await redis.get(`session:${sessionId}`);
  if (!sessionData) return null;

  // If Upstash returned a string, parse it; if it's already an object, return it
  if (typeof sessionData === 'string') {
    try {
      return JSON.parse(sessionData) as User;
    } catch (err) {
      console.error("Failed to parse session string:", sessionData, err);
      return null;
    }
  }

  // If Upstash returned an object already, just cast it
  return sessionData as User;
}