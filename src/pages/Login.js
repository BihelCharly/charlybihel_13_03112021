import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAuthAction } from "../redux/actions/auth.action";
//import { Link } from "react-router-dom";
import "../styles/pages/login.scss";

function Login(props) {
  const { user, login } = props;
  const [userState, setUserState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userState);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="your email"
              onChange={(e) => {
                const email = e.target.value;
                setUserState({ ...userState, ...{ email } });
              }}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="your password"
              onChange={(e) => {
                const password = e.target.value;
                setUserState({ ...userState, ...{ password } });
              }}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <Link to="/profile"> */}
          <button className="sign-in-button">Sign In</button>
          {/* </Link> */}
        </form>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userState) => {
      dispatch(loginAuthAction(userState));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
