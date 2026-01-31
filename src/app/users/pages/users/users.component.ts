import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { initFlowbite } from 'flowbite';
import { UserService } from '../../services/user.service';
import { StorageService } from '../../../shared/services/storage.service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserListComponent } from "../../components/user-list/user-list.component";
import { Users } from '../../../auth/models/user.interface';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, UserListComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent implements OnInit {

    ngOnInit(): void {
        initFlowbite();
      }

    private _userService = inject(UserService);
    private _storageService = inject(StorageService);
    private router = inject(Router);
    users = toSignal<Users[]>(this._userService.getusers());

}
