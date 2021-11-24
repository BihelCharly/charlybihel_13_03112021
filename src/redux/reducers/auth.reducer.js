//import axios from "axios";
import { authActionType } from "../actions/auth.action";

export const authState = {
  isLogedIn: false,
  user: {
    status: null,
    message: null,
    email: null,
    body: { token: null, expires: null },
  },
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case authActionType.LOGIN_SUCESS:
      const newAuthState = { isLogedIn: true, user: action.payload };
      localStorage.setItem("user", JSON.stringify(newAuthState));
      return newAuthState;
    case authActionType.LOGIN_FAIL:
      return state;
    default:
      return state;
  }
};

export default authReducer;

// const getAuthState = () => {
//   const user = localStorage.user;
//   const token = JSON.parse(localStorage.user).user.body.token;
//   const expires = JSON.parse(localStorage.user).user.expires;
//   try {
//     const userObject = JSON.parse(user);
//     const expires = userObject.user.expires;
//     const token = JSON.parse(localStorage.user).user.body.token;
//     // IF > AT THE CURRENT DATE
//     if (new Date(expires) > new Date()) {
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//       console.log(userObject);
//       return userObject;
//     }
//   } catch (error) {
//     return authState;
//   }
// };

// console.log(getAuthState());
