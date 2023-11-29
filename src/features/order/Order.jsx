import { useLoaderData } from "react-router-dom";
// import { getOrder } from "../../services/apiRestaurant";

// export async function loader({ params }) {
//   const order = await getOrder(params.id);
//   console.log("Getting order for order items:", order);
//   return order;
// }

function Order() {
  const order = useLoaderData();
  console.log(order);
  const { id, totalPrice, items, delPrice } = order;

  return (
    <div className="space-y-8 px-4 py-6">
      {order.map((outerObject) => (
        <div key={outerObject.id}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">Order #{outerObject.id} </h2>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
            <p className="font-medium">Only 30 minutes left 😃</p>
            <p className="text-xs text-stone-500">Estimated delivery: 30mins</p>
          </div>

          <ul className="divide-y divide-stone-200 border-b border-t">
            {outerObject.items.map((innerObject) => (
              <li className="py-3" key={innerObject.name}>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <p>
                    <span>{innerObject.name} &times;</span>{" "}
                    {innerObject.quantity}
                  </p>
                  <p className="font-bold">${innerObject.totalPrice}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="space-y-2 bg-stone-200 px-6 py-5">
            <p className="text-sm font-medium text-stone-600">
              Price items: ${outerObject.totalPrice}
            </p>
            <p className="text-sm font-medium text-stone-600">
              Delivery fee: ${outerObject.delPrice}
            </p>

            <p className="font-bold">
              To pay on delivery: $
              {outerObject.totalPrice + outerObject.delPrice}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
