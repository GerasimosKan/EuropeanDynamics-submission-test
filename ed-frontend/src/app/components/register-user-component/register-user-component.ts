import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user';
import { User } from '../../models/user';
import { Address } from '../../models/address';

@Component({
  selector: 'app-register-user',
  standalone: false,
  templateUrl: './register-user-component.html',
  styleUrls: ['./register-user-component.css']
})
export class RegisterUserComponent {
  @Output() close = new EventEmitter<void>();
  @Output() userCreated = new EventEmitter<void>();

  newUser: User = {
    name: '',
    surname: '',
    gender: 'M',
    birthdate: '',
    addresses: []
  };

  constructor(private userService: UserService) {}

  addAddress() {
    this.newUser.addresses.push({
      addressText: '',
      addressType: 'home'
    });
  }
  removeAddress(index: number) {
    this.newUser.addresses.splice(index, 1);
  }

  onSubmit() {
    this.newUser.addresses = this.newUser.addresses.filter(a => a.addressText.trim() !== '');

    this.userService.createUser(this.newUser).subscribe({
      next: () => {
        alert('User created successfully!');
        this.userCreated.emit();
        window.location.reload(); 
      },
      error: (err) => console.error('Error creating user:', err)
    });
  }
}
