import CategoryPill from "../../ui/CategoryPill";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateQuantity from "../cart/UpdateQuantity";
import DeleteItem from "../cart/DeleteItem";

function MenuItem({ item }) {
  const dispatch = useDispatch();
  const { id, name, ingredients, category, price, image } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      itemId: id,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex-col overflow-hidden  rounded-md border-2 border-solid border-yellow shadow-lg transition-all duration-300 hover:shadow-xl md:flex md:flex-row md:justify-between md:gap-2">
      <img
        className="aspect-square object-cover md:w-1/5"
        src={image}
        alt={`image of ${name}`}
      />
      <div className="flex w-full  flex-col justify-center gap-4 p-6">
        <div className="flex w-full items-center justify-between border-b-green p-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <CategoryPill category={category} />
        </div>
        <p className="p-2">{ingredients}</p>
        <div className="flex w-full items-center justify-between gap-3 ">
          <span className="p-2">${price}</span>
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateQuantity itemId={id} currentQuantity={currentQuantity} />
              <DeleteItem itemId={id} />
            </div>
          )}
          {!isInCart && (
            <button
              onClick={handleAddToCart}
              className="rounded-full bg-yellow p-2 hover:bg-green hover:text-white"
            >
              <ShoppingCartIcon className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
