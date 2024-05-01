import { useState } from "react";
import Logo from "../../foodlogo.jpg"

export const Header = () => {

  const [btn, setBtn] = useState("Login");
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="" />
      </div>
      <div className="nav-items">
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Cart</p>
        <button className="login-button" onClick={()=>{
          btn === "Login" ? setBtn("Logout") : setBtn("Login")
        }}>{btn}</button>
      </div>
    </div>
  );
};

export default Header;
