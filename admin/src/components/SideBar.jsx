import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function SideBar() {
  return (
    <div className="min-h-screen w-[18%] border-r-2">
      <div className="flex flex-col gap-4 pt-6 text-[15px]">
        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 rounded-l border border-r-0 border-gray-300 px-3 py-2 pl-20"
        >
          <img className="h-5 w-5" src={assets.dashboard_icon} alt="add icon" />
          <p className="hidden md:block">Dashboard</p>
        </NavLink>
        <NavLink
          to="/add"
          className="flex items-center gap-3 rounded-l border border-r-0 border-gray-300 px-3 py-2 pl-20"
        >
          <img className="h-5 w-5" src={assets.add_icon} alt="add icon" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to="/products"
          className="flex items-center gap-3 rounded-l border border-r-0 border-gray-300 px-3 py-2 pl-20"
        >
          <img className="h-5 w-5" src={assets.order_icon} alt="add icon" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="flex items-center gap-3 rounded-l border border-r-0 border-gray-300 px-3 py-2 pl-20"
        >
          <img className="h-5 w-5" src={assets.order_icon} alt="add icon" />
          <p className="hidden md:block">Orders List</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
