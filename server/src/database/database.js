import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  mongoose
    .connect(process.env.LOCAL_DB)
    .then(() => {
      console.log("Database connected successfuly.");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDB;
