import { NavLink, Link, useNavigate } from "react-router-dom";
// import { TbShoppingCart } from "react-icons/tb";

import { useState } from "react";
import {
  ShoppingCartIcon,
  XMarkIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import CartOverview from "../features/cart/CartOverview";

const Header = () => {
  const navigate = useNavigate();
  const Links = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "menu" },
    // { name: "Contact", link: "contact" },
    { name: "Cart", link: "cart", icon: true },
  ];
  const [open, setOpen] = useState(false);

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <header className="fixed top-0 z-10 mx-auto my-0 w-full max-w-[1861px] shadow-md">
      <div className="items-center justify-between bg-yellow px-7 py-4 md:flex md:items-center md:px-10">
        {/* logo section */}

        <img
          onClick={handleLogoClick}
          src="/logos/logo-bg.png"
          className="w-24 rounded-full hover:cursor-pointer"
        />

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 h-7 w-7 cursor-pointer  md:hidden"
        >
          {open ? (
            <XMarkIcon className="text-white hover:text-green" />
          ) : (
            <Bars3BottomRightIcon className="text-white hover:text-green" />
          )}
        </div>
        {/* linke items */}
        <ul
          className={`absolute left-0 z-[-1] w-full   bg-yellow pb-12 pl-9 text-center transition-all duration-200 ease-in md:static md:z-auto md:flex  md:w-auto md:items-center md:gap-4 md:pb-0 md:pl-0 ${
            open ? "top-12 flex-col" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-7 font-semibold md:my-0 md:ml-8">
              {link.icon ? (
                <NavLink
                  to={link.link}
                  onClick={() => setOpen(false)}
                  className={`duration-400 py-2 text-2xl font-bold tracking-wider text-white hover:text-green md:hidden`}
                >
                  <span>Cart</span>
                </NavLink>
              ) : (
                <NavLink
                  onClick={() => setOpen(false)}
                  to={link.link}
                  className="duration-400  p-2 text-2xl font-bold tracking-wider text-white hover:text-green"
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        {/* Cart button */}
        <CartOverview className="" />
      </div>
    </header>
  );
};

export default Header;

// function Header() {
//   return (
//     <header className="fixed z-10 flex min-w-full  items-center bg-yellow px-3 py-3 ">
//       <Uploader />
//       <NavLink to="/" className="">
//         <img src="/logos/logo-bg.png" className="w-24 rounded-full " />
//       </NavLink>
//       <nav className="mx-auto my-0">
//         <ul className="flex justify-around gap-12 text-lg font-bold tracking-wider">
//           <NavLink
//             className="transition-all duration-300 hover:text-green current:text-green"
//             to="/"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             className="transition-all duration-300 hover:text-white current:text-white"
//             to="menu"
//           >
//             Menu
//           </NavLink>
//           <NavLink
//             className="transition-all duration-300 hover:text-red current:text-red"
//             to="contact"
//           >
//             Contact
//           </NavLink>
//         </ul>
//       </nav>
//       <NavLink>
//         <TbShoppingCart className=" text-2xl transition-all duration-300  hover:text-white" />
//       </NavLink>
//     </header>
//   );
// }

// export default Header;
