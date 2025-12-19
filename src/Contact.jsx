import React, { useEffect } from 'react';
import "./stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import logo from "/images/HikariRamenLogo.png";
import cart from "/images/Cart.png";
import location from "/images/location.png";
import insta from "/images/instagram logo.png";
import facebook from "/images/facebook logo.png";
import twitter from "/images/twitter logo.png";

const ContactPage = () => {
    // Optional: Use useEffect to set the document title, replacing the <title> tag
    useEffect(() => {
        document.title = 'About - Hikari Ramen';
    }, []);
    const { cartCount } = useCart();

    return (
        <>
            {/* Header / Navigation */}
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
            


            {/* Main Content / Contact Form Section */}
            <div className="container-fluid">
                <h2 className="pb-2 border-bottom text-align-center text-center">Contact Us </h2>

                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={location} className="d-block mx-lg-auto img-fluid" alt="Location map" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <form className="contact-form" action="contact.html" method="post">
                                <input type="text" className="contact-form-text" placeholder="Your Name" />
                                <input type="email" className="contact-form-text" placeholder="Your Email" />
                                <input type="text" className="contact-form-text" placeholder="Your Phone number" />
                                <textarea className="contact-form-text" placeholder="Your message"></textarea>
                                <input type="submit" className="contact-form-btn" value="send" />
                            </form>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="container-fluid bg-brown">
                <footer className=" row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
                    <div className="col mb-3">
                        <img className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" width="110" height="102" src={logo} alt="Hikari Ramen Logo" />
                        <p className="text-white px-4">©2025</p>
                    </div>
                    <div className="col mb-3"></div>
                    <div className="col mb-3">
                        <h5>Location</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">1234 Maple Avenue,</li>
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">Brooklyn, NY</li>
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">11215</li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5>Hours</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">Mon - Fri</li>
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">10AM - 9PM</li>
                            <br />
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">Sat - Sun</li>
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">11AM - 8PM</li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5>Social Media</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 nav-link p-0 text-body-secondary">
                                <img height="40px" src={insta} alt="Instagram Logo" />
                                <img height="40px" src={facebook} alt="Facebook Logo" />
                                <img height="40px" src={twitter} alt="Twitter Logo" />
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
            {/* The cart.js script reference would be handled by React state/hooks */}
        </>
    );
};

export default ContactPage;