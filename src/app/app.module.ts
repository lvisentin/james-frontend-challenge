import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstablishmentListModule } from './modules/establishments/establishment-list/establishment-list.module';
import { NgxLoadingModule } from 'ngx-loading';
import { SharedModule } from './shared/shared.module';
import { DBConfig, NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db';

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
  providers: [NgxIndexedDBService, {provide:APP_INITIALIZER, useFactory: clearDb, deps: [NgxIndexedDBService], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function clearDb(config: NgxIndexedDBService) {
  return () => config.clear('establishments');
}