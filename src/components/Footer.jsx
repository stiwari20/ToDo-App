import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer text-center ">
        <h5 className="pt-3">Source Code</h5>
        <a
          href="https://github.com/stiwari20/ToDo-App"
          className="git-logo"
          target="_blank"
        >
          {/* <FontAwesomeIcon icon={faTrash} /> */}
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <p className="pt-2">All Rights Reservsed.&copy;</p>
      </div>
    </>
  );
};

export default Footer;
