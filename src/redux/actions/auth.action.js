import axios from "axios";

export const authActionType = {
  LOGIN_SUCESS: "lOGIN_SUCESS",
  LOGIN_FAIL: "lOGIN_FAIL",
};

export const loginAuthAction = (userState) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/user/login", userState);
      const email = userState.email;
      const token = response.data.body.token;
      const expires = new Date();
      dispatch({
        type: authActionType.LOGIN_SUCESS,
        payload: { email, token, expires },
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: authActionType.LOGIN_FAIL, payload: {} });
    }
  };
};
