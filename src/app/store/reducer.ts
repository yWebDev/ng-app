import {UsersActionTypes, Actions} from './actions';
import {UsersState} from './index';

export const initialState: UsersState = {
  data: [],
  isUsersLoaded: false,
};

export function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case UsersActionTypes.LOADED_ALL:
      return {
        ...state,
        data: action.payload.users,
        isUsersLoaded: true,
      };
    default:
      return state;
  }
}
