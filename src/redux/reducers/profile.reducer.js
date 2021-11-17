import { USER_PROFILE } from "../actions/profile.actions";

const initialState = {
  firstName: "",
  lastName: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
