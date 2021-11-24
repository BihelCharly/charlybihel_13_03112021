import axios from "axios";

export const profileActionType = {
  PROFILE_SUCESS: "PROFILE_SUCESS",
  PROFILE_FAIL: "PROFILE_FAIL",
};

const getAuthToken = () => {
  const token = JSON.parse(localStorage.user).user.token;
  const expires = JSON.parse(localStorage.user).user.expires;
  //axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return [token, expires];
};

export const userProfile = () => {
  const token = getAuthToken()[0];
  console.log(token);
  return async (dispatch) => {
    try {
      const response = await axios.post("/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({
        type: profileActionType.PROFILE_SUCESS,
        payload: response,
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: profileActionType.LOGIN_FAIL, payload: {} });
    }
  };
};
