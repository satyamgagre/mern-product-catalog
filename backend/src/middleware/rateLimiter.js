import { rateLimiter } from "../config/upstash.js";

const rateLimitMiddleware = async (req, res, next) => {
  try {
    const { success } = await rateLimiter.limit(req.ip);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later.",
      });
    }

    next();
  } catch (error) {
    console.log("Rate Limiter Error:", error);
    next(error);
  }
};

export default rateLimitMiddleware;
