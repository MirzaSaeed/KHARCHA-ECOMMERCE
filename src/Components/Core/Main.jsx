import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import IsLoginIn from "./IsLoginIn";

const Main = ({ children }) => {
  const isLogin = null;
  return (
    <div
      className="scrollHost"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: 100 + "vh",
      }}
    >
      {!isLogin ? <IsLoginIn /> : <Header />}

      <div style={{ flexGrow: 1 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
