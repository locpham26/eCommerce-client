import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import CartBadge from "../cart/CartBadge";
import { getCurrentUser } from "../../store/users";
import { ReactComponent as Logo } from "../../assets/logo1.svg";
import "./NavBar.scss";

function NavBar() {
  const user = getCurrentUser();
  const [visible, setVisible] = useState(true);
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const newY = window.scrollY;
    const newVisible = scroll > newY;
    setVisible(newVisible);
    setScroll(newY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{ top: visible ? 0 : -60 }}
    >
      <Link className="navbar-brand" to="/">
        <Logo className="logo" />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink className="nav-item nav-link" to="/products">
            PRODUCTS
          </NavLink>
          <NavLink className="nav-item nav-link" to="/products">
            CONTACTS
          </NavLink>
          {!user ? (
            <NavLink className="nav-item nav-link" to="/login">
              SIGN IN
            </NavLink>
          ) : (
            <>
              <NavLink className="nav-item nav-link" to="/">
                HI {user.name.toUpperCase()}
              </NavLink>
            </>
          )}
          <NavLink className="nav-item nav-link" to="/cart">
            CART <CartBadge />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
