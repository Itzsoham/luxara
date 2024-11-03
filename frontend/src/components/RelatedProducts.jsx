import { useShop } from "../contexts/ShopContext";
import PropTypes from "prop-types";
import Heading from "./Heading";
import ProductItem from "./ProductItem";

function RelatedProducts({ category, subCategory, productId }) {
  const { products } = useShop();
  const relatedProducts = products
    .filter(
      (product) =>
        product.category === category &&
        product.subCategory === subCategory &&
        product._id !== productId,
    )
    .slice(0, 5);

  return (
    <div className="my-24">
      <div className="py-2 text-center text-3xl">
        <Heading text1="RELATED" text2="PRODUCTS" />
      </div>

      <div>
        <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {relatedProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;

RelatedProducts.propTypes = {
  category: PropTypes.string,
  subCategory: PropTypes.string,
  productId: PropTypes.string,
};
