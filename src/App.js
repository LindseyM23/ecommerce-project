import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import Payment from './pages/Payment';
import Itemview from './pages/ItemView';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          
          <Route path="/" element={<Dashboard />} />

          
          <Route path="/product/:id" element={<ProductList />} />

        
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Item" element={<Itemview />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;