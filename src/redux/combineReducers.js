import { combineReducers } from "redux";
import authReducer from "./reducers/auth.reducer";
import profileReducer from "./reducers/profile.reducer";

export default combineReducers({
  authReducer,
  profileReducer,
});
