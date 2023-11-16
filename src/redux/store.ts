import { combineReducers, createStore, Store } from 'redux';
import authReducer from './authReducer';
import friendsReducer from './friendsReducer';
import postsReducer from './postsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  friends: friendsReducer,
  posts: postsReducer,
  users: usersReducer,
  profile: profileReducer,
  auth: authReducer,
});

const store: Store<RootState> = createStore(reducers);

export type AppDispatch = typeof store.dispatch;

export default store;
