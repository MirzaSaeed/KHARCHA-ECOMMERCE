import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Template/LandingPage";
import LoadingContext from "./Components/Context/LoadingContexts";
import AboutUs from "./Components/Core/AboutUs";
import ContactUs from "./Components/Core/ContactUs";
import LoginPage from "./Components/Forms/LoginPage";
import SignUpPage from "./Components/Forms/SignUpPage";
import "./App.css";
import ProductDetail from "./Components/Core/ProductDetail";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      headingFont: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingContext.Provider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </LoadingContext.Provider>
    </ThemeProvider>
  );
}

export default App;
