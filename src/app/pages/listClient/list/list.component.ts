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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalDelete } from '../../../components/modal-delete/modal-delete';
import { ModalEdit } from '../../../components/modal-edit/modal-edit';
import { C } from '@angular/cdk/keycodes';
import { ClientData } from '../../../models/clients-data.model';

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
    MatSnackBarModule,
    MatDialogModule,
  ],
})
export class ListComponent implements OnInit {
  constructor(
    private clientService: ClientService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.searchClients();
  }

  opened = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  totalClientes = 0;
  pageSize = 16;
  currentPage = 1;

  clients: ClientData[] = [];
  page = 1;
  limit = 10;
  totalPages = 0;

  toggleSidenav() {
    this.sidenav.toggle();
  }

  searchClients() {
    this.clientService.getClients(this.page, this.limit).subscribe({
      next: (res) => {
        this.clients = res.clients;
        this.totalPages = res.totalPages;
        this.page = res.currentPage;
      },
      error: (err) => {
        console.error('Erro ao carregar clientes:', err);
      },
    });
  }

  deleteClient(id: number): void {
    this.dialog
      .open(ModalDelete,{
        width: '400px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.clientService.deleteClient(id).subscribe({
            next: (res) => {
              console.log('Cliente excluído com sucesso!', res);
              this.clients = this.clients.filter((client) => client.id !== id);
            },
            error: (err) => {
              console.error('Erro ao excluir cliente', err);
            },
          });
        }
      });
  }

  modalEdit(id: number) {
    const dialogRef = this.dialog.open(ModalEdit, {
      width: '400px',
      data: { itemId: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.searchClients();
      }
    });
  }
}
