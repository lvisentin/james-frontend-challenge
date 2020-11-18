import { Component, Input, OnInit } from '@angular/core';
import { Establishment } from 'src/app/models/establishment.model';

@Component({
  selector: 'james-establishment-card',
  templateUrl: './establishment-card.component.html',
  styleUrls: ['./establishment-card.component.scss']
})
export class EstablishmentCardComponent implements OnInit {

  @Input('establishment') establishment: Establishment;

  constructor() { }

  ngOnInit(): void {
  }

}
