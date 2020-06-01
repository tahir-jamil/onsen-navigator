import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  constructor(private _navigator: OnsNavigator) { }

  ngOnInit() {
  }

  pop() {
    this._navigator.element.popPage();
  }
}
