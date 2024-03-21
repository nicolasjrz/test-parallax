import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const CardProduct = ({ item }) => {
  const {
    attributes,
    description,
    isClothing,
    name,
    photos,
    price,
    type,
    discountPrice,
  } = item;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={photos[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="caption" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price} - {discountPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
};
