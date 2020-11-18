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
    console.log('error show', this.show);
  }

  toggleDialog() {
    this.show = !this.show;
  }
}
