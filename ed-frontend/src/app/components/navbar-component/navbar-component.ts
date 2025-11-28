import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  standalone: false,
  templateUrl: './navbar-component.html',
  styleUrls: ['./navbar-component.css']
})
export class NavbarComponent {
  @Output() openRegister = new EventEmitter<void>();
}
