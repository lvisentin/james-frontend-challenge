import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentListComponent } from './establishment-list.component';
import { EstablishmentCardComponent } from 'src/app/shared/establishment-card/establishment-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EstablishmentListComponent,
    EstablishmentCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class EstablishmentListModule { }
