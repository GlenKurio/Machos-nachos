import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({ itemId }) {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(deleteItem(itemId))}>Delete</button>;
}

export default DeleteItem;
