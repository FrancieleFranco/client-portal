import { EventListenerObject } from 'rxjs/internal/observable/fromEvent';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, Button],
})
export class WelcomeComponent implements OnInit {
  ngOnInit() {}

  formEnter: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formEnter = this.fb.group({
      name: [''],
    });
  }

  enterClient() {
    const name = this.formEnter.get('name')?.value;
    this.router.navigate(['/list-component']);
    console.log(name, 'ola');
  }
}
