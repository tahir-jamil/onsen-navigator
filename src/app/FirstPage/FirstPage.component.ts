import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { SecondPageComponent } from '../second-page/second-page.component';

@Component({
  selector: 'app-FirstPage',
  templateUrl: './FirstPage.component.html',
  styleUrls: ['./FirstPage.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private _navigator: OnsNavigator) { }

  ngOnInit() {
  }

  push() {
    this._navigator.element.pushPage(SecondPageComponent);
  }

}
