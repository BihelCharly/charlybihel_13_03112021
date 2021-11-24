import axios from "axios";

export const authActionType = {
  LOGIN_SUCESS: "lOGIN_SUCESS",
  LOGIN_FAIL: "lOGIN_FAIL",
};

export const loginAuthAction = (userState) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/user/login", userState);
      const { data } = response;
      dispatch({
        type: authActionType.LOGIN_SUCESS,
        payload: { ...userState, ...data },
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: authActionType.LOGIN_FAIL, payload: {} });
    }
  };
};
