import mongoose from "mongoose";
import { DBName } from "../constans.js";

export const ConnectDB = async () => {
  try {
    const res = await mongoose?.connect(`${process.env.MONGODB_URI}/${DBName}`);
    console.log(` connected DB`);
  } catch (error) {
    console.log("🚀 ~ ConnectDB ~ error:", error);
  }
};
