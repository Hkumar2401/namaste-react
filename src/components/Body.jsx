import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  // console.log(filteredRestaurants);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body mt-5">
      <div className="search-container p-2 flex justify-center items-center">
        <input
        data-testid="searchInput"
          className="search-bar w-[300px] h-8 rounded-s-md border-solid border-black border-2 p-1 focus:outline-[#ee3024]"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="searchBtn"
          className="search-button me-5 cursor-pointer h-8 bg-gray-300 hover:text-[#ee3024] hover:bg-gray-200 p-2 flex items-center rounded-e-lg"
          onClick={() => {
            setFilteredRestaurants(
              restaurantList?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
        <button
          className="cursor-pointer h-8 bg-gray-300 hover:text-[#ee3024] hover:bg-gray-200 p-2 flex items-center rounded-lg"
          onClick={() => {
            setFilteredRestaurants(
              restaurantList?.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      {restaurantList === null ? (
        <div className="shimmer-container flex flex-wrap justify-center mt-5">
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      ) : (
        <div className="restaurant-container flex flex-wrap justify-center mt-5">
          {filteredRestaurants?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.3 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
