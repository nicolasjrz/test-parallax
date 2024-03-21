import img1 from "../assets/image/1.webp";
import img2 from "../assets/image/2.webp";
import img3 from "../assets/image/3.webp";
import img4 from "../assets/image/4.webp";

export const productsDB = [
  {
    _id: 1,
    title: "Remera estampada",
    type: "tshirts",
    description: "Remera de algodón con estampado floral",
    photos: [img1, img2, img3, img4],
    price: 25,
    discountPrice: 20,
    isDiscount: true,
    isClothing: true,
    attributes: {
      color: { name: "rojo" },
      sizes: [
        { size: "talle 1", amount: 0 },
        { size: "talle 2", amount: 5 },
        { size: "talle 3", amount: 5 },
      ],
    },
  },
  {
    _id: 2,
    title: "Buzo con capucha",
    type: "hoodies",
    description: "Buzo de algodón con capucha y bolsillo canguro",
    photos: [img1, img2, img3, img4],
    price: 40,
    discountPrice: 35,
    isDiscount: false,
    isClothing: true,
    attributes: {
      color: { name: "rojo" },
      sizes: [
        { size: "talle 1", amount: 5 },
        { size: "talle 2", amount: 5 },
        { size: "talle 3", amount: 5 },
      ],
    },
  },
  {
    _id: 3,
    title: "Gorra ajustable",
    type: "caps",
    description: "Gorra de béisbol ajustable con logo bordado",
    photos: [img1, img2, img3, img4],
    price: 15,
    discountPrice: 12,
    isDiscount: true,
    isClothing: true,
    attributes: {
      color: { name: "rojo" },
      sizes: [
        { size: "talle 1", amount: 5 },
        { size: "talle 2", amount: 5 },
        { size: "talle 3", amount: 5 },
      ],
    },
  },
  {
    _id: 4,
    title: "Fotografía urbana",
    type: "posters",
    description:
      "Cuadro impreso en lienzo de fotografía urbana en blanco y negro",
    photos: [img1, img2, img3, img4],
    price: 30,
    discountPrice: 0, // No hay descuento para este producto
    isDiscount: false,
    isClothing: false,
    attributes: { amount: 12 },
  },
  {
    _id: 5,
    title: "Fotografía paisaje",
    type: "accessories",
    description: "Cuadro impreso en lienzo de paisaje natural en colores vivos",
    photos: [img1, img2, img3, img4],

    price: 35,
    discountPrice: 0,
    isDiscount: false,
    isClothing: false,
    attributes: { amount: 8 },
  },
  {
    _id: 6,
    title: "Remera estampada",
    type: "tshirts",
    description: "Remera de algodón con estampado floral",
    photos: [img1, img2, img3, img4],
    price: 25,
    discountPrice: 20,
    isDiscount: true,
    isClothing: true,
    attributes: {
      color: { name: "rojo" },
      sizes: [
        { size: "talle 1", amount: 5 },
        { size: "talle 2", amount: 5 },
        { size: "talle 3", amount: 5 },
      ],
    },
  },
  {
    _id: 7,
    title: "Buzo con capucha",
    type: "hoodies",
    description: "Buzo de algodón con capucha y bolsillo canguro",
    photos: [img1, img2, img3, img4],
    price: 40,
    discountPrice: 35,
    isDiscount: true,
    isClothing: true,
    attributes: {
      color: { name: "rojo" },
      sizes: [
        { size: "talle 1", amount: 5 },
        { size: "talle 2", amount: 5 },
        { size: "talle 3", amount: 5 },
      ],
    },
  },
  {
    _id: 8,
    title: "Gorra ajustable",
    type: "caps",
    description: "Gorra de béisbol ajustable con logo bordado",
    photos: [img1, img2, img3, img4],
    price: 15,
    discountPrice: 12,
    isDiscount: true,
    isClothing: true,
    attributes: {
      color: { name: "rojo" },
      sizes: [
        { size: "talle 1", amount: 5 },
        { size: "talle 2", amount: 5 },
        { size: "talle 3", amount: 5 },
      ],
    },
  },
  {
    _id: 9,
    title: "Fotografía urbana",
    type: "accessories",
    description:
      "Cuadro impreso en lienzo de fotografía urbana en blanco y negro",
    photos: [img1, img2, img3, img4],
    price: 30,
    discountPrice: 0, // No hay descuento para este producto
    isDiscount: false,
    isClothing: false,
    attributes: { amount: 12 },
  },
  {
    _id: 10,
    title: "Fotografía paisaje",
    type: "posters",
    description: "Cuadro impreso en lienzo de paisaje natural en colores vivos",
    photos: [img1, img2, img3, img4],
    price: 35,
    discountPrice: 0,
    isDiscount: false,
    isClothing: false,
    attributes: { amount: 8 },
  },
];

export const formData = {
  title: "",
  type: "", // Puede ser "ropa" o "accesorio"
  description: "",
  photos: [],
  price: 0,
  discountPrice: 0,
  isDiscount: true,
  isClothing: false, // Para determinar si es ropa o no
  attributes: {
    color: [], // Array de objetos { name: "", sizes: {}, amount: 0 } para la ropa
    amount: 0, // Para los accesorios
  },
};
