import { profileActionType } from "../actions/profile.action";

export const profilState = {
  status: null,
  message: null,
  body: {
    id: null,
    email: null,
  },
};

const profilReducer = (state = profilState, action) => {
  switch (action.type) {
    case profileActionType.USER_PROFILE:
      return {
        test: action.payload,
      };
    default:
      return state;
  }
};

export default profilReducer;
