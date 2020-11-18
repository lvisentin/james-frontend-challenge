import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { EstablishmentService } from './establishment.service';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  constructor(
    private establishmentService: EstablishmentService,
    private dbService: NgxIndexedDBService
  ) {}

  init() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.dbService.clear('establishments');

        this.establishmentService
          .getEstablishments()
          .subscribe((establishmentResponse) => {
            establishmentResponse.map((establishment) => {
              this.dbService
                .add('establishments', {
                  id: establishment.id,
                  index: establishment.index,
                  guid: establishment.guid,
                  picture: establishment.picture,
                  name: establishment.name,
                  email: establishment.email,
                  phone: establishment.phone,
                  address: establishment.address,
                  registered: establishment.registered,
                  latitude: establishment.latitude,
                  longitude: establishment.longitude,
                })
                .subscribe(
                  (result) => {
                    resolve(result);
                  },
                );
            });
          });
      }, 4000);
    });
  }
}
