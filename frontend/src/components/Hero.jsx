import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className="flex flex-col border border-gray-400 sm:flex-row">
      {/* Hero left side */}
      <div className="flex w-full items-center justify-center py-10 sm:w-1/2 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="h-[2px] w-8 bg-[#414141] md:w-11"></p>
            <p className="text-sm font-medium md:text-base">BEST SELLERS</p>
          </div>
          <h1 className="text-3xl leading-relaxed sm:py-3 lg:text-5xl">
            LATEST ARRIVALS
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold md:text-base">SHOP NOW</p>
            <p className="h-[1px] w-8 bg-[#414141] md:w-11"></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <img src={assets.hero_img} alt="heroImage" className="w-full sm:w-1/2" />
    </div>
  );
}

export default Hero;
