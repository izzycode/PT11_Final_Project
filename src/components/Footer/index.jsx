import React from "react";
// import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-sm-5 mt-4">
            <h5>Where's the FRUCK?!</h5>
            <p>
              Find a food truck as soon as your cravings hit!
            </p>
          </div>
          <div className="col-2 mt-3">
            <ul className="list-unstyled">
              <li>
                <a className="link" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
