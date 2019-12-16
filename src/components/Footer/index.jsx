import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-sm-5">
            <h5 className={styles.title}>Where's the FRUCK?!</h5>
            <p className={styles.description}>
              Find a food truck as soon as your cravings hit!
            </p>
          </div>
          <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <a className={styles.footerlink} href="/">
                  Example Link
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/">
                  Example Link
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/">
                  Example Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
