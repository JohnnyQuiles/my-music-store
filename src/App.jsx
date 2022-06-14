/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CustomThemeProvider from './components/CustomThemeProvider';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import SignInPage from './pages/SignInPage';
import ShoppingCartProvider from './context/ShoppingCartContext';
import UserProvider from './context/UserContext';

// Reducer state and actions as an arguemnt
// and returns the updated version of the state

// ACTIONS
export const LOG_IN_ACTION = 'LOG_IN';
const LOG_OUT_ACTION = 'LOG_OUT';

// is the function that handles all logic for changing the state
const userInitialValue = null;

const userReducer = (state = userInitialValue, action) => {
  switch (action.type) {
    case LOG_IN_ACTION:
      return action.payload.user;

    case LOG_OUT_ACTION:
      return null;

    default:
      return state;
  }
};

export const ADD_TO_CART_ACTION = 'ADD_TO_CART';
export const REMOVE_FROM_CART_ACTION = 'REMOVE_FROM_CART';
export const EMPTY_CART_ACTION = 'EMPTY_CART';

const shoppingCartInitialValue = [];

const shoppingCartReducer = (state = shoppingCartInitialValue, action) => {
  switch (action.type) {
    case ADD_TO_CART_ACTION: {
      const { product } = action.payload;
      // does this product already exist in the shopping cart?
      const productFound = state.find((cartItem) => cartItem.id === product.id);

      // // If it does, update the quantity of the existing one
      if (productFound) {
        const newShoppingCart = state.map((cartItem) => {
          const newQuantity = cartItem.quantity + 1;
          if (cartItem.id === productFound.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              total: newQuantity * cartItem.price,
            };
          }
          return cartItem;
        });
        return newShoppingCart;
      }
      // // If it does not add it to the end of the list
      const newShoppingCart = [...state, {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        image: product.image,
        total: product.price,
      }];

      return newShoppingCart;
    }

    case REMOVE_FROM_CART_ACTION: {
      const { productId } = action.payload;
      const newShoppingCart = state.filter((cartItem) => cartItem.id !== productId);

      return newShoppingCart;
    }

    case EMPTY_CART_ACTION: {
      return [];
    }

    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
  },
});

function App() {
  return (
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  );
}

export default App;
