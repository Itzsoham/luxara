import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

const ShopConext = createContext();

function ShopProvider({ children }) {
  const currency = "₹";
  const deliveryFee = 50;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(productID, size) {
    if (!size) {
      toast.error("Please select the size first");
      return;
    }

    let cartData = [...cartItems];

    // Find if item with the same productID and size already exists
    const itemIndex = cartData.findIndex(
      (item) => item.productID === productID && item.size === size,
    );

    if (itemIndex !== -1) {
      // Item exists, increase the quantity
      cartData[itemIndex].quantity += 1;
    } else {
      // Item does not exist, add new entry
      cartData.push({ productID, size, quantity: 1 });
    }

    // this is nested approach but kinda complex
    // let cartData = structuredClone(cartItems);

    // if (cartData[productID]) {
    //   if (cartData[productID][size]) {
    //     cartData[productID][size] += 1;
    //   } else {
    //     cartData[productID][size] = 1;
    //   }
    // } else {
    //   cartData[productID] = {};
    //   cartData[productID][size] = 1;
    // }

    setCartItems(cartData);
  }

  function getCartCount() {
    // also getCartCount based on nested approach
    // let count = 0;
    // for (let product in cartItems) {
    //   for (let size in cartItems[product]) {
    //     try {
    //       if (cartItems[product][size] > 0) {
    //         count += cartItems[product][size];
    //       }
    //     } catch (error) {
    //       ("Error in getCartCount: ", error);
    //     }
    //   }
    // }
    // return count;

    let count = 0;

    if (cartItems.length === 0) {
      return count;
    }

    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  const updateCartQuantity = (productID, size, quantity) => {
    let cartData = [...cartItems];
    const itemIndex = cartData.findIndex(
      (item) => item.productID === productID && item.size === size,
    );

    if (itemIndex !== -1) {
      if (quantity === 0) {
        // Remove the item from the cart if quantity is zero
        cartData = cartData.filter(
          (item) => !(item.productID === productID && item.size === size),
        );
      } else {
        // Update the quantity of the item
        cartData[itemIndex].quantity = quantity;
      }
    }

    setCartItems(cartData);
  };

  function getCartTotal() {
    let total = 0;

    if (cartItems.length === 0) {
      return total;
    }

    total = cartItems.reduce((total, item) => {
      const productData = products.find(
        (product) => product._id === item.productID,
      );
      total = total + productData.price * item.quantity;

      return total;
    }, 0);

    return total;
  }

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateCartQuantity,
    getCartTotal,
  };

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
