import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useAxios } from "../redux/API";
import logo from "../assets/argentBankLogo.png";
import NameChanger from "../components/NameChanger";
import "../styles/pages/profile.scss";

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

// RENDERED REACT COMPONENT TO DISPLAY FROM SWITCH CASE STATEMENT RETURNED
function Profile(props) {
  // CHECK TOKEN
  let isMyTokenPresent;
  try {
    // IF HE IS PRESENT THEN GET IT
    isMyTokenPresent = JSON.parse(localStorage.getItem("user")).user.token;
    // IF IS NOT THEN SEND FALSE
  } catch (error) {
    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof EvalError
    ) {
      isMyTokenPresent = false;
    }
  }
  // IF TOKEN IS PRESENT = THEN RENDER USERISLOGGED CONTENT OTHERWISE RENDER USERISNOTLOGGED CONTENT
  return isMyTokenPresent ? UserIsLogged(isMyTokenPresent) : UserIsNotLogged();
}

// FUNCTION CALLED IF USER IS NOT LOGGED
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

// FUNCTION CALLED IF USER IS LOGGED
function UserIsLogged(token) {
  // AXIOS TO CALL API TO GET DATAS FROM PROFILE
  const { loading, error, user } = useAxios({
    method: "post",
    url: "/user/profile",
    headers: { Authorization: "Bearer" + token },
  });

  // CATCH LOADING AND DISPLAY
  if (loading) {
    return (
      <main>
        <section className="account">
          <img src={logo} alt="Argent Bank Logo" width="100%" height="100%" />
        </section>
      </main>
    );
    // CATCH ERROR
  } else if (error) {
    return UserIsNotLogged();
    // IF ALL GOOD
  } else {
    return (
      <main className="main bg-dark">
        <div className="header">
          {/* // REACT COMPONENT TO HANDLE WHAT SHOULD BE RENDERED */}
          <NameChanger firstName={user.firstName} lastName={user.lastName} />
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
