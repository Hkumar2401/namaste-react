import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";


const MenuItemCard = ({item, cartFunctioning, index}) => {
  const { name, price, defaultPrice, description, imageId, itemAttribute } =
    item?.card?.info;

    const dispatch = useDispatch();
    
    const handleClick = (e) =>{
      e.target.innerText === "Add +" ? 
      dispatch(addItem(item)) : dispatch(removeItem(index))
    }

  return (
    <div className="menu-item-card flex justify-between items-center border-b-[1px] border-solid border-zinc-300 w-full h-[250px] p-2 cursor-pointer">
      <div className="menu-item-details w-4/5 flex flex-col">
        <div
          className={`text-[10px] w-fit border-solid rounded-[4px] ${
            itemAttribute?.vegClassifier === "VEG"
              ? "border-green-600"
              : "border-red-600"
          } border-[2px] p-[2px] mb-4`}
        >
          {itemAttribute?.vegClassifier === "VEG" ? "🟢" : "🔺"}
        </div>
        <h2 className="font-semibold text-xl">{name}</h2>
        <h4 className="mt-1 font-semibold">
          {"₹" + (price / 100 || defaultPrice / 100)}
        </h4>
        <p className="menu-item-card-description mt-3 w-5/6 overflow-hidden text-ellipsis line-clamp-2 text-[15px]">
          {description}{" "}
        </p>
      </div>

      <div className="menu-item-img-container flex flex-col items-center">
        <div>
          <img
            className="menu-item-img w-[150px] h-[130px] rounded-xl"
            src={CDN_LINK + imageId}
            alt=""
          />
        </div>
        <div className="absolute mt-[90px]">
          <button
            onClick={handleClick}
            className={`bg-white ${cartFunctioning === "add" ? "text-green-600" : "text-red-600" } font-bold border-[1px] border-zinc-400 shadow-xl hover:bg-zinc-200 rounded-lg p-2 w-[100px]`}
          >
            {cartFunctioning === "add" ? "Add +" : "Remove -"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
