import Layout from '../components/Layout';
import { Box } from '@mui/material';

const shoppingCart = [
    {
        id: '123',
        title: "blue Drum Set",
        price: 59999,
        quantity: 2,
        image: 'https://www.yamaha.com/yamahavgn/PIM/Images/19027_12073_1_1200x1200_80813f268e73483818697e99937dbd59.jpg',
    },
    {
        id: '234',
        title: "Red Drum Set",
        price: 59999,
        quantity: 2,
        image: 'https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg',
    },
];

const CartPage = () => {
    return (
        <Layout>
            <Box
                width={1}
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                {shoppingCart.map(cartItem => 
                <Box p={3}>{cartItem.title} -Qty: {cartItem.quantity} - {cartItem.price}
                </Box>)}
            </Box>
        </Layout>
    )
}

export default CartPage;