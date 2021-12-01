import axios from "axios";

export const loginActionType = {
  LOGIN_SUCESS: "lOGIN_SUCESS",
  LOGIN_FAIL: "lOGIN_FAIL",
  LOGOUT_SUCESS: "LOGOUT_SUCESS",
};
export const loginAction = (userState, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/user/login", userState);
      const token = response.data.body.token;
      dispatch({
        type: loginActionType.LOGIN_SUCESS,
        payload: { token },
      });
      history("../profile");
    } catch (error) {
      alert("UTILISATEUR INEXISTANT");
      dispatch({ type: loginActionType.LOGIN_FAIL, payload: {} });
    }
  };
};

export const logoutAction = (userState, history) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: loginActionType.LOGOUT_SUCESS,
        payload: userState,
      });
      history("../");
    } catch (error) {}
  };
};
