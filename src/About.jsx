import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "./stylesheet.css";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import logo from "/images/HikariRamenLogo.png";
import cart from "/images/Cart.png";
import location from "/images/location.png";
import insta from "/images/instagram logo.png";
import facebook from "/images/facebook logo.png";
import twitter from "/images/twitter logo.png";
import ramenteam from "/images/Ramenteam.jpg";


export default function About() {
    const { cartCount } = useCart();
  return (
    <div className="d-flex flex-column min-vh-100">
{/* NAV */}
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
      


      {/* ABOUT HERO */}
      <div className="container-fluid px-4 py-5 flex-grow-1 d-flex align-items-center min-vh-100">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 w-100">
          <div className="col-12 col-sm-8 col-lg-6">
            <img
              src={ramenteam}
              className="d-block mx-lg-auto img-fluid w-100"
              alt="Team"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              About Hikari Ramen
            </h1>
            <p className="lead">
              At Hikari Ramen, we believe that great food has the power to bring people together — 
              to create warmth, spark connection, and shine a light on life’s simplest joys. 
              Our name, Hikari, means “light” in Japanese, and it perfectly captures the heart 
              of what we stand for: a glowing passion for flavor, tradition, and community. 
              <br /><br />
              Our journey began with a love for the art of ramen — a humble yet deeply soulful dish 
              that reflects both precision and creativity. Every bowl we serve is a celebration of that craft. 
              Our broths are simmered slowly for hours to draw out the richest, most comforting flavors, 
              while our noodles are made fresh to ensure the perfect texture with every slurp. 
              Each ingredient is carefully selected, from farm-fresh vegetables to locally sourced meats 
              and authentic Japanese seasonings.
              <br /><br />
              But Hikari Ramen is more than just a place to eat. It’s a space built around the experience 
              of sharing. Whether you’re stopping by for a quick lunch, gathering with friends for dinner, 
              or treating yourself to a quiet evening meal, we want you to feel the same warmth and comfort 
              that inspired us to open our doors. Our goal is to make every visit special — from the moment 
              you walk in and smell the savory aroma of broth in the air to the last spoonful that leaves 
              you satisfied and smiling.
              <br /><br />
              Our chefs take pride in blending traditional Japanese techniques with a modern twist. 
              You’ll find classic ramen favorites on our menu, alongside seasonal specials that highlight 
              fresh ingredients and bold new flavors. We’re constantly experimenting, learning, and growing — 
              because ramen, like light, is meant to evolve and spread.
              <br /><br />
              At Hikari Ramen, we’re not just serving food; we’re serving an experience that radiates comfort, 
              authenticity, and care. We invite you to sit back, savor each bite, and let your taste buds 
              be illuminated by the glow of truly great ramen.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="container-fluid bg-brown mt-auto">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
          <div className="col mb-3">
            <img
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
              width="110"
              height="102"
              src={logo}
              alt=""
            />
            <p className="text-white px-4">©2025</p>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5>Location</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                1234 Maple Avenue,
              </li>
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                Brooklyn, NY
              </li>
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                11215
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Hours</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                Mon - Fri
              </li>
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                10AM - 9PM
              </li>
              <br />
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                Sat - Sun
              </li>
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                11AM - 8PM
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Social Media</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
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
}
