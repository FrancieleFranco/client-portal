import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal-delete',
  imports: [MatDialogModule, MatButtonModule,  MatIconModule,],
  templateUrl: './modal-delete.html',
  styleUrl: './modal-delete.scss'
})
export class ModalDelete {
 constructor(public dialogRef: MatDialogRef<ModalDelete>) {}

 close(){
  this.dialogRef.close();
 }
}
