import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'james-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input('show') show;

  constructor() { }

  ngOnInit(): void {
    console.log(this.show)
  }

}
