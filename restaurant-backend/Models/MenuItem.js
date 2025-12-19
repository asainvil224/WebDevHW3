import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  img: { type: String, required: true } // filename of the image
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;
