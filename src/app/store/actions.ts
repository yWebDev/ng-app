import {Action} from '@ngrx/store';
import {User} from '../models/user';

export enum UsersActionTypes {
  REQUESTED_ALL = '[Users] REQUESTED_ALL',
  LOADED_ALL = '[Users] LOADED_ALL',
}

export class RequestAllUsers implements Action {
  readonly type = UsersActionTypes.REQUESTED_ALL;
}

export class LoadAllUsers implements Action {
  readonly type = UsersActionTypes.LOADED_ALL;

  constructor(public payload: { users: User[] }) {
  }
}

export type Actions = RequestAllUsers | LoadAllUsers;
