import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    props.resData?.info;
  const { deliveryTime } = props.resData.info.sla;

  return (
    <div className="restaurant-card z-10 w-[350px] h-[420px] border-[1px] border-transparent  hover:border-[#dfdddd] rounded-t-xl rounded-b-lg p-[10px] my-7 mx-4 hover:shadow-zinc-300 hover:shadow-xl">
      <div className="restaurant-card-effect transition-transform scale-100 hover:scale-95 ease-in hover:ease-out duration-200 ">
        <div className="restaurant-image-container">
          <img
            className="restaurant-image w-full h-[250px] rounded-t-lg rounded-b-md"
            src={CDN_LINK + cloudinaryImageId}
            alt=""
          />
        </div>
        <div className="restaurant-details">
          <h2 className="mt-3 mb-1 text-xl font-semibold">
            {name}
          </h2>
          <h4 className="line-clamp-2">{cuisines.join(", ")}</h4>
          <div className="flex mt-3">
            <h4>{avgRating ? avgRating + " stars" : "NEW"}</h4>
            <p className="px-3" >•</p>
            <h4>{deliveryTime} mins</h4>
            <p className="px-3">•</p>
            <h4>{costForTwo}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) =>{
  return (props)=>{
    return (
      <div>
        <label className="bg-zinc-600 text-white text-sm p-2 rounded-[5px] absolute z-20 ml-7 mt-3 opacity-90">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  }
}

export default RestaurantCard;
