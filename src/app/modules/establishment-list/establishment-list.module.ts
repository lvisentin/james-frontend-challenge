import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentListComponent } from './establishment-list.component';
import { EstablishmentCardComponent } from 'src/app/shared/establishment-card/establishment-card.component';

@NgModule({
  declarations: [
    EstablishmentListComponent,
    EstablishmentCardComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class EstablishmentListModule { }
