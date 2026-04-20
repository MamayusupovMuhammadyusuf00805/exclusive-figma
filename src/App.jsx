import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sign from "./pages/sign/Sign";
import Login from "./pages/login/login";
import { getCategory, getProduct } from "./services";
import { createContext, useEffect, useState } from "react";
import Account from "./pages/account/Account";
import ProductDetail from "./pages/productdetail/ProductDeatail";
import Washlist from "./pages/washlist/Washlist";
import Chekout from "./pages/chekout/Chekout";
import Cart from "./pages/cart/Cart";

export const DataContext = createContext();

function App() {
  const [categoryData, setCategoryData] = useState();
  const [productData, setProductData ] = useState()
  useEffect(() => {
    getCategory()?.then((item) => {
      setCategoryData(item);
    });
    getProduct()?.then((info)=>{
        setProductData(info)
    })
  }, []);
  return (
    <>
      <BrowserRouter>
        <DataContext value={{ categoryData, productData}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/washlist" element={<Washlist />} />
            <Route path="/chekout" element={<Chekout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </DataContext>
      </BrowserRouter>
    </>
  );
}

export default App;
