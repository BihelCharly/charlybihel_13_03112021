import { combineReducers } from "redux";
import profileReducer from "./reducers/profile.reducer";
import postReducer from "./reducers/post.reducer";

export default combineReducers({
  profileReducer,
  postReducer,
});
