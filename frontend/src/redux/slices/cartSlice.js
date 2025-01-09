import { createSlice } from "@reduxjs/toolkit"
import {toast} from 'react-toastify'

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
    addToCart(state, action) {
      const item = action.payload
      let productItem = state.cartItems.find(product => product.product_id === item.product_id 
        && product.color === item.color && product.size === item.size
      )
      if (productItem) {
        toast.info('Product already added to your cart')
      } else {
        state.cartItems = [item, ...state.cartItems]
        toast.success('Product added to your cart')
      }
    }
  }
})

const cartReducer = cartSlice.reducer

export const {addToCart} = cartSlice.actions

export default cartReducer