import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Header from "./Header";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const IsLoginIn = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const isLogin = null;
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Header>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title={!isLogin ? "Account Detail" : "SignIn "}>
          {isLogin ? (
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
              />
            </IconButton>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "#d798a2" }}
              to="/signin"
            >
              <IconButton
                sx={{
                  color: "#fff",
                  ":hover": {
                    color: "#fff",
                    fontWeight: "medium",
                    bgcolor: "#dda7b0",
                  },
                }}
              >
                <AccountCircle />
              </IconButton>
            </Link>
          )}
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem
              sx={{ mx: 1 }}
              key={setting}
              onClick={handleCloseUserMenu}
            >
              <Typography sx={{ borderRadius: 2 }} textAlign="center">
                {setting}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Header>
  );
};

export default IsLoginIn;
