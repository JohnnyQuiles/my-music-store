import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Music Store
                </Typography>
                <Box mr={4}>
                    <Button variant="contained">SIGN IN</Button>
                </Box>
                <div>
                    <IconButton //highlight shopping cart icon
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <ShoppingCartIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                    </Menu>
                </div>

            </Toolbar>
        </AppBar>
    )
}
export default Header;