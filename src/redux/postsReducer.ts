import { PostType } from "../types/user";

const SET_POSTS = 'SET_POSTS';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';

const initialState: InitialState = {
  items: []
};

type InitialState = {
  items: PostType[];
}

const postsReducer = (
  state = initialState,
  action: ActionsTypes,
): InitialState => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        items: action.payload,
      };

    case ADD_POST:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };

    case DELETE_POST:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    case UPDATE_POST:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }

          return item;
        }),
      };

    default:
      return state;
  }
};

//action creators
export const setPostsAC = (posts: PostType[]): SetPosts => {
  return {
    type: SET_POSTS,
    payload: posts,
  };
};

export const addPostAC = (post: Omit<PostType, 'id'>): AddPost => {
  const newPost = {
    ...post,
    id: +new Date(),
  }

  return {
    type: ADD_POST,
    payload: newPost,
  };
};

export const deletePostsAC = (postId: number): DeletePost => {
  return {
    type: DELETE_POST,
    payload: postId,
  };
};

export const updatePostsAC = (post: PostType): UpdatePost => {
  return {
    type: UPDATE_POST,
    payload: post,
  };
};

type SetPosts = {
  type: typeof SET_POSTS;
  payload: PostType[];
};

type AddPost = {
  type: typeof ADD_POST;
  payload: PostType;
};

type DeletePost = {
  type: typeof DELETE_POST;
  payload: number;
};

type UpdatePost = {
  type: typeof UPDATE_POST;
  payload: PostType;
};

type ActionsTypes = SetPosts | AddPost | DeletePost | UpdatePost;

export default postsReducer;
