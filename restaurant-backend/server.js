import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import menuRoutes from "./routes/menuRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import path from "path";

dotenv.config();
const app = express();
app.use(cors({
  origin: ["http://localhost:5173", "https://your-vercel-site.vercel.app"]
}));
// Middleware
app.use(cors());
app.use(express.json());

// Serve images statically
app.use("/images", express.static(path.join(path.resolve(), "public/images")));

// Routes
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
