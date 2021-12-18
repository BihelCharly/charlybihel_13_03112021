//import axios from "axios";
import { loginActionType } from "../actions/login.action";

export const loginState = {
  isLoggedIn: false,
};

const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case loginActionType.LOGIN_SUCESS:
      const newLoginState = { isLoggedIn: true, user: action.payload };
      localStorage.setItem("user", JSON.stringify(newLoginState));
      return newLoginState;
    case loginActionType.LOGIN_FAIL:
      localStorage.clear();
      const logInFail = { isLoggedIn: false, user: {} };
      return logInFail;
    case loginActionType.LOGOUT_SUCESS:
      localStorage.clear();
      const logOutSuccess = { isLoggedIn: false, user: {} };
      return logOutSuccess;
    default:
      return state;
  }
};

export default loginReducer;
