import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Order from './pages/Order';
import CheckOut from './pages/CheckOut';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/checkout" element={<CheckOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
