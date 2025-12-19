import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "./stylesheet.css";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import logo from "/images/HikariRamenLogo.png";
import cart from "/images/Cart.png";
import insta from "/images/instagram logo.png";
import facebook from "/images/facebook logo.png";
import twitter from "/images/twitter logo.png";

function CartPage() {
  const { cartItems, removeFromCart, cartTotal, cartCount } = useCart();
  const [loading, setLoading] = useState(true);

  // Optional: you can fetch cart again here if needed
  useEffect(() => {
    setLoading(false); // CartContext already fetches cart from backend
  }, []);

  if (loading) return <p>Loading cart...</p>;

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light py-3 mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="110" height="102" />
          </Link>
      
          {/* Hamburger button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
      
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link fs-5 fw-bold" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 fw-bold" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 fw-bold" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 fw-bold" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 fw-bold position-relative" to="/cart">
                  <img height="25px" src={cart} alt="Cart" />
                  <span
                    className="badge bg-danger position-absolute top-0 start-100 translate-middle"
                  >
                    {cartCount}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

      {/* Cart Section */}
      <div className="container py-5">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-group">
            {cartItems.map((item) => (
              <li
                key={item.name}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.name}
                      height="60"
                      className="me-3 rounded"
                    />
                  )}
                  <span>
                    {item.name} — ${item.price.toFixed(2)} × {item.quantity}
                  </span>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <h3 className="mt-3">Total: ${cartTotal.toFixed(2)}</h3>
        <p>Items in Cart: {cartCount}</p>
      </div>

      
    </div>
  );
}

export default CartPage;
