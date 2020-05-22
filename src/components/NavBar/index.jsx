import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";


export default function NavBar() {
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-lg  border-bottom justify-content-between bg-dark text-white">
        <Link className="navbar-brand font-weight-bold" style={{fontSize: '30px',color:"#9fffcb"}} to="/">
          WTFRUCK!?
        </Link>
        <div className="navbar-nav text-white"style={{fontSize: '25px'}} >
          <Link className="nav-item nav-link active" to="/truck">
            Map |
          </Link>
          <Link className="nav-item nav-link active" to="/">
            Help, I'm hungry
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}
