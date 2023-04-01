import React from "react";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

const LoadingAnimation = () => {
  const classes = useStyles();

  return (
    <>
      {
        <div className={classes.root} style={{ paddingTop: 25 + "%" }}>
          <CircularProgress color="inherit" />
        </div>
      }
    </>
  );
};

export default LoadingAnimation;
