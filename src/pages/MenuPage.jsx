import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import Menu from "../features/menu/Menu";
import { getMenu } from "../services/apiRestaurant";
import FilterNav from "../ui/FilterNav";
import { useSelector } from "react-redux";
import {
  getTotalCartItems,
  getTotalCartPrice,
} from "../features/cart/cartSlice";

export async function loader() {
  const menu = await getMenu();

  return menu;
}

function MenuPage() {
  const menu = useLoaderData();
  const [searchParams] = useSearchParams();
  const params = searchParams;
  const totalCartItems = useSelector(getTotalCartItems);
  const totalCartPrice = useSelector(getTotalCartPrice);

  const categoryFilter = params.get("category");
  const displayedItems = categoryFilter
    ? menu.filter((item) => item.category.toLowerCase() === categoryFilter)
    : menu;

  return (
    <div>
      <div className="min-h-screen bg-home-8 bg-cover bg-fixed bg-center bg-no-repeat p-24">
        <div className="flex flex-col items-start justify-center gap-8">
          <h1 className="rounded-full bg-green p-6 text-center text-2xl font-bold text-white opacity-90 md:p-8 md:text-6xl">
            Taco Deal
          </h1>
          <p className="rounded-full bg-white p-6 text-center text-2xl font-bold capitalize opacity-90 md:p-8 md:text-6xl">
            set of 5 only:
          </p>
          <span className=" rounded-full bg-red p-4 text-center text-4xl font-black text-yellow opacity-90 md:text-6xl ">
            $6.99
          </span>
        </div>
      </div>
      <nav>
        <FilterNav params={params} categoryFilter={categoryFilter} />
      </nav>

      <div>
        <Menu displayedItems={displayedItems} />
      </div>

      <div
        className={`flex w-full items-center justify-between bg-yellow px-10 py-5 md:hidden
        ${totalCartItems ? "fixed bottom-0 right-0" : ""}
        `}
      >
        <span>Items: {totalCartItems}</span>
        <span>Total cart price: ${totalCartPrice}</span>
        <Link className="text-lg font-bold hover:text-green" to="/cart">
          Go To Cart &rarr;
        </Link>
      </div>
    </div>
  );
}

export default MenuPage;
