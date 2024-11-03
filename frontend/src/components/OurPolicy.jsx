import { assets } from "../assets/assets";

function OurPolicy() {
  return (
    <div className="flex flex-col justify-around gap-12 py-20 text-center text-xs text-gray-700 sm:flex-row sm:gap-20 sm:text-sm md:text-base">
      <div>
        <img
          src={assets.exchange_icon}
          className="m-auto mb-5 w-12"
          alt="exchange icon"
        ></img>
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exhange policy</p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          className="m-auto mb-5 w-12"
          alt="exchange icon"
        ></img>
        <p className="font-semibold">7 days Return Policy</p>
        <p className="text-gray-400">We provide 7 days return policy </p>
      </div>
      <div>
        <img
          src={assets.support_img}
          className="m-auto mb-5 w-12"
          alt="exchange icon"
        ></img>
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
}

export default OurPolicy;
