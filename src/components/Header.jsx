import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/foodlogo.jpg";

export const Header = () => {
  const [btn, setBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <Link to={"/"}>
        <img className="logo" src={Logo} alt="" />
        </Link>
      </div>
      <div className="nav-items">
        <p>
          <Link to={"/"}>Home</Link>
        </p>
        <p>
          <Link to={"/about"}>About Us</Link>
        </p>
        <p>
          <Link to={"/contact"}>Contact</Link>
        </p>
        <p>Cart</p>
        <button
          className="login-button"
          onClick={() => {
            btn === "Login" ? setBtn("Logout") : setBtn("Login");
          }}
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default Header;
