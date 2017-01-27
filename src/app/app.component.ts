import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  activeAbout: boolean = false;
  activeList: boolean = false;
  activeTeams: boolean = false;
  showLogin: boolean = false;

  showActive(link) {
    if (link) {
      return "active";
    } else {
      return "";
    }
  }

  toggleLogin() {
    this.showLogin = !this.showLogin;
  }
}
