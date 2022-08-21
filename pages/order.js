import { Grid } from '@mui/material'
import React from 'react'

const Order = ({ cart, subTotal }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">CODERS SELECT</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order ID: #88776655</h1>
            <p className="leading-relaxed mb-4">Your order has been placed successfully!</p>
            <Grid container spacing={1} className='border-b border-gray-500 mb-4'>
              <Grid item xs={4}>Name</Grid>
              <Grid item xs={4}>Quantity</Grid>
              <Grid item xs={4}>Total Price</Grid>
            </Grid>
            {Object.keys(cart).map(key => (
              <Grid container spacing={1} className="flex border-b border-gray-200 py-2" key={key}>
                <Grid item xs={4}><span className="text-gray-500">{cart[key].name}</span></Grid>
                <Grid item xs={4}><span className="ml-auto text-gray-900">{cart[key].qty}</span></Grid>
                <Grid item xs={4}><span className="ml-auto text-gray-900">{cart[key].price * cart[key].qty}</span></Grid>
              </Grid>
            ))}
            <div className="flex mt-5">
              <span className="title-font font-medium text-2xl text-gray-900">Subtotal: ₹{subTotal}</span>
              <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Track Order</button>
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
        </div>
      </div>
    </section>
  )
}

export default Order