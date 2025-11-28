import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user';
import { User } from '../../models/user';

@Component({
  selector: 'app-display-users-component',
  templateUrl: './display-users-component.html',
  standalone: false,
  styleUrls: ['./display-users-component.css']
})
export class DisplayUsersComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser: User | null = null;

  constructor(private userService: UserService) {
    this.users$ = this.userService.getAllUsers();
  }

  ngOnInit(): void {
    this.refreshUsers();
  }

  refreshUsers() {
    this.users$ = this.userService.getAllUsers();
  }

  openDetail(user: User): void {
    this.selectedUser = user;
  }
}
