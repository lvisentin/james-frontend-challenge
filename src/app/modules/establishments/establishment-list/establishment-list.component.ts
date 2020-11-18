import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Establishment } from 'src/app/models/establishment.model';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { takeUntil } from 'rxjs/operators';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'james-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.scss']
})
export class EstablishmentListComponent implements OnInit {
  public error: boolean = true;
  public loading: boolean;
  public establishments: Array<Establishment>;
  private destroy: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private establishmentService: EstablishmentService,
    private dbService: NgxIndexedDBService
  ) { }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  ngOnInit(): void {
    this.loading = true;
    this.establishmentService
      .getEstablishments()
      .pipe(takeUntil(this.destroy))
      .subscribe((establishmentResponse) => {
        this.loading = false;
        establishmentResponse.map((establishment) => {
          this.insertEstablishment(establishment);
        })
        this.getDBEstablishments();
      }, (err) => {
        console.log('ocorreu um erro');
      })
  }

  insertEstablishment(establishment) {
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
      .subscribe((result) => {
        // console.log('result', result)
      }, (err) => {
        console.log('err', err)
      })
  }

  getDBEstablishments(){
    this.dbService
      .getAll('establishments')
      .subscribe((establishments) => {
        console.log('establishments', establishments)
        this.establishments = establishments;
      })  
  }

}
