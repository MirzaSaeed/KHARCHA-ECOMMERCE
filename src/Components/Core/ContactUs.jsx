import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import LoadingAnimation from "../Stores/LoadingAnimation";

const useStyles = makeStyles({
  root: {
    marginTop: "2rem",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  },
});

const ContactUs = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  const [isLoading,setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
        <Header/>
    {isLoading? <LoadingAnimation/> :
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.title}>
        Contact Us
      </Typography>
      <Box component="form" onSubmit={handleSubmit} className={classes.form}>
        <TextField label="Name" variant="outlined" required />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>}
    <Footer/>
    </>
  );
};

export default ContactUs;
