import React, { useState } from "react";
import "../styles/components/NameChanger.scss";

function NameChanger(props) {
  const [status, setStatus] = useState(false);
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);

  return !status
    ? displayName(setStatus, firstName, lastName)
    : displayInputs(setStatus, firstName, lastName);
}

const displayInputs = (setStatus, firstName, lastName) => {
  return (
    <React.Fragment>
      <div className="input-wrapper--new">
        <h1>
          Welcome back
          <br />
        </h1>
        <form>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username--new"
            placeholder={firstName}
            onChange={(e) => {
              const newFirstName = e.target.value;
              console.log(newFirstName);
            }}
          />
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username-new"
            placeholder={lastName}
            onChange={(e) => {
              const newLastName = e.target.value;
              console.log(newLastName);
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
};

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

export default NameChanger;
