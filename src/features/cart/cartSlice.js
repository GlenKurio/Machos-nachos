import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  //   cart: [
  //     {
  //       itemId: 1,
  //       name: "Some Tocos",
  //       quantity: 0,
  //       price: 12,
  //       totalPrice: 24,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload - newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload - itemId
      state.cart = state.cart.filter((item) => item.itemId !== action.payload);
    },

    increaseQuantity(state, action) {
      // pyaload - itemId
      const item = state.cart.find((item) => item.itemId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },

    decreaseQuantity(state, action) {
      // pyaload - itemId
      const item = state.cart.find((item) => item.itemId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      // calling reducer inside reducer 😐
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const getCart = (state) => state.cart.cart;

export const getTotalCartItems = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.itemId === id)?.quantity ?? 0;
