import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {RequestAllUsers} from 'src/app/store/actions';
import {AppState, selectUsers} from 'src/app/store';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  users$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.users$ = store.pipe(select(selectUsers));
  }

  ngOnInit() {
    this.store.dispatch(new RequestAllUsers());
  }

}
