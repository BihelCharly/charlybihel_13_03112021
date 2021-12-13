import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../redux/actions/login.action";
import { useNavigate } from "react-router";
import "../styles/pages/login.scss";

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userState, history) => {
      dispatch(loginAction(userState, history));
    },
  };
};

function Login(props) {
  const { login } = props;
  const [userState, setUserState] = useState({});
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userState, history);
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
              required
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
              required
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
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
