import express from "express";
import {
  createHouse,
  getHouses,
  getHouseById,
  updateHouse,
  deleteHouse,
} from "../controllers/house.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createHouse);
router.get("/", protect, getHouses);
router.get("/:id", protect, getHouseById);
router.put("/:id", protect, updateHouse);
router.delete("/:id", protect, deleteHouse);

export default router;
