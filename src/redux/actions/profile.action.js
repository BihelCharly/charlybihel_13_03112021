import axios from "axios";

export const profileActionType = {
  PROFILE_SUCESS: "PROFILE_SUCESS",
  PROFILE_FAIL: "PROFILE_FAIL",
};

export const profileAction = (token) => {
  //const token = JSON.parse(localStorage.user).user.token;
  //console.log(token);
  console.log(token);
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: "/user/profile",
        headers: { Authorization: "Bearer" + token },
      });
      dispatch({
        type: profileActionType.PROFILE_SUCESS,
        payload: {
          firstName: response.data.body.firstName,
          lastName: response.data.body.lastName,
        },
      });
    } catch (error) {
      dispatch({ type: profileActionType.PROFILE_FAIL, payload: {} });
    }
  };
};
