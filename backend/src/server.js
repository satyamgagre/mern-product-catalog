import "./config/env.js"; 

import express from "express";
import notesRoutes from "./routes/notesroutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

console.log("UPSTASH URL in server:", process.env.UPSTASH_REDIS_REST_URL);
console.log("MONGO_URI =", process.env.MONGO_URI);

const app = express();

// Middlewares
app.use(express.json());
app.use(rateLimiter);

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});

// Connect DB
connectDB();

// Routes
app.use("/api/notes", notesRoutes);

// Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
