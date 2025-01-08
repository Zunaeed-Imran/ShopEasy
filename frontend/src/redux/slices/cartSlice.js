import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  cartItems: [],
  validCoupon: {
    name: '',
    discount: 0
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  }
})

const cartReducer = cartSlice.reducer

export default cartReducer