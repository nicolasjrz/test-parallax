import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: [],
    filteredProducts: [],
    productSelect: {},
    isLoading: false,
    currentProductIndex: undefined,
    filter: "",
  },
  reducers: {
    onLoadingProducts: (state, { payload }) => {
      state.isLoading = true;

      payload.forEach((product) => {
        const exists = state.products.some(
          (productDB) => productDB._id === product._id
        );
        if (!exists) {
          state.products.push(product);
        }
      });
      state.productSelect = state.products[state.currentProductIndex] || {};
    },
    applyFilterProducts: (state, { payload }) => {
      state.filter = payload.filter;
      if (state.filter !== "all") {
        // Limpiar el arreglo de productos filtrados
        state.filteredProducts = [];
        // Aplicar filtro a los productos y agregarlos al arreglo de productos filtrados
        state.products.forEach((product) => {
          if (product.type == state.filter) {
            state.filteredProducts.push(product);
          }
        });
      } else {
        // Si no hay filtro, mostrar todos los productos
        state.filteredProducts = state.products;
      }
    },
    onProductSelect: (state, { payload }) => {
      state.productSelect =
        state.products.find((product) => product._id === payload._id) || {};
    },
    onClearProducts: (state) => {
      (state.products = []),
        (state.filteredProducts = []),
        (state.productSelect = {}),
        (state.isLoading = false),
        (state.currentProductIndex = 0);
    },
  },
});
export const {
  onLoadingProducts,
  applyFilterProducts,
  onProductSelect,
  onClearProducts,
} = shopSlice.actions;
