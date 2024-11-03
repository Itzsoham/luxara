import { useShop } from "../contexts/ShopContext";
import Heading from "../components/Heading";

function Order() {
  const { currency, products } = useShop();

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Heading text1="MY" text2="ORDERS" />
      </div>

      <div>
        {products.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 border-b border-t py-4 text-gray-700 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={item.image[0]}
                alt="product image"
                className="w-16 sm:w-20"
              />
              <div>
                <p className="font-medium sm:text-base">{item.name}</p>
                <div className="mt-2 flex items-center gap-3 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">19 June 2003</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <p className="h-2 min-w-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="rounded-sm border px-4 py-2 text-sm font-medium">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
