import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user';
import { User } from '../../models/user';

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
  editUser: User | null = null; // Clone for editing

  constructor(private userService: UserService) {}

  // Switch to Edit Mode
  startEdit() {
    if (this.user) {
      // Deep copy to avoid mutating the original view before saving
      this.editUser = JSON.parse(JSON.stringify(this.user));
      this.isEditing = true;
    }
  }

  // Cancel Edit
  cancelEdit() {
    this.isEditing = false;
    this.editUser = null;
  }

  // Address Helpers for Edit Mode
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

  // Save Changes
  saveChanges() {
    if (!this.editUser || !this.editUser.id) return;

    if (confirm('Are you sure you want to save these changes?')) {
      this.userService.updateUser(this.editUser.id, this.editUser).subscribe({
        next: (updatedUser) => {
          alert('User updated successfully!');
          this.user = updatedUser; // Update local view
          this.isEditing = false;
          window.location.reload(); // Refresh main list
        },
        error: (err) => console.error('Error updating user:', err)
      });
    }
  }

  // Delete User
  deleteUser() {
    if (!this.user || !this.user.id) return;

    if (confirm('Are you sure you want to delete this user? This cannot be undone.')) {
      this.userService.deleteUser(this.user.id).subscribe({
        next: () => {
          alert('User deleted successfully!');
          this.close.emit();
          window.location.reload(); // Refresh main list
        },
        error: (err) => console.error('Error deleting user:', err)
      });
    }
  }
}
