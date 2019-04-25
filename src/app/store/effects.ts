import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {UsersActionTypes} from './actions';
import {mergeMap} from 'rxjs/internal/operators/mergeMap';
import {map} from 'rxjs/internal/operators/map';
import {ApiService} from '../services/api';
import {catchError} from 'rxjs/internal/operators/catchError';
import {EMPTY} from 'rxjs';
import {withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState, selectIsUsersLoaded} from './index';
import {filter} from 'rxjs/internal/operators/filter';

@Injectable()
export class AppEffects {

  @Effect()
  loadUsers$ = this.actions$
    .pipe(
      ofType(UsersActionTypes.REQUESTED_ALL),
      withLatestFrom(this.store.select(selectIsUsersLoaded)),
      filter(([, isUsersLoaded]) => !isUsersLoaded),
      mergeMap(() => this.api.getUsers()),
      map(users => ({type: UsersActionTypes.LOADED_ALL, payload: {users}})),
      catchError(() => EMPTY)
    );

  constructor(private actions$: Actions, private api: ApiService, private store: Store<AppState>) {
  }
}

