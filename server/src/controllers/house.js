import House from "../models/House.js";

// Create a new house
export const createHouse = async (req, res) => {
  try {
    const house = new House(req.body);
    await house.save();
    res.status(201).json(house);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all houses
export const getHouses = async (req, res) => {
  try {
    const houses = await House.find();
    res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single house by ID
export const getHouseById = async (req, res) => {
  try {
    const house = await House.findById(req.params.id);
    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }
    res.status(200).json(house);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a house by ID
export const updateHouse = async (req, res) => {
  try {
    const house = await House.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }
    res.status(200).json(house);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a house by ID
export const deleteHouse = async (req, res) => {
  try {
    const house = await House.findByIdAndDelete(req.params.id);
    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }
    res.status(200).json({ message: "House deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const houseController = {
  createHouse,
  getHouses,
  getHouseById,
  updateHouse,
  deleteHouse,
};

export default houseController;
