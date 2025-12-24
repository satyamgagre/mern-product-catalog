import "./config/env.js"; 

import express from "express";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path";



console.log("UPSTASH URL in server:", process.env.UPSTASH_REDIS_REST_URL);
console.log("MONGO_URI =", process.env.MONGO_URI);

const app = express();
const __dirname = path.resolve();

// Middlewares
if (process.env.NODE_ENV !== "production") {
app.use(cors({
  origin: "http://localhost:5173", // Adjust as needed for your frontend
}));
}

app.use(express.json());
app.use(rateLimiter);

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});

// Routes
app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
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
