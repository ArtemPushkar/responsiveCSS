import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'responsiveCSS';

  items = [1, 2, 3];
  current = 1;
  onClick (number:number) {
    this.current = number
  }
}

