import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>ShopNow</h2>
          <p>Your one-stop shop for everything fashion & more.</p>
        </div>

        

        <div className="footer-links">
          <div className="footerCategoryItems">
            <h4>Categories</h4>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Electronics</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="footerCustomerCare">
            <h4>Customer Care</h4>
            <ul>
              <li>Help Center</li>
              <li>Returns</li>
              <li>Track Order</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footerCompany">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe to our Newsletter</h3>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShopNow. All rights reserved.</p>
        <div className="footer-social">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
