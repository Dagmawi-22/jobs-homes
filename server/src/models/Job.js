import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
    },
    company: {
      type: String,
      required: [true, "Company is required"],
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
      required: [true, "Description is required"],
    },
    category: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

jobSchema.pre("save", function (next) {
  const doc = this;
  if (doc.isNew) {
    getNextSequenceValue("jobId")
      .then((nextId) => {
        doc.id = nextId;
        next();
      })
      .catch((error) => next(error));
  } else {
    next();
  }
});

async function getNextSequenceValue(sequenceName) {
  const sequenceDocument = await Sequence.findOneAndUpdate(
    { _id: sequenceName },
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true }
  );
  return sequenceDocument.sequence_value;
}

const Job = mongoose.model("Job", jobSchema);

export default Job;
