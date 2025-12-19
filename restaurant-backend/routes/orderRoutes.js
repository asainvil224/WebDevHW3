import express from "express";
import Order from "../Models/Order.js";

const router = express.Router();

// Create order
router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
});

// Get all orders (admin)
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

export default router;
