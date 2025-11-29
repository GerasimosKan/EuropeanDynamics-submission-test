import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user';
import { User } from '../../models/user';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-user-detail-component',
  standalone: false,
  templateUrl: './user-detail-component.html',
  styleUrls: ['./user-detail-component.css']
})
export class UserDetailComponent {
  @Input() user: User | null = null;
  @Output() close = new EventEmitter<void>();
  
  isEditing = false;
  editUser: User | null = null;
  showDeleteConfirmation = false;

  constructor(private userService: UserService) {}

  startEdit() {
    if (this.user) {
      this.editUser = JSON.parse(JSON.stringify(this.user));
      this.isEditing = true;
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.editUser = null;
  }

  addAddress() {
    if (this.editUser) {
      this.editUser.addresses.push({ addressText: '', addressType: 'home' });
    }
  }

  removeAddress(index: number) {
    if (this.editUser) {
      this.editUser.addresses.splice(index, 1);
    }
  }

  async saveChanges() {
    if (!this.editUser || !this.editUser.id) return;

    try {
      const updatedUser = await firstValueFrom(
        this.userService.updateUser(this.editUser.id, this.editUser)
      );

      this.user = updatedUser;
      this.isEditing = false;
      window.location.reload();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

  requestDelete() {
    this.showDeleteConfirmation = true;
  }
  
  cancelDelete() {
    this.showDeleteConfirmation = false;
  }

  async confirmDelete() {
    if (!this.user || !this.user.id) return;

    try {
      await firstValueFrom(this.userService.deleteUser(this.user.id));

      this.showDeleteConfirmation = false;
      this.close.emit();
      window.location.reload();
    } catch (error) {
      console.error('Error deleting user:', error);
      this.showDeleteConfirmation = false;
    }
  }
}
