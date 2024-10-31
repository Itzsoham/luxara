import PropsType from "prop-types";

import { useShop } from "../contexts/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const { currency } = useShop();
  const { name, _id: id, price, image } = product;

  return (
    <Link to={`/product/${id}`} className="cursor-pointer text-gray-700">
      <div className="overflow-hidden">
        <img
          className="transition ease-in-out hover:scale-110"
          src={image[0]}
          alt="product image"
        ></img>
      </div>
      <p className="pb-1 pt-3 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
}

export default ProductItem;

ProductItem.propTypes = {
  product: PropsType.object.isRequired,
};
