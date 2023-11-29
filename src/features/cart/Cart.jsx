import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalCartItems,
  getTotalCartPrice,
} from "./cartSlice";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const totalCartItems = useSelector(getTotalCartItems);
  const totalPrice = useSelector(getTotalCartPrice);

  function handleClear() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="flex flex-col gap-4 px-10 pb-[60px] pt-[30px]">
      <Link
        className="mb-[4rem] text-lg  font-bold hover:text-green hover:underline hover:decoration-green hover:decoration-solid hover:underline-offset-1"
        to="/menu"
      >
        &larr; Back to Menu
      </Link>
      <h2 className="text-xl font-bold">Here is Your Cart:</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.itemId} />
        ))}
      </ul>
      <div className="flex justify-between font-bold">
        <span>Total items: {totalCartItems}</span>
        <span>Total Price: ${totalPrice.toFixed(2)}</span>
      </div>

      <div className=" mt-6 flex flex-col items-center gap-6 space-x-2 md:flex-row">
        <Link
          className="rounded-lg bg-yellow p-4 text-lg font-bold transition-all duration-300 hover:bg-green hover:text-white"
          to="/order/new"
        >
          Go To Checkout
        </Link>

        <button
          className="rounded-lg bg-slate-100 p-4 text-lg font-bold transition-all duration-300 hover:bg-slate-300 "
          onClick={handleClear}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
