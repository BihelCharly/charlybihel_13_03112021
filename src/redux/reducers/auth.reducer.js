import { authActionType } from "../actions/auth.action";

export const authState = {
  isLogedIn: false,
  user: {
    status: "",
    message: "",
    email: "",
    body: { token: "" },
    // expires_at: "",
    // jwttoken: "",
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

const jwtLocalStorage = {
  getAuthState: () => {
    const user = localStorage.getItem("user");
  },
};

export default authReducer;
