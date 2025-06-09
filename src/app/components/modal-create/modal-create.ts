import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-modal-create',
  imports: [MatDialogModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,],
  templateUrl: './modal-create.html',
  styleUrl: './modal-create.scss'
})
export class ModalCreate {
   formCreateClient: FormGroup;


constructor( private fb: FormBuilder,
    private clientService: ClientService,
  public dialogRef: MatDialogRef<ModalCreate>) {

    this.formCreateClient = this.fb.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      companyValuation: ['', Validators.required]
    });}

    save() {
    if (this.formCreateClient.invalid) return;
console.log('Função save foi chamada')
    const data = this.formCreateClient.value;

if (this.formCreateClient.invalid) {
    console.warn('Form inválido:', this.formCreateClient.value);
    return;
  }

   const body = {
    name: this.formCreateClient.value.name,
    salary: Number(this.formCreateClient.value.salary),
    companyValuation: Number(this.formCreateClient.value.companyValuation)
  };
  console.log('Dados enviados:', body);


    this.clientService.createClient(body).subscribe({
     next: (res) => {
      console.log('Cliente criado com sucesso:', res);
      this.dialogRef.close(true);
    },
      error: (err) => {
        console.error('Erro ao criar usuário:', err);
      }
    });
  }

  close() {
    this.dialogRef.close();
  }
}



