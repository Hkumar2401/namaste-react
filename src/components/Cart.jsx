import { useDispatch, useSelector } from "react-redux";
import MenuItemCard from "./MenuItemCard";
import { clearCart} from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () =>{
    dispatch(clearCart());
  }
  
  return (
    <div className="flex flex-col items-center mt-5">
      <div className="flex justify-center">
        <h1 className="text-[40px] font-bold">Cart</h1>
        <button 
        onClick={handleClearCart}
        className="text-lg bg-zinc-600 hover:bg-zinc-800 text-white rounded-lg p-2 ml-10">Clear Cart</button>
      </div>

      <div className="mt-1 w-[50%] overflow-hidden flex flex-col justify-center items-center">
        {cartItems.map((item, index) => {
          return (
            <MenuItemCard
              key={index}
              item={item}
              index={index}
              cartFunctioning={"remove"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
