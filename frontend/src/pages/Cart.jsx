import { useShop } from "../contexts/ShopContext";
import { useNavigate } from "react-router-dom";

import Heading from "../components/Heading";
import Empty from "../components/Empty";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

function Cart() {
  const { products, currency, cartItems, updateCartQuantity } = useShop();
  const navigate = useNavigate();

  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Heading text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item, i) => {
            const productData = products.find(
              (product) => product._id === item.productID,
            );

            return (
              <div
                key={i}
                className="grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4 border-b border-t py-4 text-gray-700 sm:grid-cols-[4fr_2fr_0.5fr]"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]}
                    alt=""
                  />
                  <div>
                    <p className="text-xs font-medium sm:text-lg">
                      {productData.name}
                    </p>
                    <div className="mt-2 flex items-center gap-5">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="border bg-slate-50 px-2 sm:px-3 sm:py-1">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  className="max-w-10 border px-1 py-1 sm:max-w-20 sm:px-2"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    updateCartQuantity(
                      item.productID,
                      item.size,
                      parseInt(e.target.value),
                    )
                  }
                />
                <img
                  className="mr-4 w-4 cursor-pointer sm:w-5"
                  src={assets.bin_icon}
                  alt="delete icon"
                  onClick={() =>
                    updateCartQuantity(item.productID, item.size, 0)
                  }
                />
              </div>
            );
          })
        ) : (
          <Empty resource="Cart" />
        )}
      </div>
      <div className="my-20 flex justify-end">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              className="my-8 bg-black px-8 py-3 text-sm text-white"
              onClick={() => navigate("/place-order")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
