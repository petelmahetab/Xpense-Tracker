const mongoose = require("mongoose");

const connectDB = async () => {
  // Check if already connected to avoid duplicate connections
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    console.log("Attempting to connect to MongoDB...");
    console.log("MONGO_URI:", process.env.MONGO_URI || "MONGO_URI not set");

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not defined");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000, 
      connectTimeoutMS: 15000,       
      maxPoolSize: 5,                
    });

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    throw err; 
  }
};

module.exports = connectDB;
