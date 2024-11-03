import { useShop } from "../contexts/ShopContext";
import Heading from "./Heading";

function CartTotal() {
  const { deliveryFee, getCartTotal, currency } = useShop();

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Heading text1="CART" text2="TOTAL" />
      </div>

      <div className="mt-2 flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartTotal()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {deliveryFee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <p>
            {currency}
            {getCartTotal() === 0 ? 0 : getCartTotal() + deliveryFee}
            .00
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
