import axios from 'axios';

import { GET_CHAT, POST_CHAT, DELETE_CHAT, EMPTY_CHAT } from './types';

export const sendChat = chatData => dispatch => {
  console.log('sending');
  axios
    .post('/api/chat', chatData)
    .then(res =>
      dispatch({
        type: POST_CHAT,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getChat = userID => dispatch => {
  axios
    .get(`/api/chat/${userID.id}/${userID.otherID}`)
    .then(res => {
      console.log(res);
      if (res === null) {
        dispatch({
          type: EMPTY_CHAT
        });
      }
      dispatch({
        type: GET_CHAT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteChat = id => dispatch => {
  axios
    .delete(`/api/chat/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_CHAT,
        payload: id
      })
    )
    .catch(err => console.log(err));
};
