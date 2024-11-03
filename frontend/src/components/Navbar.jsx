import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import { useShop } from "../contexts/ShopContext";

function NavBar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useShop();
  const location = useLocation();
  const navigate = useNavigate();

  function handleSearch() {
    if (location.pathname.includes("/collection")) {
      setShowSearch((search) => !search);
    } else {
      navigate("/collection");
      setShowSearch(true);
    }
  }

  // Track location changes to setShowSearch to false if not on '/collection'
  useEffect(() => {
    if (!location.pathname.includes("/collection")) {
      setShowSearch(false);
    }
  }, [location.pathname, setShowSearch]);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="luxara-logo" className="h-[4rem] w-36" />
      </Link>

      <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
          onClick={handleSearch}
        />

        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              alt="search"
              className="w-5 cursor-pointer"
            />
          </Link>
          <div className="dropdown-menu absolute right-0 hidden pt-4 group-hover:block">
            <div className="flex w-36 flex-col gap-2 rounded bg-slate-100 px-5 py-3 text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart"></img>
          <p className="absolute bottom-[-5px] right-[-5px] aspect-square w-4 rounded-full bg-black text-center text-[8px] leading-4 text-white">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar for small screens */}

      <div
        className={`absolute bottom-0 right-0 top-0 overflow-auto bg-white transition-all ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex cursor-pointer items-center gap-4 p-3"
          >
            <img
              src={assets.dropdown_icon}
              alt="dropdown"
              className="h-4 rotate-180"
            ></img>
            <p>BACK</p>
          </div>
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="border py-2 pl-6"
          >
            HOME
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className="border py-2 pl-6"
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="border py-2 pl-6"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="border py-2 pl-6"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
