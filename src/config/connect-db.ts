import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const DB_URL = process.env.DB_URL as string;
    await mongoose.connect(DB_URL);
  } catch (error) {
    console.log(error);
  }
};
