import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Establishment } from 'src/app/models/establishment.model';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'james-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.scss']
})
export class EstablishmentListComponent implements OnInit {

  private destroy: Subject<boolean> = new Subject<boolean>();
  public establishments: Array<Establishment>;

  constructor(
    private establishmentService: EstablishmentService
  ) { }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  ngOnInit(): void {

    this.establishmentService
      .getEstablishments()
      .pipe(takeUntil(this.destroy))
      .subscribe((establishmentResponse) => {
        this.establishments = establishmentResponse;
      }, (err) => {
        console.log('ocorreu um erro');
      })
  }

}
