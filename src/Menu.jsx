import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import logo from "/images/HikariRamenLogo.png";
import cartIcon from "/images/Cart.png";

const Menu = () => {
  const { addToCart, cartCount } = useCart();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/menu`);
        const data = await res.json();
        setMenuItems(data);
      } catch (err) {
        console.error("Error fetching menu:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // Filter by type
  const appetizers = menuItems.filter(item => item.type === "appetizer");
  const ramen = menuItems.filter(item => item.type === "ramen");
  const drinks = menuItems.filter(item => item.type === "drink");

  const renderCards = (items) => (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {items.map(item => (
        <div key={item._id} className="col">
          <div className="card shadow-sm h-100">
            <img
              src={`${import.meta.env.VITE_API_URL}/images/${item.img}`}
              alt={item.name}
              className="card-img-top"
              height="400px"
            />
            <div className="card-body d-flex flex-column">
              <h3 className="text-center">{item.name}</h3>
              <p className="flex-grow-1">{item.desc}</p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <small>${item.price.toFixed(2)}</small>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (loading) return <p className="text-center py-5">Loading menu...</p>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Appetizers</h2>
      {renderCards(appetizers)}
      <h2 className="text-center my-4">Ramen</h2>
      {renderCards(ramen)}
      <h2 className="text-center my-4">Drinks</h2>
      {renderCards(drinks)}
    </div>
  );
};

export default Menu;
