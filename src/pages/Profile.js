import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useAxios } from "../redux/API";
import logo from "../assets/argentBankLogo.png";
import "../styles/pages/profile.scss";

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

function Profile(props) {
  let isMyTokenPresent;
  try {
    isMyTokenPresent = JSON.parse(localStorage.getItem("user")).user.token;
  } catch (error) {
    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof EvalError
    ) {
      isMyTokenPresent = false;
    }
  }
  return isMyTokenPresent ? UserIsLogged(isMyTokenPresent) : UserIsNotLogged();
}

// function Profile(props) {
//  let [token, setToken] = useState("");
//   try {
//     const getToken = JSON.parse(localStorage.getItem("user")).user.token;
//     setToken(getToken);
//   } catch (token) {
//     if (
//       token instanceof TypeError ||
//       token instanceof RangeError ||
//       token instanceof EvalError
//     ) {
//       setToken(false);
//     }
//   }
//   return token ? UserIsLogged(token) : UserIsNotLogged();
// }

function UserIsNotLogged() {
  return (
    <main className="main bg-dark">
      <section width="100%" height="100%">
        <div>
          <h1 style={{ color: `white`, fontSize: `50px` }}>
            Vous n'êtes pas connecté
          </h1>
        </div>
      </section>
    </main>
  );
}

function UserIsLogged(token) {
  const { loading, error, user } = useAxios({
    method: "post",
    url: "/user/profile",
    headers: { Authorization: "Bearer" + token },
  });
  // During loading
  if (loading) {
    return (
      <main>
        <section className="account">
          <img src={logo} alt="Argent Bank Logo" width="100%" height="100%" />
        </section>
      </main>
    );
    // If api returning error then redirect to
  } else if (error) {
    return UserIsNotLogged();
    // If EVERYTHING IS OKAY
  } else {
    return (
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    );
  }
}

export default connect(mapStateToProps)(Profile);
