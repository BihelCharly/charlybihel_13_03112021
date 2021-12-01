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
      return state;
    case loginActionType.LOGOUT_SUCESS:
      const clearLoginState = { isLoggedIn: false, user: {} };
      localStorage.clear();
      return clearLoginState;
    default:
      return state;
  }
};

export default loginReducer;
