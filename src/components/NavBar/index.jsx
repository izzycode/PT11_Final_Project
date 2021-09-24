import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";


export default function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md  border-bottom justify-content-between bg-dark text-white">
        <Link className="navbar-brand font-weight-bold link" to="/">
          WTFRUCK!?
        </Link>
        <div className="navbar-nav text-white">
          <Link className="nav-item nav-link active link" to="/truck">
            Map |
          </Link>
          <Link className="nav-item nav-link active link" to="/">
            Help, I'm hungry
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}
