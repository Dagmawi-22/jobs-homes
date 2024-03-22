import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const protect = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401);
      throw new Error("Not authorized ,Please login.");
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      res.status(401);
      throw new Error("Token has expired, Please login again.");
    }
    const user = await User.findById(verifyToken.userId).select("-password");

    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    req.user = user;

    next();
  } catch (error) {
    if (error.message == "Not authorized ,Please login.") {
      // redirect to login page
      res.redirect("/login");
    } else {
      res.status(401);
      throw new Error(error);
    }
  }
});


export default protect;
