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

const usersReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    default:
      return state;
  }
}

// action creators

export default usersReducer;
