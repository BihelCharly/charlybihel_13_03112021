import React, { useState } from "react";
import { connect } from "react-redux";
import { editNameAction } from "../redux/actions/editName.action";
import { useNavigate } from "react-router";
import "../styles/components/NameChanger.scss";

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editName: (userState, firstName, lastName, history) => {
      dispatch(editNameAction(userState, firstName, lastName, history));
    },
  };
};

// EXPORTED COMPONENT BY DEFAULT
function NameChanger(props) {
  const { editName } = props;
  const [status, setStatus] = useState(false);
  const history = useNavigate();
  const [userState, setUserState] = useState();
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);

  // CALLED FROM THE FORM ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    editName(userState, firstName, lastName, history);
    setStatus(false);
    setFirstName(userState.firstName);
    setLastName(userState.lastName);
  };

  // CHECK STATUS TO RETURN THE INPUTS FORM OR NOT
  return !status ? (
    // IF STATUS IS FALSE RETURN FIRST NAME + LAST NAME
    displayName(setStatus, firstName, lastName)
  ) : (
    // IF STATUS IS TRUE RETURN INPUTS TO CHANGE NAME
    <React.Fragment>
      <div className="input-wrapper--new">
        <h1>
          Welcome back
          <br />
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="username"></label>
          <input
            required
            minLength={2}
            type="text"
            id="username--new"
            placeholder={firstName}
            onChange={(e) => {
              let firstName = e.target.value;
              setUserState({ ...userState, ...{ firstName } });
            }}
          />
          <label htmlFor="username"></label>
          <input
            required
            minLength={2}
            type="text"
            id="username-new"
            placeholder={lastName}
            onChange={(e) => {
              let lastName = e.target.value;
              setUserState({ ...userState, ...{ lastName } });
            }}
          />
          <button className="save-button" onClick={() => {}}>
            Save
          </button>
          <button
            className="cancel-button"
            onClick={() => {
              setStatus(false);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

// FUNCTION CALLED IF STATUS IS FALSE MEANING : DON'T SHOW INPUTS
const displayName = (setStatus, firstName, lastName) => {
  return (
    <React.Fragment>
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <button
        className="edit-button"
        onClick={() => {
          setStatus(true);
        }}
      >
        Edit Name
      </button>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NameChanger);
