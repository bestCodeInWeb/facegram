import { Message, User } from "../types/user";

const SET_FRIENDS = 'SET_FRIENDS';
const ADD_FRIEND = 'ADD_FRIEND';
const REMOVE_FRIEND = 'REMOVE_FRIEND';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState: InitialState = {
  items: [
    { id: '1', ava: 'https://pyxis.nymag.com/v1/imgs/338/9c1/462cbd8aec032b6e7648a2ba76314afdd1-25-captain-america-chris-evans.rsquare.w330.jpg', name: 'Rakhim Sterling', messages: [{ id: 1, userId: '1', text: 'Hello'}] },
    { id: '8', ava: 'https://www.sideshow.com/storage/product-images/904743/pepper-potts-in-rescue-suit_marvel_square.jpg', name: 'Svieta Loboda', messages: [] },
    { id: '3', ava: 'https://pyxis.nymag.com/v1/imgs/408/6c1/e678e34c865e59b2308b5401f5aa412f80-black-widow-3.rsquare.w700.jpg', name: 'Liuda Telna', messages: [{ id: 1, userId: '3', text: 'Ku'}] },
    { id: '4', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSPe3p16NRLFGAcBwhBxkPfKXcLsKCA2ERg&usqp=CAU', name: 'Artur Pirozhkov', messages: [] },
    { id: '5', ava: 'https://pyxis.nymag.com/v1/imgs/f96/a89/3c9d0896ee5f23b6d17f2782075496166a-lady-gaga.rsquare.w330.jpg', name: 'Alina Pikarova', messages: [{ id: 1, userId: '5', text: 'Hoe is it going?'}] },
    { id: '6', ava: 'https://pyxis.nymag.com/v1/imgs/743/05c/c32caeb780ba75be7f82725d7ac5d23ab7-30-thor.rsquare.w700.jpg', name: 'Mikhail Mudrik', messages: [] },
    { id: '7', ava: 'https://www.sideshow.com/storage/product-images/907935/the-scarlet-witch_marvel_square.jpg', name: 'Zina Jons', messages: [{ id: 1, userId: '7', text: 'What are you doing?'}] },
  ]
};

type InitialState = {
  items: User[];
}

const friendsReducer = (
  state = initialState,
  action: ActionsTypes,
): InitialState => {
  switch (action.type) {
    case SET_FRIENDS:
      return {
        ...state,
        items: action.payload,
      };

    case ADD_FRIEND:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_FRIEND:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    case SEND_MESSAGE:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.userId) {
            return {
              ...item,
              messages: [...item.messages, action.payload],
            }
          }

          return item;
        })
      };

    default:
      return state;
  }
};

//action creators
export const setFriendsAC = (friends: User[]): SetFriends => {
  return {
    type: SET_FRIENDS,
    payload: friends,
  };
};

export const addFriendAC = (friend: User): AddFriend => {
  return {
    type: ADD_FRIEND,
    payload: friend,
  };
};

export const removeFriendAC = (friendId: string): RemoveFriend => {
  return {
    type: REMOVE_FRIEND,
    payload: friendId,
  };
};

export const sendMessageAC = (
  text: string,
  userId: string,
  myId: string
): SendMessage => {
  const message = {
    id: +new Date(),
    userId: myId,
    text,
  }

  return {
    type: SEND_MESSAGE,
    payload: message,
    userId,
  };
}

type SetFriends = {
  type: typeof SET_FRIENDS;
  payload: User[];
};

type AddFriend = {
  type: typeof ADD_FRIEND;
  payload: User;
};

type RemoveFriend = {
  type: typeof REMOVE_FRIEND;
  payload: string;
};

type SendMessage = {
  type: typeof SEND_MESSAGE;
  payload: Message;
  userId: string;
}

type ActionsTypes = SetFriends | AddFriend | RemoveFriend | SendMessage;

export default friendsReducer;
