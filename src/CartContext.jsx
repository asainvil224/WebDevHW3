import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Replace this with actual user ID or session ID if available
  const userId = "defaultUser";

  // Load cart from backend on mount
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/cart/${userId}`)

      .then((res) => {
        setCartItems(res.data.items);
      })
      .catch((err) => console.error("Failed to fetch cart:", err));
  }, []);

  // Update cart total and count whenever cartItems change
  useEffect(() => {
    setCartTotal(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
    setCartCount(cartItems.reduce((count, item) => count + item.quantity, 0));
  }, [cartItems]);

  // Helper function to sync cart with backend
  const syncCart = (updatedCart) => {
    setCartItems(updatedCart);
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}/api/cart/${userId}`, { items: updatedCart })
      .catch((err) => console.error("Failed to update cart:", err));
  };

  const addToCart = (item) => {
    const existing = cartItems.find((i) => i.name === item.name);
    let updatedCart;
    if (existing) {
      updatedCart = cartItems.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }
    syncCart(updatedCart);
  };

  const removeFromCart = (name) => {
    const updatedCart = cartItems.filter((item) => item.name !== name);
    syncCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, cartTotal, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
