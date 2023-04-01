import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  alpha,
  Button,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";
import { makeStyles } from "@mui/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  search: {
    padding: theme.spacing(0, 1),
    paddingLeft: 0,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 0),
    height: "100%",
    paddingLeft: 170,
    position: "absolute",
    pointerEvents: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#fff",
  },
  inputInput: {
    padding: theme.spacing(1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ bgcolor: theme.palette.primary.main }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: theme.palette.primary.headingFont,
            letterSpacing: 4,
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            KHARCHA
          </Link>
        </Typography>

        <Link style={{ textDecoration: "none", color: "white" }} to="/about">
          <Button
            sx={{
              color: "#fff",
              ":hover": {
                color: "#f0f9fa",
                fontWeight: "medium",
                bgcolor: "#dda7b0",
              },
            }}
          >
            About
          </Button>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/contact">
          <Button
            sx={{
              color: "#fff",
              ":hover": {
                color: "#f0f9fa",
                fontWeight: "medium",
                bgcolor: "#dda7b0",
              },
            }}
          >
            Contact Us
          </Button>
        </Link>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon sx={{ color: "#fff" }} />
          </div>
          <InputBase
            sx={{ color: "#fff" }}
            placeholder=" Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Link style={{ textDecoration: "none", color: "white" }} to="/signin">
        <IconButton sx={{ color: "#ffff" }}>
          <AccountCircle />
        </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
