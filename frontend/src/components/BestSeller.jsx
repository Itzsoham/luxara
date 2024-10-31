import { useShop } from "../contexts/ShopContext";
import Heading from "./Heading";
import ProductItem from "./ProductItem";

function BestSeller() {
  const { products } = useShop();
  const bestProducts = products
    .filter((product) => product.bestseller)
    .slice(0, 5);

  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <Heading text1="BEST " text2="SELLERS" />
        <p className="m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {bestProducts.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
