import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from "./ui/Error";

// import Uploader from "./data/Uploader";
import Layout from "./ui/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import MenuPage, { loader as menuLoader } from "./pages/MenuPage";
import Cart from "./features/cart/Cart";
import PlaceOrder, {
  action as placeOrderAction,
} from "./features/order/PlaceOrder";
import Order from "./features/order/Order";
import { getOrder } from "./services/apiRestaurant";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} errorElement={<Error />} />
      <Route
        path="/menu"
        element={<MenuPage />}
        loader={menuLoader}
        errorElement={<Error />}
      />

      <Route path="/cart" element={<Cart />} errorElement={<Error />} />
      <Route
        path="/order/new"
        action={placeOrderAction}
        element={<PlaceOrder />}
        errorElement={<Error />}
      />
      <Route
        path="/order/:id"
        element={<Order />}
        loader={async ({ params }) => await getOrder(params.id)}
        errorElement={<Error />}
      />
      <Route path="*" element={<NotFound />} errorElement={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
