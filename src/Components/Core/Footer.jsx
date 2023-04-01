import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  text: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    textAlign: "center",
  },
});

const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <p className={classes.text}>&copy; {year} KHARCHA. All Rights Reserved.</p>
  );
};

export default Footer;
