import { createContext } from "react";

// useContext 跨元件傳遞
export const MessageContext = createContext({})

export const initState = {
  type: '',
  title: '',
  text: '',
};

// Reducer
export const messageReducer = (state, action) => {
  switch (action.type) {
    case "POST_MESSAGE":
      return {
        type: 'danger', // success, danger
        title: '成功 reducer',
        text: '這是一段成功的訊息',
      };
    case "CLEAR_MESSAGE":
      return {
        ...initState,
      };
    default:
      return state;
  }
}