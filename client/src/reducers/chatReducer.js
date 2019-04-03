import { GET_CHAT, POST_CHAT, DELETE_CHAT, EMPTY_CHAT } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  connectingID: '',
  otherID: '',
  chat: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CHAT:
      console.log(action.payload);
      return {
        ...state,
        chat: action.payload.chat,
        connectingID: action.payload.ID,
        otherID: action.payload.connectingID
      };
    case EMPTY_CHAT:
      return {
        ...state
      };
    case POST_CHAT:
      return {};
    case DELETE_CHAT:
      return {};
    default:
      return state;
  }
}
