import express from "express";
import Cart from "../Models/Cart.js"; // create Cart model
const router = express.Router();

// Get user's cart
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId });
    res.json(cart || { items: [] });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
});

// Update user's cart
router.post("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { items } = req.body;
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId },
      { items },
      { upsert: true, new: true }
    );
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: "Failed to update cart" });
  }
});

export default router;
