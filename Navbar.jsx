import React from "react";

function Navbar() {

  return (

    <nav
      className="
      navbar
      navbar-expand-lg
      navbar-dark
      bg-dark"
    >

      <div className="container">

        <a
          className="navbar-brand"
          href="/"
        >
          7One Clothing
        </a>

        <div>

          <a
            href="/"
            className="
            nav-link
            text-white"
          >
            Home
          </a>

          <a
            href="/shop"
            className="
            nav-link
            text-white"
          >
            Shop
          </a>

          <a
            href="/contact"
            className="
            nav-link
            text-white"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
