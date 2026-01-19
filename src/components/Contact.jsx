import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <section id="intro">
            <p>Namaste Duniya!!!</p>
            <h3 className="name">
              My Name is <span>Shivankar Tiwari</span>
            </h3>

            <div className="profile">
              <span>Tech Enthusiast | </span>
              <span>Traveller</span>
            </div>
            <br />
            <h2>
              I love to build and break stuff & loves to know about Hardware.
            </h2>
            <hr />
            <div className="container text-center align-items-center p-3">
              <h3>Get in Touch</h3>
              <div className="contact">
                <h3>
                  <NavLink
                    to="https://www.linkedin.com/in/shivankar-tiwari-1a8ab2192/"
                    target="_blank"
                    className="linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </NavLink>
                </h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
