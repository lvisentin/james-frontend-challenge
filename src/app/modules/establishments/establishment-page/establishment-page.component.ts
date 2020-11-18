import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Establishment } from 'src/app/models/establishment.model';

@Component({
  selector: 'app-establishment-page',
  templateUrl: './establishment-page.component.html',
  styleUrls: ['./establishment-page.component.scss']
})
export class EstablishmentPageComponent implements OnInit {
  public error: boolean = false;
  public loading: boolean = false;
  public establishment: Establishment = JSON.parse(this.activatedRoute.snapshot.queryParamMap.get('establishment'));
  public establishmentForm = this.formBuilder.group({
    name: [this.establishment.name, Validators.required],
    city: [this.establishment.address, Validators.required],
    address: [this.establishment.address, Validators.required],
    bank: [this.establishment.bank, Validators.required],
    account_type: [this.establishment.account_type, Validators.required],
    document: [this.establishment.document, Validators.required],
    agency: [this.establishment.agency, Validators.required],
    account: [this.establishment.account, Validators.required],
    auto_withdraw: [this.establishment.auto_withdraw, Validators.required],
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dbService: NgxIndexedDBService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('establishment', this.establishment)
  }

  submitForm() {
    this.loading = true;
    const objEstablishment = {
      id:    this.establishment.id,
      index:    this.establishment.index,
      guid:    this.establishment.guid,
      picture:    this.establishment.picture,
      name:    this.establishmentForm.controls.name.value,
      email:    this.establishment.email,
      phone:    this.establishment.phone,
      address:    this.establishmentForm.controls.address.value,
      registered:    this.establishment.registered,
      latitude:    this.establishment.latitude,
      longitude:    this.establishment.longitude,
      bank:    this.establishmentForm.controls.bank.value,
      account_type:    this.establishmentForm.controls.account_type.value,
      document:    this.establishmentForm.controls.document.value,
      agency:    this.establishmentForm.controls.agency.value,
      account:    this.establishmentForm.controls.account.value,
      auto_withdraw:    this.establishmentForm.controls.auto_withdraw.value,
    };

    this.updateEstablishment(objEstablishment);

  }

  updateEstablishment(objEstablishment) {
    console.log(objEstablishment)
    this.dbService
      .update('establishments', 
        objEstablishment
      )
      .subscribe((result) => {
        this.loading = false;
        console.log('result', result)
        this.router.navigate(['/home']);
      }, (err) => {
        this.loading = false;
        this.error = true;
      })
  }

}
