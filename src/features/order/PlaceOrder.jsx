import {
  Form,
  redirect,
  useActionData,
  useNavigation,
  Link,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import store from "../../store";
import EmptyCart from "../cart/EmptyCart";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const isValidEmail = (str) => /^\S+@\S+\.\S+$/.test(str);

function PlaceOrder() {
  const formErrors = useActionData();

  const delPrice = 12;
  const cart = useSelector(getCart);
  const itemsPrice = useSelector(getTotalCartPrice);
  const totalPrice = itemsPrice + delPrice;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Fill up the form to place the order !
      </h2>

      <Form method="POST" className="w-full">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center md:w-2/3">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="name" required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center md:relative md:w-2/3">
          <label className="sm:basis-40">Email address</label>
          <div className="grow">
            <input
              className="input  w-full"
              type="email"
              name="email"
              required
            />
          </div>
          {formErrors?.email && (
            <p className="mt-2 rounded-md bg-rose-300 p-2 text-xs text-rose-900 md:absolute md:-right-[250px]">
              {formErrors.email}
            </p>
          )}
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center md:relative md:w-2/3">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && (
            <p className="mt-2 rounded-md bg-rose-300 p-2 text-xs text-rose-900 md:absolute md:-right-[250px]">
              {formErrors.phone}
            </p>
          )}
        </div>

        <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center md:w-2/3">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
          <span className="absolute right-[3px] z-50"></span>
        </div>

        <div>
          <input type="hidden" name="items" value={JSON.stringify(cart)} />
          <input type="hidden" name="itemsPrice" value={Number(itemsPrice)} />
          <input type="hidden" name="delPrice" value={Number(delPrice)} />
          <input type="hidden" name="totalPrice" value={Number(totalPrice)} />
          <div className="flex gap-2">
            <button
              className="rounded-lg bg-yellow p-4 text-lg font-bold transition-all duration-300 hover:bg-green hover:text-white"
              disabled={isSubmitting}
              type="primary"
            >
              {isSubmitting ? "Placing order..." : "Order now"}
            </button>
            <Link
              to="/cart"
              relative="path"
              className="rounded-lg bg-slate-100 p-4 text-lg font-bold transition-all duration-300 hover:bg-slate-300 "
            >
              Back to cart
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    items: JSON.parse(data.items),
  };
  console.log(order);
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Plese give the correct number";
  if (!isValidEmail(order.email))
    errors.email = "Please give the correct email";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  console.log("Newly created order:", newOrder);

  store.dispatch(clearCart());
  console.log("Redirecting to order ID:", newOrder[0].id);
  return redirect(`/order/${newOrder[0].id}`);
}

export default PlaceOrder;
