import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";
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
      >
        <ShimmerRestaurantMenu />
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
    <div className="restaurant-menu-page mt-20 flex flex-col items-center">
      <div className="restaurant-menu-res-details">
        <h1 className="mb-8 text-2xl font-bold">{name}</h1>
        <div className="restaurant-menu-res-details-box bg-white font-semibold flex justify-center flex-col cursor-pointer w-[800px] h-32 border-[2px] border-solid border-[#1f2b3c] rounded-xl p-4 shadow-zinc-300 shadow-lg ">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-green-600 flex justify-center p-3 rounded-full me-1 items-center">
              <p className="text-white">&#9733;</p>
            </div>
            <h3 className="font-bold">{avgRating + " (" + totalRatingsString + ") "}</h3>
            <p className="px-3" >•</p>
            <h3 className="font-bold">{costForTwoMessage}</h3>
          </div>
          <div>
            <p className="my-2">{cuisines.join(", ")}</p>
            <p>{sla.slaString.toLowerCase()}</p>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-container w-[800px] p-2 mt-12">
        {/* Menu Fist Section */}

        <div className="menu-section flex flex-col mb-12">
          <div
            className="menu-section-heading flex justify-between items-center  boreder-solid border-y-[1px] border-zinc-300 cursor-pointer select-none"
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
            <h2 className="py-2 cursor-pointer font-semibold text-lg" >
              {
                resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
                  ?.card?.card?.title
              }
            </h2>
            <img
              className="up-arrow w-[30px] h-5"
              src={collapsible.first.maxHeight === "0" ? downArrow : upArrow}
              alt=""
            />
          </div>

          <div className="menu-section-content mt-1 max-h-fit overflow-hidden flex flex-col justify-center items-center" style={collapsible.first}>
            {resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
              (item) => {
                return <MenuItemCard key={item?.card?.info?.id} item={item} />;
              }
            )}
          </div>
        </div>

        {/* Menu Second Section */}

        <div className="menu-section flex flex-col mb-12">
          <div
            className="menu-section-heading flex justify-between items-center  boreder-solid border-y-[1px] border-zinc-300 cursor-pointer select-none"
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
            <h2 className="py-2 cursor-pointer font-semibold text-lg" >
              {
                resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
                  ?.card?.card?.title
              }
            </h2>
            <img
              className="up-arrow w-[30px] h-5"
              src={collapsible.second.maxHeight === "0" ? downArrow : upArrow}
              alt=""
            />
          </div>

          <div className="menu-section-content mt-1 max-h-fit overflow-hidden flex flex-col justify-center items-center" style={collapsible.second}>
            {resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.map(
              (item) => {
                return <MenuItemCard key={item?.card?.info?.id} item={item} />;
              }
            )}
          </div>
        </div>

        {/* Menu Third Section */}

        <div className="menu-section flex flex-col mb-12">
          <div
            className="menu-section-heading flex justify-between items-center  boreder-solid border-y-[1px] border-zinc-300 cursor-pointer select-none"
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
            <h2 className="py-2 cursor-pointer font-semibold text-lg">
              {
                resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
                  ?.card?.card?.title
              }
            </h2>
            <img
              className="up-arrow w-[30px] h-5"
              src={collapsible.third.maxHeight === "0" ? downArrow : upArrow}
              alt=""
            />
          </div>

          <div className="menu-section-content mt-1 max-h-fit overflow-hidden flex flex-col justify-center items-center" style={collapsible.third}>
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
