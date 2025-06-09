import { ClientData, ClientUpdate } from './../../models/clients-data.model';
import { ClientService } from './../../service/client.service';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ClientRequest } from '../../models/client-request.model';


@Component({
  selector: 'app-modal-edit',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './modal-edit.html',
  styleUrl: './modal-edit.scss',
})
export class ModalEdit {
  formEdit: FormGroup;

  constructor(
    private clientService: ClientService,
    public dialogRef: MatDialogRef<ModalEdit>,
    @Inject(MAT_DIALOG_DATA)  public data:{ itemId: number },
    private fb: FormBuilder
  ) {

this.formEdit = this.fb.group({
      name: ['', Validators.required],
      salary: [null, Validators.required],
      companyValuation: [null, Validators.required]
    });
  }

  ngOnInit(): void {
     const idClient = this.data?.itemId;
    if (!idClient) {
      console.error('ID do cliente não foi fornecido!');
      return;
    }

    this.clientService.listClients( idClient).subscribe({
      next: (client) => {
        this.formEdit.patchValue({
          name: client.name,
          salary: client.salary,
          companyValuation: client.companyValuation
        });
      },
      error: (err) => console.error('Erro ao carregar cliente:', err)
    });
  }

  save() {
    if (this.formEdit.invalid) return;

    const dadosEditados: ClientUpdate = this.formEdit.value;

    this.clientService.patchClient(this.data.itemId, dadosEditados).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error('Erro ao atualizar cliente:', err);
      }
    });
  }

  close() {
    this.dialogRef.close();
  }
}

