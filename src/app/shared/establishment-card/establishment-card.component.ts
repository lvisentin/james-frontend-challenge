import { Component, Input, OnInit } from '@angular/core';
import { Establishment } from 'src/app/models/establishment.model';

@Component({
  selector: 'app-establishment-card',
  templateUrl: './establishment-card.component.html',
  styleUrls: ['./establishment-card.component.scss']
})
export class EstablishmentCardComponent implements OnInit {

  @Input('establishment') establishment: Establishment;

  constructor() { }

  ngOnInit(): void {
    console.log('establishment', this.establishment)
  }

}
