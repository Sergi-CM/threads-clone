import mongoose from "mongoose";

let isConnected = false;
const databaseUrl = process.env.MONGODB_URL;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!databaseUrl) return console.log("MONGODB_URL not found");
  if (isConnected) return console.log("Already connected to MongoDB");

  try {
    await mongoose.connect(databaseUrl);

    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
