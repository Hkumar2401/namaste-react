import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resData === null) {
    return (
      <div>
        <ShimmerRestaurantMenu />
      </div>
    );
  }

  const categories =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) => {
        return (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

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
        <h1 className="mb-8 p-2 text-2xl font-bold">{name}</h1>
        <div className="restaurant-menu-res-details-box bg-white font-semibold flex justify-center flex-col cursor-pointer w-[800px] h-32 border-[2px] border-solid border-[#1f2b3c] rounded-xl p-4 shadow-zinc-300 shadow-lg ">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-green-600 flex justify-center p-3 rounded-full me-1 items-center">
              <p className="text-white">&#9733;</p>
            </div>
            <h3 className="font-bold">
              {avgRating + " (" + totalRatingsString + ") "}
            </h3>
            <p className="px-3">•</p>
            <h3 className="font-bold">{costForTwoMessage}</h3>
          </div>
          <div>
            <p className="my-2">{cuisines.join(", ")}</p>
            <p>{sla.slaString.toLowerCase()}</p>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-container w-[800px] p-2 mt-12">
        {categories.map((category, index) => {
          return (
            <RestaurantMenuCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              index={index}
              showIndex={showIndex}
              setShowIndex={setShowIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
