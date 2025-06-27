import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Use environment variable or fallback to local MongoDB
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/elevatebid';
    
    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error('Make sure MongoDB is running locally or check your MONGO_URI in .env file');
    process.exit(1);
  }
};

export default connectDB;
