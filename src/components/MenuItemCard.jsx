import { CDN_LINK } from "../utils/constants";

const MenuItemCard = (props) => {
  const { name, price, defaultPrice, description, imageId } =
    props?.item?.card?.info;

  return (
    <div className="menu-item-card">
      <div className="menu-item-details">
        <h2>{name}</h2>
        <h4 style={{ marginTop: "5px" }}>
          {"₹" + (price / 100 || defaultPrice / 100)}
        </h4>
        <p className="menu-item-card-description">{description} </p>
      </div>

      <div className="menu-item-img-container">
        <img className="menu-item-img" src={CDN_LINK + imageId} alt="" />
      </div>
    </div>
  );
};

export default MenuItemCard;
