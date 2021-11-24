import axios from "axios";
import { authState } from "../reducers/auth.reducer";

export const profileActionType = {
  USER_PROFILE: "USER_PROFILE",
};

export const userProfile = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({
        type: profileActionType.USER_PROFILE,
        payload: {
          firstName: response.data.body.firstName,
          lastName: response.data.body.lastName,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
