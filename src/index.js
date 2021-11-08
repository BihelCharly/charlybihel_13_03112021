import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Error404 from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const Root = () => (
  <HashRouter basename="/">
    <Header />
    <Routes>
      <Route exact={true} path="/index" element={<Home />} />
      <Route exact={true} path="/sign-in" element={<Login />} />
      <Route exact={true} path="/user" element={<User />} />
      <Route path="*" element={<Error404 />} />
      <Route element={<Error404 />} />
    </Routes>
    <Footer />
  </HashRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
