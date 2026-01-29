import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { StorageService } from '../../../shared/services/storage.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { CardDashboardComponent } from "../../components/card-dashboard/card-dashboard.component";
import { TableStockComponent } from "../../components/table-stock/table-stock.component";
import { SalesComponent } from "../../components/sales/sales.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, CardDashboardComponent, TableStockComponent, SalesComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent implements OnInit{

  ngOnInit(): void {
      initFlowbite();
    }

  private _dashboardService = inject(DashboardService);
  private _storageService = inject(StorageService);
  private router = inject(Router);
  users = toSignal(this._dashboardService.getusers());

  signOut(){
  this._storageService.remove('session');
  this.router.navigateByUrl('/auth/log-in');
}

}
