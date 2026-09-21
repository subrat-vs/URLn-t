import mongoose from "mongoose";
import env from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log(`server is connected to mongodb`);
  } catch (error) {
    console.log(`error in connected mongodb ${error}`);
  }
};