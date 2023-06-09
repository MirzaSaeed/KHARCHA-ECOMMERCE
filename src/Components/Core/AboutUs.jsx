import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import LoadingAnimation from "../Stores/LoadingAnimation";
import Main from "./Main";

const useStyles = makeStyles({
  root: {
    marginTop: "2rem",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "1rem",
  },
});
const AboutUs = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Main>
      {isLoading ? (
        <LoadingAnimation paddingTop={50}  />
      ) : (
        <Container sx={{ py: 3 }} maxWidth="md" className={classes.root}>
          <Typography variant="h4" component="h1" className={classes.title}>
           About Us
          </Typography>
          <Typography variant="body1" align="justify" gutterBottom>
            Kharcha is a one-stop solution for all your financial needs. We are
            committed to providing our customers with the best financial
            products and services to help them manage their money better.
            Whether you're looking for a credit card, a personal loan, or a
            savings account, we have got you covered.
          </Typography>
          <Typography variant="body1" align="justify" gutterBottom>
            Our team of financial experts is dedicated to making your financial
            journey as smooth and hassle-free as possible. We understand that
            managing your finances can be overwhelming at times, which is why we
            are here to help you every step of the way. From opening a new
            account to resolving any issues you may have, we are always ready to
            assist you.
          </Typography>
          <Typography variant="body1" align="justify" gutterBottom>
            At Kharcha, we believe in transparency and honesty. We want our
            customers to have complete peace of mind when it comes to their
            finances. That's why we offer easy-to-understand products with no
            hidden fees or charges. We also value your feedback and strive to
            continuously improve our products and services to meet your evolving
            financial needs.
          </Typography>
        </Container>
      )}
    </Main>
  );
};

export default AboutUs;
