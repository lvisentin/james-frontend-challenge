import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentListComponent } from './establishment-list.component';
import { EstablishmentCardComponent } from 'src/app/shared/establishment-card/establishment-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    EstablishmentListComponent,
    EstablishmentCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    NgxLoadingModule.forRoot({}),

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EstablishmentListModule { }
