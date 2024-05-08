import { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import upArrow from "../images/up-arrow.png";
import downArrow from "../images/down-arrow.png";


const RestaurantMenuCard = (props) => {

    const {resData} = props;

  const [recommendedStyle, setRecommendedStyle] = useState({
    maxHeight: "fit-content",
  });

  console.log(resData);

  return(
    <>
      <div className="recommended-section">
        <div
          className="recommended-heading"
          onClick={() => {
            if (recommendedStyle.maxHeight === "fit-content") {
              setRecommendedStyle({ maxHeight: "0" });
            } else {
              setRecommendedStyle({ maxHeight: "fit-content" });
            }
          }}
        >
          <h2 style={{ padding: "10px 0", cursor: "pointer" }}>
            {
              resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.title
            }
          </h2>
          <img
            className="up-arrow"
            src={recommendedStyle.maxHeight === "0" ? downArrow : upArrow}
            alt=""
          />
        </div>

        <div className="recommended-content" style={recommendedStyle}>
          {
          recommendedMenuCards.map((item) => {
            return <MenuItemCard key={item?.card?.info?.id} item={item} />;
          })
          }
        </div>
      </div>

      <div className="menu-second-section">
        <div className="menu-second-section-heading">
          <h2 style={{ padding: "10px 0", cursor: "pointer" }}>
            {
              resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
                ?.card?.card?.title
            }
          </h2>
          <img
            className="up-arrow"
            src={recommendedStyle.maxHeight === "0" ? downArrow : upArrow}
            alt=""
          />
        </div>

        <div
          className="menu-second-section-content"
          style={recommendedStyle}
        ></div>
      </div>
    </>
  );
};

export default RestaurantMenuCard;
