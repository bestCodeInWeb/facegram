import { ServerProfile } from "../types/interfaces";

const SET_PROFILE = 'SET_PROFILE';

const initialState: InitialState = {
  item: null,
};

type InitialState = {
  item: ServerProfile | null;
}

const profileReducer = (
  state = initialState,
  action: ActionsTypes,
): InitialState => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
};

//action creators
export const setProfileAC = (profile: ServerProfile | null): SetProfile => {
  return {
    type: SET_PROFILE,
    payload: profile,
  };
};

type SetProfile = {
  type: typeof SET_PROFILE;
  payload: ServerProfile | null;
};

type ActionsTypes = SetProfile;

export default profileReducer;
