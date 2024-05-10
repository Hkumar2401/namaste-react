import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItemCard from "./MenuItemCard";
import upArrow from "../images/up-arrow.png";
import downArrow from "../images/down-arrow.png";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [collapsible, setCollapsible] = useState({
    first: { maxHeight: "fit-content" },
    second: { maxHeight: "0" },
    third: { maxHeight: "0" },
  });

  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  if (resData === null) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  const {
    name,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cuisines,
    sla,
  } = resData?.cards[2]?.card?.card?.info;

  return (
    <div className="restaurant-menu-page">
      <div className="restaurant-menu-res-details">
        <h1 style={{ marginBottom: "20px" }}>{name}</h1>
        <div
          className="restaurant-menu-res-details-box"
          style={{ fontWeight: "600" }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "green",
                display: "flex",
                justifyContent: "center",
                padding: "2px",
                borderRadius: "20px",
                marginRight: "5px",
              }}
            >
              <p style={{ color: "white" }}>&#9733;</p>
            </div>
            <h3>{avgRating + " (" + totalRatingsString + ") "}</h3>
            <p style={{ padding: "5px 10px" }}>•</p>
            <h3>{costForTwoMessage}</h3>
          </div>
          <div>
            <p style={{ margin: "5px 0" }}>{cuisines.join(", ")}</p>
            <p>{sla.slaString.toLowerCase()}</p>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-container">
        {/* Menu Fist Section */}

        <div className="menu-section">
          <div
            className="menu-section-heading"
            onClick={() => {
              if (collapsible.first.maxHeight === "fit-content") {
                setCollapsible((prev) => ({
                  ...prev,
                  first: {
                    maxHeight: "0",
                  },
                }));
              } else {
                setCollapsible((prev) => ({
                  ...prev,
                  first: {
                    maxHeight: "fit-content",
                  },
                }));
              }
            }}
          >
            <h2 style={{ padding: "10px 0", cursor: "pointer" }}>
              {
                resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
                  ?.card?.card?.title
              }
            </h2>
            <img
              className="up-arrow"
              src={collapsible.first.maxHeight === "0" ? downArrow : upArrow}
              alt=""
            />
          </div>

          <div className="menu-section-content" style={collapsible.first}>
            {resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
              (item) => {
                return <MenuItemCard key={item?.card?.info?.id} item={item} />;
              }
            )}
          </div>
        </div>

        {/* Menu Second Section */}

        <div className="menu-section">
          <div
            className="menu-section-heading"
            onClick={() => {
              if (collapsible.second.maxHeight === "fit-content") {
                setCollapsible((prev) => ({
                  ...prev,
                  second: {
                    maxHeight: "0",
                  },
                }));
              } else {
                setCollapsible((prev) => ({
                  ...prev,
                  second: {
                    maxHeight: "fit-content",
                  },
                }));
              }
            }}
          >
            <h2 style={{ padding: "10px 0", cursor: "pointer" }}>
              {
                resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
                  ?.card?.card?.title
              }
            </h2>
            <img
              className="up-arrow"
              src={collapsible.second.maxHeight === "0" ? downArrow : upArrow}
              alt=""
            />
          </div>

          <div className="menu-section-content" style={collapsible.second}>
            {resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.map(
              (item) => {
                return <MenuItemCard key={item?.card?.info?.id} item={item} />;
              }
            )}
          </div>
        </div>

        {/* Menu Third Section */}

        <div className="menu-section">
          <div
            className="menu-section-heading"
            onClick={() => {
              if (collapsible.third.maxHeight === "fit-content") {
                setCollapsible((prev) => ({
                  ...prev,
                  third: {
                    maxHeight: "0",
                  },
                }));
              } else {
                setCollapsible((prev) => ({
                  ...prev,
                  third: {
                    maxHeight: "fit-content",
                  },
                }));
              }
            }}
          >
            <h2 style={{ padding: "10px 0", cursor: "pointer" }}>
              {
                resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
                  ?.card?.card?.title
              }
            </h2>
            <img
              className="up-arrow"
              src={collapsible.third.maxHeight === "0" ? downArrow : upArrow}
              alt=""
            />
          </div>

          <div className="menu-section-content" style={collapsible.third}>
            {resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards?.map(
              (item) => {
                return <MenuItemCard key={item?.card?.info?.id} item={item} />;
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
