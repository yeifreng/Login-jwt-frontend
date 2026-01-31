import { Component, Input, Signal, signal } from '@angular/core';
import { Users } from '../../../auth/models/user.interface';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  @Input() users?: Signal<Users[] | undefined>;
}
