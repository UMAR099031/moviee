import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ buttons }) => {
  return (
    <div className="header">
      <div>
        <img src="/src/assets/movie.svg" alt="cinema" />
      </div>
      <nav className="btns">
        {buttons?.map((btn, index) => (
          <Link key={index} to={btn.to}>
            <button className={`btn ${btn.variant}`}>{btn.label}</button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
