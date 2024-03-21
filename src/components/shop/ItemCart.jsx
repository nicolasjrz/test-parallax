/* eslint-disable react/prop-types */
import { Button, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useCartStore } from "../../hooks/useCartStore";

export const ItemCart = ({
  id,
  talle = "",
  productSelect = {},
  finalPrice,
}) => {
  const { onRemoveCart, cantItemsCart } = useCartStore();
  // Verificar si productSelect y photos están definidos y es un array
  const imageSrc =
    productSelect &&
    productSelect.photos &&
    Array.isArray(productSelect.photos) &&
    productSelect.photos.length > 1
      ? productSelect.photos[0]
      : ""; // Si no hay imagen, asignamos una cadena vacía

  return (
    <Grid item container p={4}>
      <Grid
        item
        container
        xs={2}
        // bgcolor={"red"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box>
          <CardMedia
            component="img"
            width={50}
            height={50}
            image={imageSrc}
            alt="Paella dish"
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Typography variant="caption"> {productSelect.title}</Typography>
        <Typography variant="caption">talle: {talle}</Typography>
        <Typography variant="caption">$: {finalPrice}</Typography>

        <Button
          variant="contained"
          onClick={() => onRemoveCart(id, finalPrice)}
        >
          eliminar
        </Button>
      </Grid>
      {/* <Grid item xs={3}>
        <Typography variant="caption">$: {finalPrice}</Typography>
      </Grid> */}

      {/* <Grid item xs={3}>
        <Typography>eliminar</Typography>
      </Grid> */}
    </Grid>
  );
};
