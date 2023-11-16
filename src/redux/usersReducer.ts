import { UserInterface } from "../types/interfaces";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState: InitialState = {
  items: [],
};

type InitialState = {
  items: UserInterface[];
}

const usersReducer = (
  state = initialState,
  action: ActionsTypes,
): InitialState => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        items: action.payload,
      }

    case FOLLOW:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              followed: true,
            }
          }

          return item;
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              followed: false,
            }
          }

          return item;
        }),
      }

    default:
      return state;
  }
}

// action creators
export const followAC = (userId: number): Follow => {
  return {
    type: FOLLOW,
    payload: userId,
  }
}

export const unfollowAC = (userId: number): Unfollow => {
  return {
    type: UNFOLLOW,
    payload: userId,
  }
}

export const setUsersAC = (users: UserInterface[]): SetUsers => {
  return {
    type: SET_USERS,
    payload: users,
  }
}

type SetUsers = {
  type: typeof SET_USERS;
  payload: UserInterface[];
}

type Follow = {
  type: typeof FOLLOW;
  payload: number;
}

type Unfollow = {
  type: typeof UNFOLLOW;
  payload: number;
}

type ActionsTypes = SetUsers | Unfollow | Follow;

export default usersReducer;
