import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box, Paper } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
    borderRadius: 8,
  },
  slider: {
    display: "flex",
    transition: "all 0.5s ease",
    "& img": {
      width: "100%",
      objectFit: "contain",
    },
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    zIndex: 1,
    padding: "12px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.8)",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,1)",
    },
    "& svg": {
      fontSize: "24px",
      color: "#000",
    },
  },
  prev: {
    left: "8px",
  },
  next: {
    right: "8px",
  },
});

const ImageSlider = ({ images }) => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const prev = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(prev);
  };

  const nextSlide = () => {
    const next = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(next);
  };

  return (
    <Paper className={classes.root}>
      <Box
        className={classes.slider}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img src={image} alt={`Product Image ${index}`} key={index} />
        ))}
      </Box>
      {images.length > 1 && (
        <>
          <Box
            className={`${classes.arrow} ${classes.prev}`}
            onClick={prevSlide}
          >
            <i class="fas fa-chevron-left"></i>
          </Box>
          <Box
            className={`${classes.arrow} ${classes.next}`}
            onClick={nextSlide}
          >
            <i class="fas fa-chevron-right"></i>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default ImageSlider;
