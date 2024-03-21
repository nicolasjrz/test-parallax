import {
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Navbar } from "../components/Navbar";
import { useShopStore } from "../hooks/useShopStore";

// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useCartStore } from "../hooks/useCartStore";
import { TypeButton } from "../components/shop/TypeButton";
import { Box } from "@mui/system";
export const ProductPage = () => {
  const { productSelect } = useShopStore();
  const { onAddCart } = useCartStore();
  const {
    attributes,
    description,
    discountPrice,
    title,
    photos,
    type,
    price,
    isDiscount,
    isClothing,
  } = productSelect;

  // Función para mostrar botones según el tipo de producto

  return (
    <>
      <Navbar />
      <Grid
        container
        //marginLeft={10}
        p={10}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"90vh"}
      >
        <Grid
          item
          xs={12}
          sm={5}
          // bgcolor={"yellow"}
          display={"flex"}
          justifyContent={"end"}
          alignItems={"center"}
        >
          <CardMedia
            border={"1px solid"}
            component="img"
            alt="green iguana"
            image={photos[0]}
            sx={{ width: { xs: "100%", sm: 300 }, height: 287 }}
          />
        </Grid>

        <Grid
          item
          container
          xs={12}
          sm={6}
          // bgcolor={"greenyellow"}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Box border={"1px solid"} height={287}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                style={{ fontWeight: "bold" }}
              >
                {title}
              </Typography>
              <Typography variant="body1">{attributes.color?.name}</Typography>
              {/* <Typography variant="body1">
              {attributes.color && attributes.color.name
                ? attributes.color.name
                : " "}
            </Typography> */}
              <Typography variant="body2">{description}</Typography>
              <Typography variant="body2">{type}</Typography>

              {isDiscount ? (
                <>
                  <Typography variant="body2">${discountPrice}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: "line-through" }}
                  >
                    ${price}
                  </Typography>
                </>
              ) : (
                <Typography variant="body2">${price}</Typography>
              )}
            </CardContent>
            <CardActions sx={{ justifyContent: "left", pl: 2 }}>
              {/* Botones específicos según el tipo de producto */}
              <TypeButton isClothing={isClothing} />
              {/* Botones de incremento y decremento de cantidad */}
            </CardActions>
          </Box>
        </Grid>
      </Grid>
      {/* <Stack
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        // height={"90vh"}
        bgcolor={"red"}
      ></Stack> */}
    </>
  );
};
{
  /* <ButtonGroup>
                <Button
                  aria-label="reduce"
                  onClick={() => handleCountChange(-1)}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Typography m={2}>{count}</Typography>
                <Button
                  aria-label="increase"
                  onClick={() => handleCountChange(1)}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup> */
}
{
  /* <Snackbar
        anchorOrigin={snackbarPosition}
        open={notification.isOpen}
        key={snackbarPosition.vertical + snackbarPosition.horizontal}
      >
        <Alert
          severity={notification.msg === "approved" ? "failure" : "success"}
          sx={{ width: "100%" }}
        >
          {notification.msg}
        </Alert>
      </Snackbar> */
}
