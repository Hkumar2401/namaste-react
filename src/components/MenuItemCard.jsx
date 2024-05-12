import { CDN_LINK } from "../utils/constants";

const MenuItemCard = (props) => {
  const { name, price, defaultPrice, description, imageId } =
    props?.item?.card?.info;

  return (
    <div className="menu-item-card flex justify-between items-center border-b-[1px] border-solid border-zinc-300 w-full h-[200px] p-2 cursor-pointer">
      <div className="menu-item-details w-4/5 flex flex-col">
        <h2 className="font-semibold text-xl">{name}</h2>
        <h4 className="mt-1 font-semibold">
          {"₹" + (price / 100 || defaultPrice / 100)}
        </h4>
        <p className="menu-item-card-description mt-3 w-5/6 overflow-hidden text-ellipsis line-clamp-2 text-[15px]">{description} </p>
      </div>

      <div className="menu-item-img-container">
        <img className="menu-item-img w-[150px] h-[130px] rounded-xl" src={CDN_LINK + imageId} alt="" />
      </div>
    </div>
  );
};

export default MenuItemCard;
