import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    props.resData?.info;
  const { deliveryTime } = props.resData.info.sla;

  return (
    <div className="restaurant-card">
      <div className="restaurant-card-effect">
        <div className="restaurant-image-container">
          <img
            className="restaurant-image"
            src={CDN_LINK + cloudinaryImageId}
            alt=""
          />
        </div>
        <div className="restaurant-details">
          <h2 className="" style={{ marginBottom: "5px", marginTop: "10px" }}>
            {name}
          </h2>
          <h4>{cuisines.join(", ")}</h4>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <h4>{avgRating ? avgRating + " stars" : "NEW"}</h4>
            <p style={{ padding: "0 10px" }}>•</p>
            <h4>{deliveryTime} mins</h4>
            <p style={{ padding: "0 10px" }}>•</p>
            <h4>{costForTwo}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
