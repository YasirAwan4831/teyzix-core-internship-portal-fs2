import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

// Temporary in-memory MongoDB instance
// ----------------------------------------------------
// NOTE:
// This project is currently using MongoDB Memory Server
// for development/demo purposes because a production
// cloud database (MongoDB Atlas) has not been configured yet.
//
// Future Plan:
// Replace this temporary database with a permanent
// MongoDB Atlas connection using environment variables.
//
// Example future setup:
// mongoose.connect(process.env.MONGO_URI)
// ----------------------------------------------------

let mongod;

const connectDB = async () => {
  try {

    // Create temporary MongoDB memory server
    // ------------------------------------------------
    // This creates a local temporary database in RAM.
    // Data will NOT persist after server restart.
    // This is being used only for demonstration
    // and internship project testing purposes.
    // ------------------------------------------------
    mongod = await MongoMemoryServer.create();

    // Generate temporary local database URI
    // ------------------------------------------------
    // In future production deployment, this URI
    // will be replaced with MongoDB Atlas URI
    // stored inside .env file.
    // ------------------------------------------------
    const uri = mongod.getUri();

    // Connect Mongoose with temporary database
    // ------------------------------------------------
    // Current:
    // Temporary memory database connection
    //
    // Future:
    // Permanent cloud/local MongoDB connection
    // using:
    // process.env.MONGO_URI
    // ------------------------------------------------
    const conn = await mongoose.connect(uri);

    // Success message
    console.log(
      `MongoDB Connected (Memory Server): ${conn.connection.host}`
    );

    // ------------------------------------------------
    // FUTURE IMPROVEMENTS
    // ------------------------------------------------
    // Planned future upgrades:
    //
    // • MongoDB Atlas integration
    // • Production database deployment
    // • Environment-based configuration
    // • Secure database credentials
    // • Database backup system
    // • Scalable cloud database setup
    // ------------------------------------------------

  } catch (error) {

    // Database connection error handling
    console.error(`Error: ${error.message}`);

    // Stop server if database connection fails
    process.exit(1);
  }
};

export default connectDB;