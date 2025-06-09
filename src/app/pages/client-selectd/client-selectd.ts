import { Component } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { ClientSelectedService } from '../../service/clientSelected.service';
import { ClientData} from '../../models/clients-data.model';
import { Button } from "../../components/button/button";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-client-selectd',
  imports: [CommonModule, MatCardModule, FormsModule, ReactiveFormsModule, MatCardModule, MatIconModule,
    MatSidenavModule, Button, Header],
  templateUrl: './client-selectd.html',
  styleUrl: './client-selectd.scss'
})
export class ClientSelectd {

  constructor(
    private clientService: ClientService,
    private clientSelectedService: ClientSelectedService
  ) {}

clientsSelected: ClientData[] = [];


ngOnInit() {
  this.clientsSelected = this.clientSelectedService.getSelecionados();
}
}


