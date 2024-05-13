import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/foodlogo.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const [btn, setBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="header flex items-center justify-between p-[10px] shadow-lg shadow-gray-100">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="logo w-24 " src={Logo} alt="" />
        </Link>
      </div>
      <div className="nav-items flex px-3 items-center">
        <p className="px-4 text-lg font-medium">
          Online Status : <span className="text-sm"> {onlineStatus ? "🟢" : "🔴"} </span>{" "}
        </p>
        <p className="px-4 cursor-pointer text-lg text-black font-medium hover:text-[#ee3024]">
          <Link to={"/"}>Home</Link>
        </p>
        <p className="px-4 cursor-pointer text-lg text-black font-medium hover:text-[#ee3024]">
          <Link to={"/about"}>About Us</Link>
        </p>
        <p className="px-4 cursor-pointer text-lg text-black font-medium hover:text-[#ee3024]">
          <Link to={"/contact"}>Contact</Link>
        </p>
        <p className="px-4 cursor-pointer text-lg text-black font-medium hover:text-[#ee3024]">Cart</p>
        <button
          className="login-button p-2 cursor-pointer text-lg text-black bg-gray-300 rounded-md w-20 font-medium hover:text-[#ee3024]"
          onClick={() => {
            btn === "Login" ? setBtn("Logout") : setBtn("Login");
          }}
        >
          {btn}
        </button>

          <p className="px-4 cursor-pointer text-lg text-black font-medium hover:text-[#ee3024]">{loggedInUser}</p>
        
      </div>
    </div>
  );
};

export default Header;
