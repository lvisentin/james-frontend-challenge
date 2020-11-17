import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Establishment } from '../models/establishment.model';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getEstablishments() {
    return this.httpClient
          .get<Array<Establishment>>('https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments');
  }
}
