import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { HeaderComponent } from './header/header.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    LoadingComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot({}),
  ],
  exports: [
    HeaderComponent,
    LoadingComponent,
    NgxMaskModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
