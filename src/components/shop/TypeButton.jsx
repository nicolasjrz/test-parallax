import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { useCartStore } from "../../hooks/useCartStore";
import { useShopStore } from "../../hooks/useShopStore";

export const TypeButton = () => {
  const { productSelect } = useShopStore();
  const { onAddCart } = useCartStore();
  const { attributes, discountPrice, price, isDiscount, isClothing } =
    productSelect;

  const [talle, setTalle] = useState("");

  const handleChange = (event) => {
    setTalle(event.target.value);
  };

  const addCart = () => {
    let finalPrice = isDiscount ? discountPrice : price;

    if (isClothing && !talle) {
      alert("Por favor, seleccione un talle antes de agregar al carrito");
      return;
    }

    const data = isClothing
      ? { talle, productSelect, finalPrice }
      : { productSelect, finalPrice };

    onAddCart(data);
  };

  return (
    <div>
      {isClothing ? (
        <>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Talle</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={talle}
              label="Talle"
              onChange={handleChange}
            >
              {attributes.sizes.map((item, index) => (
                <MenuItem
                  key={index}
                  value={item.size}
                  disabled={item.amount === 0} // Deshabilitar el MenuItem si amount es 0
                >
                  {item.size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button variant="contained" color="success" onClick={() => addCart()}>
            Agregar ropa al carrito
          </Button>
        </>
      ) : (
        <Button variant="contained" color="error" onClick={() => addCart()}>
          Agregar accesorio al carrito
        </Button>
      )}
    </div>
  );
};

{
  /* {type === "posters"
        ? "poster"
        : type === "caps"
        ? "caps"
        : type === "hoodies"
        ? "hoodies"
        : type === "tshirts"
        ? "tshirts"
        : type === "accessories"
        ? "accessories"
        : "si type"} */
}
