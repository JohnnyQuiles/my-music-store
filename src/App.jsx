import React, { useState } from 'react';
import CustomThemeProvider from './components/CustomThemeProvider';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import ShoppingCartProvider from './context/ShoppingCartContext';
import UserProvider from './context/UserContext';

function App() {
  const [page, setPage] = useState('homePage');

  const getPage = () => {
    switch (page) {
      case 'cartPage':
        return <CartPage />;
      case 'signInPage':
        return <SignInPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <CustomThemeProvider>
      <UserProvider>
        <ShoppingCartProvider>
          <button type="button" onClick={() => setPage('homePage')}>Home Page</button>
          <button type="button" onClick={() => setPage('cartPage')}>Cart Page</button>
          <button type="button" onClick={() => setPage('signInPage')}>Sign In Page</button>
          {getPage()}
        </ShoppingCartProvider>
      </UserProvider>
    </CustomThemeProvider>
  );
}

export default App;
