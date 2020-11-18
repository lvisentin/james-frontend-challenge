import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { HeaderComponent } from './header/header.component';
import { NgxMaskModule } from 'ngx-mask';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    LoadingComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot({}),
  ],
  exports: [
    HeaderComponent,
    LoadingComponent,
    ErrorComponent,
    NgxMaskModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
