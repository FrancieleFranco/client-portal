import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule,CommonModule,   RouterModule, MatIconModule, MatSidenavModule,],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
    @ViewChild('sidenav') sidenav!: MatSidenav;
 toggleSidenav() {
    this.sidenav.toggle();
  }

}
