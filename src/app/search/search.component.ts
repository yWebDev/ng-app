import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  searchCtrl: AbstractControl;
  form = new FormGroup({
    searchCtrl: new FormControl()
  });

  constructor() {
    this.searchCtrl = this.form.get('searchCtrl');
  }

  ngOnInit() {
  }

}
