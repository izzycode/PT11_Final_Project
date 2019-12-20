import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom justify-content-between" style={{marginBottom: '35px'}}>
        <Link className="navbar-brand font-weight-bold" to="/">
          Where's the FRUCK ?!
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/truck" style={{fontSize: 'small'}}>
            Map |
          </Link>
          <Link className="nav-item nav-link active" to="/" style={{fontSize: 'small'}}>
            Help, I'm hungry
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}
