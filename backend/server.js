require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// Basic CORS setup
const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true, // Allow cookies or auth headers
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Explicitly allow methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow common headers
};

app.use(cors(corsOptions));
app.use(express.json());

// Database connection
connectDB();

// Root route (fixed syntax)
app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running" });
});

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Export the app for Vercel
module.exports = app;
