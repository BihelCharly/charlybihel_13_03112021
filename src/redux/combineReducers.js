import { combineReducers } from "redux";
import loginReducer from "./reducers/login.reducer";
import editNameReducer from "./reducers/editName.reducer";

export default combineReducers({
  loginReducer,
  editNameReducer,
});
