import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <p className="logo">
          <img
            src={logo}
            alt=""
            style={{
              width: "120px",
              height: "100px",
              objectFit: "cover",
              position: "relative",
              top: "10px",
            }}
          />
          <span
            style={{
              fontStyle: "italic",
              fontWeight: "700",
              lineHeight: "normal",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              color: "#274C5B",
            }}
          >
            SayourKu
          </span>
        </p>
        <ul>
          <li>
            <Link to="/" className="nav">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/layanan" className="nav">
              LAYANAN
            </Link>
          </li>
          <li>
            <Link to="/promo" className="nav">
              PROMO
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav">
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/info" className="nav">
              INFORMASI
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav">
              ABOUT
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ marginTop: "30px" }}
            />
          </li>
        </ul>
        <Link to="/login">
          <p className="log">
            <FontAwesomeIcon icon={faUser} />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
