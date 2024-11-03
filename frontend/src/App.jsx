import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShopProvider } from "./contexts/ShopContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrder";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <ShopProvider>
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <ToastContainer />
          <NavBar />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order" element={<Order />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <Footer />
        </div>
      </ShopProvider>
    </BrowserRouter>
  );
}

export default App;
