import axios from "axios";

export const editNameActionType = {
  EDITNAME_SUCESS: "EDITNAME_SUCESS",
  EDITNAME_FAIL: "EDITNAME_FAIL",
};

export const editNameAction = (userState, firstName, lastName) => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).user.token;
      const headers = { Authorization: "Bearer" + token };
      const body = userState;
      const response = axios.put("user/profile", body, { headers });
      const newFirstName = (await response).data.body.firstName;
      const newLastName = (await response).data.body.lastName;
      dispatch({
        type: editNameActionType.EDITNAME_SUCESS,
        payload: { newFirstName, newLastName },
      });
    } catch (error) {
      alert("ERREUR");
      dispatch({
        type: editNameActionType.EDITNAME_FAIL,
        payload: { firstName, lastName },
      });
    }
  };
};
