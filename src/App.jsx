import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomThemeProvider from './components/CustomThemeProvider';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import SignInPage from './pages/SignInPage';
import ShoppingCartProvider from './context/ShoppingCartContext';
import UserProvider from './context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <UserProvider>
          <ShoppingCartProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </ShoppingCartProvider>
        </UserProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;
