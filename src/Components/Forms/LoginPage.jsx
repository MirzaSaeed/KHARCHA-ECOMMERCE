import { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoadingAnimation from "../Stores/LoadingAnimation";
import Header from "../Core/Header";
import Footer from "../Core/Footer";
import { NavLink } from "react-router-dom";
import Main from "../Core/Main";

const LoginPage = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`email: ${email} Password: ${password}`);
  };
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
        <Container maxWidth="md">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,color: "#fff" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                    <Link variant="body2">
                  <NavLink to="/signup" style={{textDecoration: 'none', color: "#d798a2"}}>
                      {"Don't have an account? Sign Up"}
                  </NavLink>
                    </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      )}
    </Main>
  );
};

export default LoginPage;
