import { combineReducers } from "redux";
import loginReducer from "./reducers/login.reducer";
import profileReducer from "./reducers/profile.reducer";

export default combineReducers({
  loginReducer,
  profileReducer,
});
