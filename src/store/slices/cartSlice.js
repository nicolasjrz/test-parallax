import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsCart: [],
    totalPrice: 0,
    cantItemsCart: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const newItemWithId = { ...newItem, id: uuidv4(), quantity: 1 };
      state.itemsCart.push(newItemWithId);

      // Actualiza el precio total del carrito
      state.totalPrice += newItem.finalPrice;
      state.cantItemsCart = state.itemsCart.length;
    },
    onRemoveItemFromCart: (state, action) => {
      const { id, price } = action.payload;
      const itemToRemoveIndex = state.itemsCart.findIndex(
        (item) => item.id === id
      );

      if (itemToRemoveIndex !== -1) {
        // Restar el precio del producto eliminado del precio total del carrito
        state.totalPrice -= price;
        // Remover el producto del carrito
        state.itemsCart.splice(itemToRemoveIndex, 1);
      }
      state.cantItemsCart = state.itemsCart.length;
    },
    onClearCart: (state) => {
      // Limpia el carrito y establece el precio total en 0
      state.itemsCart = [];
      state.totalPrice = 0;
      state.cantItemsCart = 0;
    },
  },
});

export const { addItemToCart, onRemoveItemFromCart, onClearCart } =
  cartSlice.actions;
