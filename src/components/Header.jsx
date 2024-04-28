import Logo from "../../foodlogo.jpg"

export const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
