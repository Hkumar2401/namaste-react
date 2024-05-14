import { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import upArrow from "../images/up-arrow.png";
import downArrow from "../images/down-arrow.png";

const RestaurantMenuCategory = ({
  data,
  showItems,
  index,
  showIndex,
  setShowIndex,
}) => {
  const { title, itemCards } = data;

  return (
    <div className="menu-section flex flex-col mb-12">
      <a href={`#` + title}>
        <div
          className="menu-section-heading flex justify-between p-2 items-center border-solid border-y-[1px] border-zinc-300 cursor-pointer select-none shadow-md"
          id={title}
          onClick={() => {
            showIndex === index ? setShowIndex(null) : setShowIndex(index);
          }}
        >
          <h2 className="p-2 cursor-pointer font-bold text-lg">
            {title} ({itemCards.length}){" "}
          </h2>
          <img
            className="up-arrow w-[30px] h-5"
            src={showIndex === index ? upArrow : downArrow}
            alt=""
          />
        </div>
      </a>
      <div className="menu-section-content mt-1 flex flex-col justify-center items-center">
        {showItems &&
          itemCards?.map((item) => {
            return <MenuItemCard key={item?.card?.info?.id} item={item} cartFunctioning={"add"} />;
          })}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
