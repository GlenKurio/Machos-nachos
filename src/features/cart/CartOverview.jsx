import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getTotalCartItems, getTotalCartPrice } from "./cartSlice";
import { useNavigate } from "react-router-dom";

function CartOverview() {
  const navigate = useNavigate();
  const totalCartItems = useSelector(getTotalCartItems);

  return (
    <div className="relative hidden md:block">
      <button
        onClick={() => navigate("cart")}
        className=" rounded-full  bg-red p-2 text-white transition-all duration-300 hover:bg-green hover:text-white "
      >
        <ShoppingCartIcon className="h-6 w-6" />
      </button>
      <span className="absolute -right-4 top-7 rounded-full bg-white px-3 py-1 text-xs">
        {totalCartItems ? totalCartItems : "0"}
      </span>
    </div>
  );
}

export default CartOverview;
