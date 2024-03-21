import { useDispatch, useSelector } from "react-redux";
import {
  applyFilterProducts,
  onLoadingProducts,
  onProductSelect,
} from "../store/slices/shopSlice";
import { productsDB } from "../data/testDB";

export const useShopStore = () => {
  const dispatch = useDispatch();
  const { products, filteredProducts, productSelect, filter } = useSelector(
    (state) => state.shop
  );
  //const { itemsCart, totalPrice } = useSelector((state) => state.cart);

  const onStartLoadingProducts = async () => {
    try {
      //   const response = await apiMongodb.get("/news");

      //   if (response.status === 200) {
      //     const data = response.data;
      //     if (data && data.news && data.news.length > 0) {
      //       // Si la respuesta es exitosa y hay noticias disponibles
      //     //   dispatch(onLoadingNews(data.news));
      //     } else {
      //       // No se encontraron noticias'
      //       console.log("No se encontraron noticias'.");
      //     }

      dispatch(onLoadingProducts(productsDB));

      //   } else {
      //     console.error("Error en la solicitud:", response);
      //     // Aquí puedes manejar el error en la interfaz de usuario si es necesario
      //   }
    } catch (error) {
      console.error("Error inesperado:", error);
      // Aquí puedes mostrar un mensaje de error al usuario si es necesario
    }
  };

  const onSelectCurrentProduct = (item) => {
    dispatch(onProductSelect(item)); // Asegúrate de importar newsSelect desde tu newsSlice
  };

  const onApplyFilterProduct = (filter) => {
    dispatch(applyFilterProducts({ filter })); // Asegúrate de importar newsSelect desde tu newsSlice
  };

  return {
    //atributos
    products,
    filteredProducts,
    productSelect,
    filter,

    //metodos
    onStartLoadingProducts,
    onSelectCurrentProduct,
    onApplyFilterProduct,
  };
};
