import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'james-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input('show') show;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDialog() {
    this.show = !this.show;
  }
}
