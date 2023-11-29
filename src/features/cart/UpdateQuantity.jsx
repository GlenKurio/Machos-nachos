import { increaseQuantity, decreaseQuantity } from "./cartSlice";
import { useDispatch } from "react-redux";

function UpdateQuantity({ itemId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <button
        className="rounded-full bg-yellow p-2 hover:bg-green"
        onClick={() => dispatch(decreaseQuantity(itemId))}
      >
        -
      </button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <button
        className="rounded-full bg-yellow p-2 hover:bg-green"
        onClick={() => dispatch(increaseQuantity(itemId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateQuantity;
