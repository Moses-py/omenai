import { RateLimiter } from "limiter";

export const limiter = new RateLimiter({
  tokensPerInterval: 2,
  interval: "min",
  fireImmediately: true,
});
