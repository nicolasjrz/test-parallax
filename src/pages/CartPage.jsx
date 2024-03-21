import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Navbar } from "../components/Navbar";
import { useCartStore } from "../hooks/useCartStore";
import { ItemCart } from "../components/shop/itemCart";
import { Box } from "@mui/system";

export const CartPage = () => {
  const { itemsCart, totalPrice, onRemoveCart } = useCartStore();
  return (
    <>
      <Navbar />
      <Grid container>
        {itemsCart.map((item, index) => (
          <ItemCart key={index} {...item} />
        ))}
        <Grid item xs={12} bgcolor={"yellow"}>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography>precio total : {totalPrice}</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
