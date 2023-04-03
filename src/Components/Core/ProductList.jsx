import { useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import products from "../Assets/products";
import { Link, Navigate, generatePath, useNavigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const handleProduct = (id, e) => {
    localStorage.setItem("UID", id);
    e.preventDefault();
    navigate(generatePath(`/product/${id}`));
    return <ProductDetail match={id} />;
  };
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} md={6} lg={4} key={product.id}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={product.thumbnail}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginBottom: 10 + "px",
                }}
              >
                <Grid item>
                  <Button
                    size="small"
                    variant="contained"
                    style={{
                      marginRight: 10 + "px",
                      textDecoration: "none",
                      color: "white",
                    }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </Button>
                </Grid>
                <Grid
                  item
                  style={{
                    marginRight: 10 + "px",
                  }}
                >
                  <Link
                    style={{
                      marginRight: 10 + "px",
                      textDecoration: "none",
                      color: "white",
                    }}
                    to={`/product/${product.id}`}
                  >
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      View
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
