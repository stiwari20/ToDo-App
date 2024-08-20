import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body bg-dark p-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand brand p-2" href="/todo">
            ToDo App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active p-2" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2 me-5" href="#">
                  Contact
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a> */}
              {/* <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul> */}
              {/* </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
