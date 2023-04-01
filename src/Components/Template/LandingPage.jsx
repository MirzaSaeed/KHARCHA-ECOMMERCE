import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import LoadingAnimation from "../Stores/LoadingAnimation";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../Core/Header";
import ProductCard from "../Core/ProductCard";
import Footer from "../Core/Footer";
import { makeStyles } from "@mui/styles";

const HeroBackground = styled(Box)(({ theme }) => ({
  backgroundImage: `url('https://source.unsplash.com/1600x900/?product')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2rem 0",
    padding: "0 1rem",
  },
  scroller: {
    height: "90vh",
    overflowY: "scroll",
    scrollbarWidth: "none" /* Hide scrollbar for Firefox */,
    msOverflowStyle: "none" /* Hide scrollbar for IE10+ */,
    "&::-webkit-scrollbar": {
      display: "none" /* Hide scrollbar for Chrome, Safari and Opera */,
    },
  },
  item: {
    marginBottom: "1rem",
  },
  image: {
    maxWidth: "100%",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const [products, setProducts] = useState([]);

  // generate 10 fake products
  const generateProducts = () => {
    const newProducts = [];
    for (let i = 0; i < 50; i++) {
      const product = {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        image: faker.image.image(),
        price: faker.commerce.price(),
        description: faker.lorem.sentences(),
        category: faker.commerce.department(),
      };
      newProducts.push(product);
    }
    setProducts(newProducts);
  };
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Box className={classes.scroller}>
          <HeroBackground>
            <Typography variant="h2" color="#F0f9fa" align="center">
              Welcome to our online store!
            </Typography>
          </HeroBackground>
          <Container sx={{ mt: 4 }}>
            <Typography variant="h4" align="center">
              Featured Products
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4}>
                  <ProductCard key={product.id} product={product} />
                </Grid>
              ))}
            </Grid>
            <Typography variant="h4" align="center">
            <Button variant="text" onClick={generateProducts}>Generate Products</Button>
            </Typography>
          </Container>
        </Box>
      )}
      <Footer />
    </>
  );
};

export default LandingPage;
