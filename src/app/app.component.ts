import {Component} from '@angular/core';

import {ApiService} from 'src/app/services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private api: ApiService) {
    this.api.getUsers();
  }
}
