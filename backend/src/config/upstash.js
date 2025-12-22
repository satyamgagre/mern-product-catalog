import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// 🚨 SAFETY CHECK (VERY IMPORTANT)
if (
  !process.env.UPSTASH_REDIS_REST_URL ||
  !process.env.UPSTASH_REDIS_REST_TOKEN
) {
  throw new Error("❌ Upstash env variables not found");
}

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "20 s"), // 10 req / 20 sec
});
