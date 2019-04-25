import {User} from '../models/user';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface UsersState {
  data: User[];
  isUsersLoaded: boolean;
}

export interface AppState {
  users: UsersState;
}

export const usersFeatureSelector = (state: AppState) => state.users;
export const selectUsers = createSelector(
  usersFeatureSelector,
  (users: UsersState) => users.data,
);
export const selectIsUsersLoaded = createSelector(
  usersFeatureSelector,
  (users: UsersState) => users.isUsersLoaded,
);
