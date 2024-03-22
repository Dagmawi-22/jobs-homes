import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
    },
    location: {
      type: String,
      trim: true,
      required: [true, "Location is required"],
    },
    salary: {
      type: Number,
      trim: true,
      required: [true, "Salary is required"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Description is required"],
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
