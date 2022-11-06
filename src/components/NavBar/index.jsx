import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/wtflogorembg.png"


export default function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md justify-content-between">
        <Link className="navbar-brand link" to="/">
          <img className="logo-img" src={logo} alt="logo" />
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active link" to="/register">
          <i class="bi bi-truck mr-2"></i>Food Truck Register
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}
