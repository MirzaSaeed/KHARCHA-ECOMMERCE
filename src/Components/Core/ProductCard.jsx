import { faker } from "@faker-js/faker";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import LoadingAnimation from "../Stores/LoadingAnimation";

const ProductCard = ({ key }) => {
  const [isLoading, setIsLoading] = useState(false);

  const product = {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    imageUrl: faker.image.image(),
    description: faker.commerce.productDescription(),
  };
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Card key={key}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={product.imageUrl}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {product.price} $
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default ProductCard;
