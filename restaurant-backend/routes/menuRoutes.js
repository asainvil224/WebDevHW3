import express from "express";
import MenuItem from "../Models/MenuItem.js";

const router = express.Router();

// GET all menu items
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find({});
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching menu items" });
  }
});

// GET menu items by type (optional)
router.get("/type/:type", async (req, res) => {
  const { type } = req.params; // "appetizer", "ramen", "drink"
  try {
    const items = await MenuItem.find({ type });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching menu items by type" });
  }
});

export default router;
