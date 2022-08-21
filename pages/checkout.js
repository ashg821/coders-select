import { Box, Typography, TextField, Grid, Button } from '@mui/material'

import React from 'react'

const Checkout = ({ cart, subTotal }) => {
  return (
    <div className='container'>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant='h6' className='mt-4'>1. Delivery Details</Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              required
              id="name"
              type="text"
              label="Name"
              variant="standard"
              className="w-full"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="email"
              type="email"
              label="Email"
              variant="standard"
              className="w-full"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              type="text"
              label="Address"
              // variant="standard"
              multiline
              maxRows={5}
              className="w-full"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="city"
              type="text"
              label="City"
              variant="standard"
              className="w-full"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="state"
              type="text"
              label="State"
              variant="standard"
              className="w-full"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="pin"
              type="number"
              label="Pincode"
              variant="standard"
              className="w-full"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="phone"
              type="tel"
              pattern={"[0-9]{10}"}
              label="Phone Number"
              variant="standard"
              className="w-full"
            />
          </Grid>

        </Grid>
        <Typography variant='h6' className='mt-4'>2. Review Cart</Typography>
        <Grid container>
          {Object.keys(cart).map((key) => (
            <Grid container key={key}>
              <Grid item xs={6}>
                <Typography variant="p">{cart[key].name}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: { xs: "center", md: "flex-start" }, alignItems: "center" }}>
                <Typography variant="p" >Quantity: {cart[key].qty}</Typography>
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: "400" }}>Subtotal: <Typography variant="p" sx={{ fontWeight: "800" }}>₹{subTotal}</Typography></Typography>
          </Grid>
        </Grid>
        <Button variant="outlined" sx={{maxWidth: "8rem", marginTop: "2rem"}}>Pay ₹{subTotal}</Button>
      </Box>
    </div >
  )
}

export default Checkout