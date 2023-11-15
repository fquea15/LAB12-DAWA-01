// user-list.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
  ];

  selectedUserId: number | undefined; 

  showDetails(userId: number): void {
    this.selectedUserId = userId;
  }
}
