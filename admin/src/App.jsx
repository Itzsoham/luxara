import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import DashBoard from "./pages/DashBoard";
import SideBar from "./components/SideBar";
import AddProduct from "./pages/AddProduct";
import OrderList from "./pages/OrderList";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";

function App() {
  const [token, setToken] = useState("134");

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <ToastContainer />
        {token === "" ? (
          <Login />
        ) : (
          <>
            <NavBar />
            <SearchBar />
            <hr />
            <div className="flex w-full">
              <SideBar />
              <div className="mx-auto my-8 ml-[max(5vw,25px)] w-[70%] text-base text-gray-600">
                <Routes>
                  <Route path="/" element={<DashBoard />} />
                  <Route path="/add" element={<AddProduct />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/orders" element={<OrderList />} />
                </Routes>
              </div>
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
