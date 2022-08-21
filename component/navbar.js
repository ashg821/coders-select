import * as React from 'react';
import { useState } from 'react';
import NextLink from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import { AddOutlined, RemoveOutlined } from '@mui/icons-material';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    Tooltip,
    MenuItem,
    Link,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
}
    from '@mui/material';
import { BiCartAlt } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';


const pages = ['Tshirts', 'Hoodies', 'Stickers', 'Mugs'];

const Navbar = ({ cart, subTotal, addToCart, removeFromCart, clearCart }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const [sidebarIsOpen, setState] = useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState(open);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 350 }}
            role="presentation"
            onClick={toggleDrawer(true)}
            onKeyDown={toggleDrawer(false)}
        >
            <Typography variant="h5" className="font-black text-center mt-2">Shopping Cart</Typography>
            {Object.keys(cart).length === 0 && <Typography variant="h6" className="text-center mt-2">Cart is empty!!</Typography>}

            <List>
                {Object.keys(cart).map((ele, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={cart[ele].name} />
                            <IconButton onClick={() => removeFromCart(ele, 1, 499, "CreativiT Graphic Printed T-Shirt", "XL", "Black")}><RemoveOutlined /></IconButton>
                            {cart[ele].qty}
                            <IconButton onClick={() => addToCart(ele, 1, 499, "CreativiT Graphic Printed T-Shirt", "XL", "Black")}><AddOutlined /></IconButton>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {Object.keys(cart).length !== 0 && <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <NextLink href="/checkout"><Button variant="outlined">Checkout</Button></NextLink>
                <Button variant="outlined" color="error" onClick={clearCart}>clear cart</Button>
            </Box>}

        </Box>
    );

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <BiCartAlt className='fs-2 text-warning d-none d-md-block me-2' />
                    <NextLink href={"/"}>
                        <Link
                            className='d-none d-md-block'
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 4,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            CODERS SELECT
                        </Link>
                    </NextLink>

                    <Box className="d-flex d-md-none" sx={{ flexGrow: 1 }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            className="d-md-none"
                        >
                            {pages.map((page) => (
                                <NextLink href={`/${page.toLowerCase()}`} key={page}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                </NextLink>
                            ))}
                        </Menu>
                    </Box>
                    <BiCartAlt className='fs-2 text-warning d-md-none me-2' />
                    <NextLink href={"/"}>
                        <Link
                            className='d-md-none'
                            variant="h5"
                            noWrap
                            component="a"
                            href={"/"}
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            CODERS SELECT
                        </Link>
                    </NextLink>
                    <Box className="d-none d-md-flex" sx={{ flexGrow: 1 }}>
                        {pages.map((page) => (
                            <NextLink href={`/${page.toLowerCase()}`} key={page}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </NextLink>
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex', flexGrow: 0 }}>
                        <Tooltip title="Open Cart">
                            <React.Fragment>
                                <IconButton onClick={toggleDrawer(true)} sx={{ p: 0 }}>
                                    <BiCartAlt className='fs-2 text-warning' />
                                </IconButton>
                                <SwipeableDrawer
                                    anchor={'right'}
                                    open={sidebarIsOpen}
                                    onClose={toggleDrawer(false)}
                                    onOpen={toggleDrawer(true)}
                                // BackdropProps={{ invisible: true }}
                                // ModalProps={{hideBackdrop: true}}    
                                >
                                    {list('right')}
                                </SwipeableDrawer>
                            </React.Fragment>

                        </Tooltip>
                        <Tooltip title="login/signup">
                            <NextLink href="/login"><IconButton><MdAccountCircle className="fs-2 warning" /></IconButton></NextLink>
                        </Tooltip>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
