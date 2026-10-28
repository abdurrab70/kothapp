import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    //.env te check kore nibe mongo_uri ta ki set kora ace ki na jodi na thake tahole aita dibe
    const { MONGO_URI } = ENV;
    if (!MONGO_URI) throw new Error("MONGO_URI is not set");

    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("Yes 🚀, MongoDB Connected: ", conn.connection.host);
  } catch (err) {
    console.error("MongoDB Connection Field!", err);
    process.exit(1); //1 status code means fail, 0 means success.
  }
};
