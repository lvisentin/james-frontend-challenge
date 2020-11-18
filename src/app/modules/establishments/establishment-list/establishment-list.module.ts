import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentListComponent } from './establishment-list.component';
import { EstablishmentCardComponent } from 'src/app/shared/establishment-card/establishment-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxLoadingModule } from 'ngx-loading';
import { EstablishmentPageComponent } from '../establishment-page/establishment-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EstablishmentListComponent,
    EstablishmentCardComponent,
    EstablishmentPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EstablishmentListModule { }
