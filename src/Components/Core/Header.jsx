import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  alpha,
  Button,
  IconButton,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  CssBaseline,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";
import { makeStyles, styled } from "@mui/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.headingFont, 0.7),
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
    pointerEvents: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    paddingLeft: 10,
    color: "#fff",
  },

  inputInput: {
    padding: theme.spacing(1, 1),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Header = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();

  const drawerWidth = 240;
  const navItems = ["About", "Contact"];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          flexGrow: 1,
          fontWeight: "bold",
          color: theme.palette.primary.headingFont,
          letterSpacing: 4,
        }}
      >
        <Link style={{ textDecoration: "none", color: "#d798a2" }} to="/">
          KHARCHA
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            sx={{
              color: "#fff",
              ":hover": {
                color: "#fff",
                fontWeight: "medium",
                bgcolor: "#dda7b0",
              },
            }}
            key={item}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon
              sx={{
                color: "#fff",
                ":hover": {
                  color: "#fff",
                  fontWeight: "medium",
                },
              }}
            />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: theme.palette.primary.headingFont,
              letterSpacing: 4,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              SALEBOOK
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/contact"
              >
                <Button
                  key={item}
                  sx={{
                    color: "#fff",
                    ":hover": {
                      color: "#fff",
                      fontWeight: "medium",
                      bgcolor: "#dda7b0",
                    },
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>

          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          <div className={classes.search}>
            <div className={classes.searchIcon}></div>
            <InputBase
              sx={{
                color: "#fff",
              }}
              placeholder=" Search…"
              classes={{
                root: classes.inputRoot,

                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton
            sx={{
              color: "#fff",
              ":hover": {
                color: "#fff",
                fontWeight: "medium",
                bgcolor: "#dda7b0",
              },
            }}
            size="small"
            aria-label="search"
            color="inherit"
          >
            <SearchIcon />
          </IconButton>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
