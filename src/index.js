import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error404 from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import "./index.scss";

// REDUX
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import combineReducers from "../src/redux/combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// STORE
const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// AXIOS
axios.defaults.baseURL = "http://localhost:3001/api/v1";

const Root = () => (
  <HashRouter basename="/">
    <Header />
    <Routes>
      <Route exact={true} path="/index" element={<Home />} />
      <Route exact={true} path="/login" element={<Login />} />
      <Route exact={true} path="/profile" element={<Profile />} />
      <Route path="*" element={<Error404 />} />
      <Route element={<Error404 />} />
    </Routes>
    <Footer />
  </HashRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
