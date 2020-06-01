import { Component } from '@angular/core';
import { FirstPageComponent } from './FirstPage/FirstPage.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  initialPage = FirstPageComponent;
}
