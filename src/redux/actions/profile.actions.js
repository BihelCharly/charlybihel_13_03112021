import axios from "axios";

export const USER_PROFILE = "USER_PROFILE";

const VAR_ENV = "http://localhost:3001/user/profile";
const test = "http://localhost:3001/api/v1/user/signup";
var key = "key";

export const userProfile = (token) => {
  console.log(token);
  return (dispatch) => {
    return axios
      .post(VAR_ENV, { header: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        dispatch({
          type: USER_PROFILE,
          payload: {
            firstName: response.data.firstName,
            lastName: response.data.lastName,
          },
        });
      })
      .catch((error) => console.log(error));
  };
};
