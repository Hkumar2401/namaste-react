import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import resList from "../utils/mockdata";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();
    // console.log(json);
    setIsLoading(false);
    setRestaurantList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <p
          className="search-button"
          onClick={() => {
            setFilteredRestaurants(
              restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </p>
        <button
          style={{ margin: "0 10px", cursor: "pointer" }}
          onClick={() => {
            setFilteredRestaurants(
              restaurantList.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      {isLoading ? (
        <div className="shimmer-container">
          {resList.map((res, i) => (
            <Shimmer key={i} />
          ))}
        </div>
      ) : (
        <div className="restaurant-container">
          {filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
