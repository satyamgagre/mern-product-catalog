import "./config/env.js"; 

import express from "express";
import cors from "cors";
import notesRoutes from "./routes/notesroutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


console.log("UPSTASH URL in server:", process.env.UPSTASH_REDIS_REST_URL);
console.log("MONGO_URI =", process.env.MONGO_URI);

const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:5173", // Adjust as needed for your frontend
}));

app.use(express.json());
app.use(rateLimiter);

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});

// Routes
app.use("/api/notes", notesRoutes);

// Connect DB and start server
const PORT = process.env.PORT || 5001;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // Stop app if DB fails
  });
