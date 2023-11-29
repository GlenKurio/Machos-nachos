import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-12 pt-[10rem] text-center">
      <p className="text-3xl font-bold capitalize ">
        Your cart is empty. Start Adding some stuff 😋
      </p>
      <Link
        className="rounded-lg bg-yellow p-4 text-lg font-bold transition-all duration-300 hover:bg-green hover:text-white"
        to="/menu"
      >
        &larr; Back to Menu
      </Link>
    </div>
  );
}

export default EmptyCart;
