import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/component/Navigation/Navigation";
import HomePage from "./customer/pages/Homepage/HomePage";
import Footer from "./customer/component/Footer/footer";
import Product from "./customer/component/Product/Product";
import ProductDetail from "./customer/component/ProductDetails/ProductDetail";
import Cart from "./customer/component/Cart/Cart";
import Checkout from "./customer/component/Checkout/Checkout";
import Order from "./customer/component/Order/Order";
import OrderDetails from "./customer/component/Order/OrderDetail";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./customer/Routers/customerRouters";
import PaymentForm from "./customer/component/payment";
import Payment from "./customer/component/payment";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
      </Routes>
      {/* <Payment/> */}
    </div>
  );
}

export default App;
