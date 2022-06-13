import { Box, Button } from '@mui/material';
import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import HomeIcon from '@mui/icons-material/Home';
import { useParams } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from '../components/CartItem';
import Layout from '../components/Layout';

// const sampleShoppingCart = [

//   {
//     id: '234',
//     title: "Red Drum Set",
//     price: 59999,
//     quantity: 2,
//     image: 'https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg',
//  },
//  {
//   id: '123',
//   title: "Blue Drum Set",
//   price: 59999,
//   quantity: 2,
//   image: 'https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg',
// },
// ];

function CartPage() {
  const {
    shoppingCart,
    emptyCart,
  } = useShoppingCart();

  const { backgroundColor } = useParams();

  // We want to display whats in the shopping cart.
  return (
    <Layout shoppingCart={shoppingCart}>
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        bgcolor={backgroundColor}
      >
        {shoppingCart.map((cartItem) => (
          <Box p={3} key={cartItem.id} width="100%" maxWidth={500}>
            <CartItem cartItem={cartItem} />
          </Box>
        ))}
        <Box mt={5}>
          <Box mb={3}>
            <Button fullWidth variant="contained">Checkout</Button>
          </Box>
          <Box mb={3}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<ReplayIcon />}
              onClick={emptyCart}
            >
              Empty Cart
            </Button>
          </Box>
          <Box mb={3}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default CartPage;
