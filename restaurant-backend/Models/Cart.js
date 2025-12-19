import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      img: String,
    },
  ],
});

export default mongoose.model("Cart", cartSchema);
