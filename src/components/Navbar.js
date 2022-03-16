import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import "./Button.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = (event) => {
    event.stopPropagation();
    setClick(!click);
    console.log(event);
  };

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  console.log("click", click);

  return (
    <div>
      <nav className="navbar" onClick={closeMobileMenu}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Logo
          </Link>

          <div className="menu-icon" onClick={(event) => handleClick(event)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/archives"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Archives
              </Link>
            </li>
          </ul>

          <Button buttonStyle="btn--outline" className="signupButton">
            SIGN UP
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
