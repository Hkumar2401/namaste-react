import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/foodlogo.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../utils/userSlice";

export const Header = () => {
  const [logStatus, setLogStatus] = useState(false);

  const onlineStatus = useOnlineStatus();

  const user = useSelector((store)=> store.user.user)

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClick = () =>{
    setLogStatus(!logStatus);
    dispatch(changeUser(!logStatus));
  }


  return (
    <div className="header flex items-center justify-between p-[10px] shadow-lg shadow-gray-100">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="logo w-24 " src={Logo} alt="" />
        </Link>
      </div>
      <div className="nav-items flex px-3 items-center">
        <p className="px-4 text-lg font-medium">
          Online Status :{" "}
          <span className="text-sm"> {onlineStatus ? "🟢" : "🔴"} </span>{" "}
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
        <p data-testid="cart" className="px-4 cursor-pointer text-lg text-black font-medium hover:text-[#ee3024]">
          <Link to={"/cart"}>Cart ({cartItems.length} items)</Link>
        </p>

        <button
          className="login-button p-2 cursor-pointer text-lg text-black bg-gray-300 rounded-md w-28 font-medium hover:text-[#ee3024]"
          onClick={handleClick}
        >
          {logStatus ? "Log Out" : "Log In"}
        </button>

        <p className="px-4 cursor-pointer text-lg text-black font-medium hover:text-[#ee3024]">
          {user}
        </p>
      </div>
    </div>
  );
};

export default Header;
