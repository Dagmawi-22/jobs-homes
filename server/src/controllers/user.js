import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { responseHandler } from "../helpers/responseHandler.js";
import { errorHandler } from "../helpers/errorHandler.js";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "24h" });
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Hash user password..
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    const properties = {
      email,
      name,
    };
    // Generate token
    const token = generateToken(user._id);

    const user_data = {
      name,
      email,
      _id: user._id,
      token,
    };

    return responseHandler(
      res,
      201,
      true,
      "Account successfully created",
      user_data
    );
  } catch (error) {
    await errorHandler(error);
    return responseHandler(
      res,
      500,
      false,
      "Something went wrong, try again later.",
      user_data
    );
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found, return an error
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match, return an error
    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect password." });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h", // Token expires in 24 hour
    });

    // Send the token in the response
    res.status(200).json({ user, token });
  } catch (error) {
    // Handle errors
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const userController = {
  registerUser,
  loginUser,
};

export default userController;
