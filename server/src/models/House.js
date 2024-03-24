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
    phone: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Please enter your phone"],
    },
    photo: {
      data: Buffer, // Binary data for the photo
      contentType: String, // Mime type of the photo
    },
  },
  { timestamps: true }
);

// Pre-save hook to handle file upload and conversion to binary data
houseSchema.pre("save", async function (next) {
  if (!this.isModified("photo")) {
    return next();
  }
  try {
    // Check if photo file is present
    if (!this.photo || !this.photo.path) {
      return next(new Error("Photo file is required"));
    }
    // Read the photo file and set the binary data and mime type
    const photoData = fs.readFileSync(this.photo.path);
    this.photo.data = photoData;
    this.photo.contentType = this.photo.mimetype;
    next();
  } catch (error) {
    next(error);
  }
});

const House = mongoose.model("House", houseSchema);

export default House;
