import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";
import { connect } from "react-redux";
import { logoutAction } from "../redux/actions/login.action";
import "../styles/components/header.scss";

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (userState, history) => {
      dispatch(logoutAction(userState, history));
    },
  };
};

function Header(props) {
  const { user, logout } = props;
  const isLogged = user.loginReducer.isLoggedIn;
  const token = localStorage.getItem("user");
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!isLogged && !token ? userIsNotLogged() : userIsLogged(logout)}
      </div>
    </nav>
  );
}

function userIsNotLogged() {
  return (
    <React.Fragment>
      <Link className="main-nav-item" to="/login">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </React.Fragment>
  );
}

function userIsLogged(props) {
  const logout = props;
  return (
    <React.Fragment>
      <Link className="main-nav-item" to="/login" onClick={() => logout()}>
        <i className="fa fa-user-circle"></i>
        Sign Out
      </Link>
    </React.Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
