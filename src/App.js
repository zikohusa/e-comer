import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Navigation from './routes/navigation/navigation.component.jsx'
import SignInUp from './pages/sign-in-up/sign-in-up';


function App() {
  return (
    <div>
      <Routes >
        <Route path='/' element={<Navigation />}>
          <Route index element={<HomePage />}/>
          <Route path="shop" element={<ShopPage />} />
          <Route path="signin" element={<SignInUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
