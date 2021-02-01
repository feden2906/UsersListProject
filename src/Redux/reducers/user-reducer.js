import {ADD_CHOSEN_USER, ADD_USERS_FROM_API, CREATE_USER, DELETE_CHOSEN_USER, SAVE_USERS_LIST} from "../action-types";


const initialState = {users: [], chosenUser: []}


export const reducer = (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case ADD_USERS_FROM_API: {
      return {...state, users: payload}
    }
    case ADD_CHOSEN_USER: {
      return {...state, chosenUser: payload}
    }
    case DELETE_CHOSEN_USER: {
      const withDeleted = state.users.filter(user => user.id !== payload);
      return {...state, users: withDeleted}
    }
    case SAVE_USERS_LIST: {
      return {...state, users: payload}
    }
    case CREATE_USER: {
      return {...state, users: [...state.users, payload]};
    }
    default: {
      return state;
    }
  }
}
