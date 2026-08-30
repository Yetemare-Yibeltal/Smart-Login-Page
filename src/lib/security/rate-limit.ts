interface RateLimitStore {
  [key: string]: { count: number; resetTime: number };
}

const store: RateLimitStore = {};

export function rateLimit(
  ip: string,
  limit = 5,
  windowMs = 60000,
): { success: boolean } {
  const now = Date.now();
  const record = store[ip];

  if (!record || now > record.resetTime) {
    store[ip] = { count: 1, resetTime: now + windowMs };
    return { success: true };
  }

  if (record.count >= limit) {
    return { success: false };
  }

  record.count += 1;
  return { success: true };
}
