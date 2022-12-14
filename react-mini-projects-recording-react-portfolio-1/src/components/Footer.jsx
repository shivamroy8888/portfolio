/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Shivam.</span>
        <div className="links">
          <a href="https://github.com/shivamroy8888">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/shivam-yaduvanshi-9298a0137/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/Shivam88Roy">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Shivam
        </p>
      </div>
    </footer>
  );
}

export default Footer;
