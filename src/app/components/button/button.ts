import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   @Input() labelButton: string = ''
   @Input() disabled: boolean = false
}
