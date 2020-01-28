import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-restaurant-page';

  clickEvent() {
    const mainNav = document.getElementById('main-nav');
    if (mainNav) {
      mainNav.classList.toggle('open');
    }
  }
}
