import mongoose from "mongoose";
import dotenv from "dotenv";
import MenuItem from "./Models/MenuItem.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const seedMenuItems = async () => {
  try {
    await MenuItem.deleteMany({}); // Clear existing items

    const items = [
      // Appetizers
      {
        name: "Gyoza (Pan-Fried Dumplings)",
        desc: "Handmade pork and vegetable dumplings, served with our house soy-garlic dipping sauce.",
        price: 8.50,
        type: "appetizer",
        img: "gyoza.webp"
      },
      {
        name: "Edamame with Sea Salt",
        desc: "Freshly steamed soybeans sprinkled with sea salt. Simple, healthy, and perfectly addictive.",
        price: 6.00,
        type: "appetizer",
        img: "edamame.jpg"
      },
      {
        name: "Crispy Karaage Chicken",
        desc: "Tender bites of marinated chicken served with a tangy yuzu mayo dip.",
        price: 9.50,
        type: "appetizer",
        img: "karage.webp"
      },
      // Ramen
      {
        name: "Hikari Shoyu Ramen",
        desc: "Our signature soy-based broth, balanced with savory chicken stock, topped with tender chashu pork, bamboo shoots, nori, and a soft-boiled egg.",
        price: 14.00,
        type: "ramen",
        img: "shoyu ramen.jpg"
      },
      {
        name: "Spicy Miso Ramen",
        desc: "Bold miso broth with a spicy kick, loaded with minced pork, corn, scallions, bean sprouts, and chili oil for extra heat.",
        price: 15.50,
        type: "ramen",
        img: "spicy miso ramen.jpg"
      },
      {
        name: "Tonkotsu Classic",
        desc: "Rich and creamy pork bone broth simmered for 12 hours, served with chashu pork, black garlic oil, soft egg, and mushrooms.",
        price: 16.00,
        type: "ramen",
        img: "tonkotsu ramen.jpg"
      },
      // Drinks
      {
        name: "Matcha Iced Latte",
        desc: "Creamy matcha blended with milk and a hint of sweetness — refreshing and energizing.",
        price: 5.50,
        type: "drink",
        img: "matcha latte.jpg"
      },
      {
        name: "Yuzu Lemonade",
        desc: "Sparkling lemonade infused with Japanese yuzu citrus for a zesty, tangy finish.",
        price: 4.75,
        type: "drink",
        img: "yuzu lemonade.jpg"
      },
      {
        name: "Ramune Soda",
        desc: "The classic Japanese marble soda available in original, melon, or strawberry flavors.",
        price: 4.25,
        type: "drink",
        img: "ramune.jpg"
      }
    ];

    await MenuItem.insertMany(items);
    console.log("Database seeded!");
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    mongoose.disconnect();
  }
};

seedMenuItems();
