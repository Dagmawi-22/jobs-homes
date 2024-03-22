import { Router } from "express";
const router = Router();
import userController from "../controllers/user.js";
import { validationHandler } from "../helpers/validation.js";
import { register_user_validator } from "../middlewares/validator.js";

router.post(
  "/register",
  validationHandler(register_user_validator),
  userController.registerUser
);

router.post("/login", userController.loginUser);

const userRouters = router;

export default userRouters;
