import { Box, Paper, Typography } from "@mui/material";
import { useShopStore } from "../../hooks/useShopStore";

export const ProductsFilter = () => {
  const categories = [
    { id: "all", name: "Todo" },
    { id: "accessories", name: "Accesorios" },
    { id: "hoodies", name: "Buzos" },
    { id: "caps", name: "Gorras" },
    { id: "posters", name: "Cuadros" },
    { id: "tshirts", name: "Remeras" },
  ];

  const { onApplyFilterProduct, filter } = useShopStore();

  const onCategory = (categoryId) => {
    onApplyFilterProduct(categoryId);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      {categories.map((category) => (
        <Paper
          key={category.id}
          elevation={1}
          component={"button"}
          onClick={() => onCategory(category.id)}
          sx={{
            bgcolor: category.id === filter ? "blue" : "inherit",
          }}
        >
          <Typography>{category.name}</Typography>
        </Paper>
      ))}
    </Box>
  );
};
