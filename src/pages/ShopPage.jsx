import { Navbar } from "../components/Navbar";

import { Badge, Grid, IconButton } from "@mui/material";
import { ProductsFilter } from "../components/shop/ProductsFilter";
import { TitleShop } from "../components/shop/TitleShop";
import { ListProducts } from "../components/shop/ListProducts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useShopStore } from "../hooks/useShopStore";
import { useEffect } from "react";
import { useCartStore } from "../hooks/useCartStore";

export const ShopPage = () => {
  const {
    onStartLoadingProducts,
    //, productSelect
  } = useShopStore();
  const { onRemoveCart, cantItemsCart } = useCartStore();
  useEffect(() => {
    onStartLoadingProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          //   alignItems={"center"}
        >
          <ProductsFilter />
        </Grid>
        <Grid item xs={12} p={2}>
          <TitleShop />
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"} p={4}>
          <IconButton aria-label="cart">
            <Badge badgeContent={cantItemsCart} color="success">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <ListProducts />
        </Grid>
      </Grid>
    </>
  );
};
