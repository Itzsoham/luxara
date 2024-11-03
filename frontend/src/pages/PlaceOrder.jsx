import { useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();

  return (
    <div className="min-[80vh] flex flex-col justify-between gap-4 border-t pt-5 sm:flex-row sm:pt-14">
      {/* Left Side */}
      <div className="flex w-full flex-col gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Heading text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="City"
          />
          <input
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="State "
          />
        </div>
        <div className="flex gap-3">
          <input
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="number"
            placeholder="Zip Code"
          />
          <input
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="number"
          placeholder="Phone Number"
        />
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Heading text1={"PAYMENT"} text2={"METHOD"} />
          {/* Payment Method Selection */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setPaymentMethod("stripe")}
              className="flex cursor-pointer items-center gap-3 border p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border ${paymentMethod === "stripe" ? "bg-green-400" : ""}`}
              ></p>
              <img className="mx-4 h-5" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setPaymentMethod("razorpay")}
              className="flex cursor-pointer items-center gap-3 border p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border ${paymentMethod === "razorpay" ? "bg-green-400" : ""}`}
              ></p>
              <img className="mx-4 h-5" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setPaymentMethod("cod")}
              className="flex cursor-pointer items-center gap-3 border p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border ${paymentMethod === "cod" ? "bg-green-400" : ""}`}
              ></p>
              <p className="mx-4 text-sm font-medium text-gray-500">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="mt-8 w-full text-end">
            <button
              className="bg-black px-16 py-3 text-sm text-white"
              onClick={() => navigate("/order")}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
