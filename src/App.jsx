import React, { useState } from 'react';
import ShoppingCartProvider from './context/ShoppingCartContext';
import CustomThemeProvider from './components/CustomThemeProvider';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';

function App() {
  const [page, setPage] = useState('homePage');

  return (
    <CustomThemeProvider>
      <ShoppingCartProvider>
        <button type="button" onClick={() => setPage('homePage')}>Home Page</button>
        <button type="button" onClick={() => setPage('cartPage')}>Cart Page</button>
        {
          page === 'homePage' ? <HomePage /> : (
            <CartPage />
          )
        }
      </ShoppingCartProvider>
    </CustomThemeProvider>
  );
}

export default App;
