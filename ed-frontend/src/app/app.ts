import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar-component/navbar-component";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false,
})
export class AppComponent {
  title = 'ed-frontend';
  showRegister = false;

  closeRegister() {
    this.showRegister = false;
  }
}
