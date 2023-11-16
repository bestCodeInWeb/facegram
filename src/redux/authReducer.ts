const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';

let initialState: InitialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

type InitialState = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
};

const authReducer = (state = initialState, action: ActionsType): InitialState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }

    case LOGOUT:
      return {
        ...state,
        userId: null,
        email: null,
        login: null,
        isAuth: false,
      }

    default:
      return state;
  }
}

//actionCreators

export const setAuthUserData = (userId: number, email: string, login: string): SetAuthUserData => {
  return {
    type: SET_USER_DATA,
    data: { userId, email, login }
  }
}

export const logoutCreator = (): LogoutCreator => {
  return {
    type: LOGOUT,
  }
}

type SetAuthUserData = {
  type: typeof SET_USER_DATA;
  data: {userId: number, email: string, login: string}
}

type LogoutCreator = {
  type: typeof LOGOUT;
}

type ActionsType = SetAuthUserData | LogoutCreator

export default authReducer;