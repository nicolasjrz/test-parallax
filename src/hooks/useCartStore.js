import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, onRemoveItemFromCart } from "../store/slices/cartSlice";

export const useCartStore = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.shop);
  const { itemsCart, totalPrice, cantItemsCart } = useSelector(
    (state) => state.cart
  );

  //console.log({ itemsCart });

  const onAddCart = (item) => {
    console.log({ item });

    dispatch(addItemToCart(item)); // Asegúrate de importar newsSelect desde tu newsSlice
  };

  const onRemoveCart = (id, price) => {
    dispatch(onRemoveItemFromCart({ id, price }));
    // dispatch(applyFilterProducts({ filter })); // Asegúrate de importar newsSelect desde tu newsSlice
  };

  return {
    //atributos
    products,
    itemsCart,
    cantItemsCart,
    totalPrice,
    //metodos
    onAddCart,
    onRemoveCart,
  };
};
