import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../component/Cart/Cart";
import Product from "../component/Product/Product";
import Navigation from "../component/Navigation/Navigation";
import Footer from "../component/Footer/footer";
import HomePage from "../pages/Homepage/HomePage";
import ProductDetail from "../component/ProductDetails/ProductDetail";
import Checkout from "../component/Checkout/Checkout";
import Order from "../component/Order/Order";
import OrderDetails from "../component/Order/OrderDetail";
import Payment from "../component/payment";
import Ordercard from "../component/Order/OrderCard";
const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThre' element={<Product />}></Route>
        <Route path='/Product/:productId' element={<ProductDetail />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/acount/order' element={<Order />}></Route>
        <Route path='/acount/order/:orderId' element={<OrderDetails />}></Route>
        <Route path='/payment/paymentform' element={<Payment />}></Route>
        <Route path='/orderCard' element={<Ordercard />}></Route>
        
      </Routes>
      <div>
      <Footer/>
      </div>
    </div>
  );
};
export default CustomerRouters;
