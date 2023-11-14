import { combineReducers, createStore, Store } from 'redux';
import friendsReducer from './friendsReducer';
import postsReducer from './postsReducer';

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  friends: friendsReducer,
  posts: postsReducer,
});

const store: Store<RootState> = createStore(reducers);

export type AppDispatch = typeof store.dispatch;

export default store;
