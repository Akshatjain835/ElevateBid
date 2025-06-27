import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  try {
    console.log('Testing MongoDB connection...');
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/elevatebid';
    console.log(`Attempting to connect to: ${mongoURI}`);
    
    const conn = await mongoose.connect(mongoURI);
    console.log('✅ MongoDB Connected Successfully!');
    console.log(`Host: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
    
    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:');
    console.error(`Error: ${error.message}`);
    console.error('\n📋 To fix this issue:');
    console.error('1. Make sure MongoDB is installed on your system');
    console.error('2. Start MongoDB service:');
    console.error('   - Windows: net start MongoDB (run as administrator)');
    console.error('   - Or download MongoDB Community Server from: https://www.mongodb.com/try/download/community');
    console.error('3. Or use MongoDB Atlas (cloud) and update MONGO_URI in .env file');
    process.exit(1);
  }
};

testConnection();
