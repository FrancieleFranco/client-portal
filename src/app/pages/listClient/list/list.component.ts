import { ClientService } from './../../../service/client.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClientRequest } from '../../../models/client-request.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatToolbarModule,
  ],
})
export class ListComponent implements OnInit {
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.searchClients(this.currentPage, this.pageSize);
  }

  opened = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  clients: ClientRequest[] = [];
  totalClientes = 0;
  pageSize = 16;
  currentPage = 1;

  toggleSidenav() {
    this.sidenav.toggle();
  }

  searchClients(page: number, limit: number): void {
    this.clientService.listClients(page, limit).subscribe({
      next: (res) => {
        this.clients = res.clients;
        this.totalClientes = res.total;
        this.currentPage = res.page;
      },
      error: (err) => {
        console.error('Erro ao buscar clientes:', err);
      },
    });
  }
}
