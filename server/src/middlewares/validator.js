import { body } from "express-validator";
import {
  checkAllowedFields,
  existingEmail,
  titleCase,
} from "../helpers/validation.js";

export const register_user_validator = [
  body("email")
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is not valid")
    .custom(existingEmail)
    .normalizeEmail(),
  body("password")
    .exists()
    .withMessage("Password is required")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 5 })
    .withMessage("Password must be atleast 6 characters"),
  body().custom((body) => checkAllowedFields(body, ["email", "password"])),
];
