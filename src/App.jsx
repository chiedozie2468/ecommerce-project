import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackPage } from "./pages/TrackPage";
import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
    <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />

      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="track" element={<TrackPage />} />
    </Routes>
  );
}

export default App;
