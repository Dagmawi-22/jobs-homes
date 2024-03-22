import mongoose from "mongoose";

const houseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    price: {
      type: Number,
      required: [true, "Please enter your price"],
    },
    location: {
      type: String,
      required: [true, "Please enter your Location"],
    },
    description: {
      type: String,
      required: [true, "Please enter your description"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Please enter your email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
  },
  { timestamps: true }
);

const House = mongoose.model("House", houseSchema);

export default House;
