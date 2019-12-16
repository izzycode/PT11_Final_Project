import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom justify-content-between">
        <Link className="navbar-brand" to="/">
          Where's the FRUCK ?!
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="Blank">
            Map
          </Link>
          <Link className="nav-item nav-link active" to="Blank">
            Help, I'm Hungry
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}
