import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Typography,
  Button,
  Box,
  Grid,
  CardMedia,
  Card,
  CardContent,
  CardActionArea,
  Container,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import products from "../Assets/products";
import LoadingAnimation from "../Stores/LoadingAnimation";
import Main from "./Main";

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([{}]);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <Main>
      <Container sx={{ mt: 10 }}>
        {isLoading ? (
          <LoadingAnimation paddingTop={30} paddingBottom={30} />
        ) : (
          <Grid container sx={{ my: 2, alignItems: "center" }}>
            <Grid item xs={12} sm={6} sx={{ px: 1 }}>
              <Carousel autoPlay={true} showThumbs={true}>
                {data.images.map((image) => (
                  <div key={image} style={{ height: 400, overflow: "hidden" }}>
                    <img
                      src={image}
                      alt={data.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" gutterBottom>
                {data.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {data.brand}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {data.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" color="primary" sx={{ mr: 2 }}>
                  ${data.price}
                </Typography>
                {data.discountedPrice && (
                  <Typography variant="h6" color="error">
                    ${data.discountedPrice}
                  </Typography>
                )}
              </Box>
              <Button
                style={{
                  marginRight: 10 + "px",
                  textDecoration: "none",
                  color: "white",
                }}
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Add to Cart
              </Button>
            </Grid>
            <Grid item xs={12}>
              {/* Show related or different products */}
            </Grid>
          </Grid>
        )}
        <Typography variant="h6">Related Products:</Typography>
        <Grid container spacing={1}>
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
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {product.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
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
      </Container>
    </Main>
  );
};

export default ProductDetail;
