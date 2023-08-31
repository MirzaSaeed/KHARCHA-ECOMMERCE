import { useEffect, useState } from "react";
import LoadingAnimation from "../Stores/LoadingAnimation";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../Core/Header";
import Footer from "../Core/Footer";
import { makeStyles } from "@mui/styles";
import ProductList from "../Core/ProductList";
import Main from "../Core/Main";

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
  scroller: {},
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

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Main>
      {isLoading ? (
        <LoadingAnimation paddingTop={50} />
      ) : (
        <Box className={classes.scroller}>
          <div>
            <HeroBackground>
              <Typography variant="h2" color="#F0f9fa" align="center">
                Welcome to our online store!
              </Typography>
            </HeroBackground>
          </div>

          <Container sx={{ mt: 4 }}>
            <Typography variant="h4" align="center">
              Featured Products
            </Typography>
            <Grid spacing={1} sx={{ ml: 0.5, mt: 2 }}>
              <ProductList />
            </Grid>

            <Typography variant="h4" align="center"></Typography>
          </Container>
        </Box>
      )}
    </Main>
  );
};

export default LandingPage;
