import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/assets";

const ShopConext = createContext();

function ShopProvider({ children }) {
  const currency = "₹";
  const deliveryFee = 50;

  const value = { products, currency, deliveryFee };

  return <ShopConext.Provider value={value}>{children}</ShopConext.Provider>;
}

function useShop() {
  const context = useContext(ShopConext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }

  return context;
}

export { ShopProvider, useShop };

ShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
