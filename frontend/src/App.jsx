import React, { useState, useEffect } from "react";
import Navbar from "./componentes/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./componentes/Footer/Footer";
import LoginPopup from "./componentes/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import FoodDisplay from "./componentes/FoodDisplay/FoodDisplay";
import ExploreMenu from "./componentes/Navbar/ExploreMenu/ExploreMenu";
import OrderTrackingPage from "./pages/MyOrders/Track";

const App = () => {
  const [showlogin, setShowLogin] = useState(false);
  const [category, setCategory] = useState("All");

  return (
    <>
      {showlogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/exploremenu" element={<ExploreMenu category={category} setCategory={setCategory} />} />
          <Route path="/foodmenu" element={<FoodDisplay category={category} />} />
          <Route path="/login" element={<LoginPopup />} />
          <Route path="/track" element={<OrderTrackingPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;


// For Cusore gsap
// const App = () => {
//   const [showlogin, setShowLogin] = useState(false);
//   const [category, setCategory] = useState("All");

//   useEffect(() => {
//     console.log("Custom cursor effect is running");

//     const cursor = document.createElement("div");
//     cursor.id = "cursor";
//     document.body.appendChild(cursor);
//     console.log("Cursor element created:", cursor); 

//     const updateCursor = (e) => {
//       gsap.to(cursor, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.2,
//         ease: "power1.out",
//       });
//     };

//     window.addEventListener("mousemove", updateCursor);

//     return () => {
//       window.removeEventListener("mousemove", updateCursor);
//       document.body.removeChild(cursor);
//     };
//   }, []);