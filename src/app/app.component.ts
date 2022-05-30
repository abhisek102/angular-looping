import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  arr = [
    { name: 'johnny sins', email: 'johnny.bhai@gmail.com', num: 9008739291 },
    { name: 'Danny D', email: 'Danny69@gmail.com', num: 7005486591 },
    { name: 'Hardick pandiya', email: 'pandiya@gmail.com', num: 5464564654 },
    { name: 'Dani Daniels', email: 'AkaDani@gmail.com', num: 9005486955 },
  ];
}
