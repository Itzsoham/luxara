import { assets } from "../assets/assets";
import Button from "./Button";

function NavBar() {
  return (
    <div>
      <div className="flex items-center justify-between px-[4%] py-2">
        <img
          className="w-[max(10%,80px)]"
          src={assets.logo}
          alt="Company Logo"
        />
        <Button type="secondary">Logout</Button>
      </div>
    </div>
  );
}

export default NavBar;
