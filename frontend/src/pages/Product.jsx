import { useParams } from "react-router-dom";
import { useShop } from "../contexts/ShopContext";
import { useEffect, useState } from "react";
import Empty from "../components/Empty";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { id } = useParams();
  const { products, currency, cartItems, addToCart } = useShop();
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [size, setSize] = useState(null);

  useEffect(() => {
    function fetchProduct() {
      const product = products.find((product) => product._id === id);
      setProductData(product);
    }

    fetchProduct();
  }, [id, products]);

  return productData ? (
    <div className="border-t-2 pt-10 opacity-100 transition-opacity duration-500 ease-in">
      {/* Product Data */}
      <div className="flex flex-col gap-12 sm:flex-row sm:gap-12">
        {/* Product Images */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex w-full justify-between overflow-auto overflow-x-auto sm:w-[18.7%] sm:flex-col sm:justify-normal sm:overflow-y-scroll">
            {productData.image.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={productData.name}
                className="w-[24%] flex-shrink-0 cursor-pointer sm:mb-3 sm:w-full"
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={productData.image[selectedImage]}
              className="h-auto w-full"
              alt="selected image"
            />
          </div>
        </div>
        {/* Product information */}
        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-medium">{productData.name}</h1>
          <div className="mt-2 flex items-center gap-1">
            <img src={assets.star_icon} alt="rating icon" className="5 w-3" />
            <img src={assets.star_icon} alt="rating icon" className="5 w-3" />
            <img src={assets.star_icon} alt="rating icon" className="5 w-3" />
            <img src={assets.star_icon} alt="rating icon" className="5 w-3" />
            <img
              src={assets.star_dull_icon}
              alt="rating icon"
              className="5 w-3"
            />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="md:4/5 mt-5 text-gray-500">{productData.description}</p>
          <div className="my-8 flex flex-col gap-4">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, i) => (
                <button
                  onClick={() => setSize(item)}
                  key={i}
                  className={`border bg-gray-100 px-4 py-2 ${item === size ? "border-black" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black px-8 py-3 text-sm text-white active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="mt-5 flex flex-col gap-1 text-sm text-gray-500">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        subCategory={productData.subCategory}
        category={productData.category}
        productId={productData._id}
      />
    </div>
  ) : (
    <Empty resource="Product" />
  );
}

export default Product;
