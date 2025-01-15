import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  isLoggidIn: false,
  token: '',
  user: null,

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(
        product =>
          product.product_id === item.product_id &&
          product.color === item.color &&
          product.size === item.size
      );
      if (productItem) {
        toast.info('Product already added to your cart');
      } else {
        state.cartItems = [item, ...state.cartItems];
        toast.success('Product added to your cart');
      }
    }
  },
});

const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQ, decrementQ, removeFromCart } =
  cartSlice.actions;

export default cartReducer;
