import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Music Store
                </Typography>
                <Box mr={2}>
                    <Button variant="contained" color="primary">
                        SIGN IN
                    </Button>
                </Box>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ShoppingCartOutlinedIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;