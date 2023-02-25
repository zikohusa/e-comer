import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Link, Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Routes >
        <Route exact element={<HomePage />} path="/" />
        <Route element={<ShopPage />} path="/shop" />
      </Routes>
    </div>
  );
}

export default App;
