import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import connectDB from "./database/database.js";
import userRoutes from "./routes/user.js";
import jobRoutes from "./routes/job.js";
import houseRoutes from "./routes/house.js";
import cors from "cors";

const app = express();

dotenv.config();

// Allow requests from any origin, including Expo apps
app.use(
  cors({
    origin: "*",
  })
);

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

//Routes
app.get("/", (req, res) => {
  res.send("Jobs & Homes");
});

//======= Auth route =======
app.use("/api/v1/auth", userRoutes);

// ======  Job route =======
app.use("/api/v1/job", jobRoutes);

// ======  House route =======
app.use("/api/v1/house", houseRoutes);

//Error Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8001;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is up on port:${PORT}`);
});
