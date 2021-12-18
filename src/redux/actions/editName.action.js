import axios from "axios";

// TO CAPITALIZE FIRST LETTER
export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const editNameActionType = {
  EDITNAME_SUCESS: "EDITNAME_SUCESS",
  EDITNAME_FAIL: "EDITNAME_FAIL",
};

export const editNameAction = (userState, firstName, lastName, history) => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).user.token;
      const headers = { Authorization: "Bearer" + token };
      userState.firstName = capitalizeFirstLetter(userState.firstName);
      userState.lastName = capitalizeFirstLetter(userState.lastName);
      const body = userState;
      const response = axios.put("user/profile", body, { headers });
      let newFirstName = (await response).data.body.firstName;
      let newLastName = (await response).data.body.lastName;
      dispatch({
        type: editNameActionType.EDITNAME_SUCESS,
        payload: { newFirstName, newLastName },
      });
    } catch (error) {
      dispatch({
        type: editNameActionType.EDITNAME_FAIL,
        payload: { firstName, lastName },
      });
      alert("Une erreur est survenue");
      history("../login");
    }
  };
};
