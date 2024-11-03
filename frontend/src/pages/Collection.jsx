import { useEffect, useState } from "react";
import { useShop } from "../contexts/ShopContext";
import { assets } from "../assets/assets";
import Heading from "../components/Heading";
import ProductItem from "../components/ProductItem";

function Collection() {
  const { products, search, showSearch } = useShop();
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  function toggleCategory(e) {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  }

  function toggleSubCategory(e) {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  }

  function sortProducts(e) {
    const value = e.target.value;
    let sortedProducts = filteredProducts.slice();

    if (value === "ace") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "dec") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = products;
    }

    setFilteredProducts(sortedProducts);
  }

  useEffect(() => {
    function filterProducts() {
      let filtered = products.slice();

      if (showSearch && search.length > 0) {
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase()),
        );
      }

      if (category.length > 0) {
        filtered = filtered.filter((product) =>
          category.includes(product.category),
        );
      }

      if (subCategory.length > 0) {
        filtered = filtered.filter((product) =>
          subCategory.includes(product.subCategory),
        );
      }

      setFilteredProducts(filtered);
    }

    filterProducts();
  }, [category, subCategory, products, search, showSearch]);

  return (
    <div className="flex flex-col gap-1 border-t pt-10 sm:flex-row sm:gap-10">
      {/* Filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilters(!showFilters)}
          className="my-2 flex cursor-pointer items-center gap-2 text-xl"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt="dropdown icon"
            className={`h-3 sm:hidden ${showFilters ? "rotate-90 transform" : ""}`}
          />
        </p>
        {/* Category Filters  */}
        <div
          className={`mt-6 border border-gray-300 py-3 pl-5 ${showFilters ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* Subcategory Filters  */}
        <div
          className={`my-5 border border-gray-300 py-3 pl-5 ${showFilters ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="mb-4 flex justify-between text-base sm:text-2xl">
          <Heading text1={`ALL`} text2={`COLLECTION`} />
          {/* Prudcution Sort */}
          <select
            className="border-2 border-gray-300 px-2 text-sm"
            onChange={sortProducts}
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="ace">Sort by: Low to High</option>
            <option value="dec">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
