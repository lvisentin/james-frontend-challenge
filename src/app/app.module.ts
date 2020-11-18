import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstablishmentListModule } from './modules/establishments/establishment-list/establishment-list.module';
import { NgxLoadingModule } from 'ngx-loading';
import { SharedModule } from './shared/shared.module';
import { DBConfig, NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db';
import { EstablishmentService } from './services/establishment.service';
import { InitService } from './services/init.service';

const dbConfig: DBConfig  = {
  name: 'establishmentsDb',
  version: 1,
  objectStoresMeta: [{
    store: 'establishments',
    storeConfig: { keyPath: 'id', autoIncrement: false },
    storeSchema: [
      { name:'index', keypath: 'index', options: {unique: false}},
      { name:'guid', keypath: 'guid', options: {unique: false}},
      { name:'picture', keypath: 'picture', options: {unique: false}},
      { name:'name', keypath: 'name', options: {unique: false}},
      { name:'email', keypath: 'email', options: {unique: false}},
      { name:'phone', keypath: 'phone', options: {unique: false}},
      { name:'address', keypath: 'address', options: {unique: false}},
      { name:'registered', keypath: 'registered', options: {unique: false}},
      { name:'latitude', keypath: 'latitude', options: {unique: false}},
      { name:'longitude', keypath: 'longitude', options: {unique: false}},
      {name: 'bank', keypath:'bank', options: {unique: false}},
      {name: 'account_type', keypath:'account_type', options: {unique: false}},
      {name: 'document', keypath:'document', options: {unique: false}},
      {name: 'agency', keypath:'agency', options: {unique: false}},
      {name: 'account', keypath:'account', options: {unique: false}},
      {name: 'auto_withdraw', keypath:'auto_withdraw', options: {unique: false}},
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstablishmentListModule,
    SharedModule,
    NgxLoadingModule.forRoot({}),
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [{provide:APP_INITIALIZER, useFactory: initializeDb, deps: [InitService], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initializeDb(initService: InitService) {
  return () => initService.init();
}