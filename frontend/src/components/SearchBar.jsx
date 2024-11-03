import { assets } from "../assets/assets";
import { useShop } from "../contexts/ShopContext";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useShop();
  return (
    showSearch && (
      <div className="border-b border-t bg-gray-50 text-center">
        <div className="mx-3 my-5 inline-flex w-3/4 items-center justify-center rounded-full border border-gray-400 px-5 py-2 sm:w-1/2">
          <input
            type="text"
            className="flex-1 bg-inherit text-sm outline-none"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src={assets.search_icon} alt="Search" className="w-4" />
        </div>
        <img
          src={assets.cross_icon}
          alt="cross icon"
          className="inline w-3 cursor-pointer"
          onClick={() => setShowSearch(false)}
        />
      </div>
    )
  );
}

export default SearchBar;
