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
    case profileActionType.PROFILE_SUCESS:
      const userProfil = { user: action.payload };
      return userProfil;
    case profileActionType.PROFILE_FAIL:
      return state;
    default:
      return state;
  }
};

export default profilReducer;
