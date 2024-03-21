import { Grid, Pagination, PaginationItem } from "@mui/material";
import { CardProduct } from "./cardProduct";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useShopStore } from "../../hooks/useShopStore";

export const ListProducts = () => {
  const { products, filteredProducts, onSelectCurrentProduct } = useShopStore();

  const productPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  //   console.log({ products, filteredProducts });

  useEffect(() => {
    // Reiniciar la página actual cuando se aplique un filtro
    setCurrentPage(1);
  }, [filteredProducts]);

  // Calcula el índice de inicio y fin para mostrar los productos de la página actual
  const startIndex = (currentPage - 1) * productPerPage;
  const endIndex = currentPage * productPerPage;

  const productsToDisplay =
    filteredProducts.length > 0 ? filteredProducts : products;

  // Filtra los productos que se mostrarán en la página actual
  const productsOnPage = productsToDisplay.slice(startIndex, endIndex);

  // Maneja el cambio de página
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Grid container>
      <Grid item container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} container bgcolor={"blue"} width={100}>
          {productsOnPage.map((product, index) => (
            <Grid item xs={3} key={index} p={2}>
              <Link
                to={`/shop/${product._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => onSelectCurrentProduct(product)}
              >
                <CardProduct item={product} />
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      {/* Agrega el componente Pagination al final para permitir la navegación entre páginas */}
      <Grid
        mt={8}
        item
        container
        xs={12}
        bgcolor={"yellowgreen"}
        justifyContent={"center"}
      >
        <Pagination
          color="primary"
          count={Math.ceil(productsToDisplay.length / productPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};
