import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error404 from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const Root = () => (
  <HashRouter basename="/">
    <Header />
    <Switch>
      <Route exact={true} path="/user/*" component={Home} />
      <Route path="*" component={Error404} />
      <Route component={Error404} />
    </Switch>
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
