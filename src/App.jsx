import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackPage } from './pages/TrackPage';


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path='orders' element={<OrdersPage />} />
      <Route path='track' element={<TrackPage />} />
    </Routes>
  );
}

export default App;
