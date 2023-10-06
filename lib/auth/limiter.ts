import { RateLimiter } from "limiter";

export const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: 600000,
  fireImmediately: true,
});
