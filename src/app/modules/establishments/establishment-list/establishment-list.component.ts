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
  public error: boolean = false;
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
    this.getDBEstablishments();
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
      .pipe(takeUntil(this.destroy))
      .subscribe((result) => {
      }, (err) => {
        this.error = true;
      })
  }

  getDBEstablishments(){
    this.loading = true;
    this.dbService
      .getAll('establishments')
      .pipe(takeUntil(this.destroy))
      .subscribe((establishments) => {
        this.establishments = establishments;
        this.loading = false;
      }, (err) => {
        this.error = true;
      })  
  }

  getDBEstablishment(id){
    this.dbService
      .getByKey('establishments', id)
      .pipe(takeUntil(this.destroy))
      .subscribe((result) => {
        this.establishments = result;
      })
  }

}
