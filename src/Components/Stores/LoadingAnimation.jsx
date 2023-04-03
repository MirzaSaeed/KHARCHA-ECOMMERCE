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

const LoadingAnimation = ({paddingTop, paddingBottom}) => {
  const classes = useStyles();

  return (
    <>
      {
        <div className={classes.root} style={{ paddingTop: `${paddingTop}vh`,paddingBottom: `${paddingBottom}vh`}}>
          <CircularProgress color="inherit" />
        </div>
      }
    </>
  );
};

export default LoadingAnimation;
