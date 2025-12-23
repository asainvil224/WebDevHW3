import React, { useEffect, useState } from "react";
import "./stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import logo from "/images/HikariRamenLogo.png";
import cart from "/images/Cart.png";
import insta from "/images/instagram logo.png";
import facebook from "/images/facebook logo.png";
import twitter from "/images/twitter logo.png";

const Menu = () => {
  const { addToCart, cartCount } = useCart();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/menu`);
        const data = await response.json();
        setMenuItems(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching menu:", err);
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // Separate items by type
  const appetizers = menuItems.filter(item => item.type === "appetizer");
  const ramen = menuItems.filter(item => item.type === "ramen");
  const drinks = menuItems.filter(item => item.type === "drink");

  const renderCards = (items) => (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {items.map((item) => (
        <div key={item._id} className="col">
          <div className="card shadow-sm h-100">
            <img
              src={`${import.meta.env.VITE_APP_API_URL}/images/${item.img}`}
              className="card-img-top"
              alt={item.name}
              height="400px"
            />
            <div className="card-body d-flex flex-column">
              <h3 className="text-center">{item.name}</h3>
              <p className="card-text flex-grow-1">{item.desc}</p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <small className="text-body-secondary">${item.price.toFixed(2)}</small>
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
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light py-3 mb-4">
  <div className="container-fluid">
    {/* Logo */}
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
        <li className="nav-item position-relative">
          <Link className="nav-link fs-5 fw-bold" to="/cart">
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


      {/* Menu Sections */}
      <main className="flex-grow-1 py-5 container-fluid">
        <section className="mb-5 px-4">
          <h2 className="pb-2 border-bottom text-center">Appetizers</h2>
          {renderCards(appetizers)}
        </section>

        <section className="mb-5 px-4">
          <h2 className="pb-2 border-bottom text-center">Ramen</h2>
          {renderCards(ramen)}
        </section>

        <section className="mb-5 px-4">
          <h2 className="pb-2 border-bottom text-center">Drinks</h2>
          {renderCards(drinks)}
        </section>
      </main>

      {/* Footer */}
      <footer className="container-fluid bg-brown mt-auto">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
          <div className="col mb-3">
            <img className="d-flex align-items-center mb-3" width="110" height="102" src={logo} alt="" />
            <p className="text-white px-4">©2025</p>
          </div>
          <div className="col mb-3"></div>
          <div className="col mb-3">
            <h5>Location</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 p-0 text-body-secondary">1234 Maple Avenue</li>
              <li className="nav-item mb-2 p-0 text-body-secondary">Brooklyn, NY</li>
              <li className="nav-item mb-2 p-0 text-body-secondary">11215</li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>Hours</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 p-0 text-body-secondary">Mon - Fri: 10AM - 9PM</li>
              <li className="nav-item mb-2 p-0 text-body-secondary">Sat - Sun: 11AM - 8PM</li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>Social Media</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 p-0 text-body-secondary">
                <img height="40px" src={insta} alt="" />
                <img height="40px" src={facebook} alt="" />
                <img height="40px" src={twitter} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
