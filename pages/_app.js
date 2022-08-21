import { useState, useEffect } from 'react';
import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script';
import Navbar from '../component/navbar'
import Footer from '../component/footer';
import { SnackbarProvider } from "notistack";


function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubtotal] = useState(0);

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart));
    let subT = 0;
    // const keys = Object.keys(mycart);
    for (let key in myCart) {
      subT += myCart[key].price * myCart[key].qty;
    }

    setSubtotal(subT);
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }

    setCart(newCart);
    saveCart(newCart);
  }

  const clearCart = () => {
    setCart({});
    saveCart({});
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
      if (newCart[itemCode].qty <= 0) {
        delete newCart[itemCode];

      }
    }
    setCart(newCart);
    saveCart(newCart);
  }

  useEffect(() => {
    // console.log("I'm useEffect from app.js");
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
        saveCart(JSON.parse(localStorage.getItem('cart')));
      }
    } catch (err) {
      console.error(err);
    }
  }, []);



  return <>
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      preventDuplicate
    >
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></Script>
      <Navbar cart={cart} subTotal={subTotal} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />

      <Component cart={cart} subTotal={subTotal} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} />
      <Footer />
    </SnackbarProvider>
  </>
}

export default MyApp
