import { Component, inject, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
        initFlowbite();
      }

    private _storageService = inject(StorageService);
    private router = inject(Router);

    signOut(){
    this._storageService.remove('session');
    this.router.navigateByUrl('/auth/log-in');
  }

}
