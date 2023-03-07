import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Navigation from './routes/navigation/navigation.component.jsx'
import Authentication from './pages/authentication/authentication';


function App() {
  return (
    <div>
      <Routes >
        <Route path='/' element={<Navigation />}>
          <Route index element={<HomePage />}/>
          <Route path="shop" element={<ShopPage />} />
          <Route path="signin" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
