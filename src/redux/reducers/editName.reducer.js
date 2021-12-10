import { editNameActionType } from "../actions/editName.action";

export const editNameState = {};

const editNameReducer = (state = editNameState, action) => {
  switch (action.type) {
    case editNameActionType.EDITNAME_SUCESS:
      const newEditNameState = { isLoggedIn: true, user: action.payload };
      return newEditNameState;
    case editNameActionType.EDITNAME_FAIL:
      return state;
    default:
      return state;
  }
};

export default editNameReducer;
