import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Establishment } from 'src/app/models/establishment.model';

@Component({
  selector: 'app-establishment-page',
  templateUrl: './establishment-page.component.html',
  styleUrls: ['./establishment-page.component.scss']
})
export class EstablishmentPageComponent implements OnInit {

  public establishment: Establishment = JSON.parse(this.activatedRoute.snapshot.queryParamMap.get('establishment'));
  public establishmentForm = this.formBuilder.group({
    name: [this.establishment.name, Validators.required],
    city: [this.establishment.address, Validators.required],
    address: [this.establishment.address, Validators.required],
    bank: ['', Validators.required],
    account_type: ['', Validators.required],
    document: ['', Validators.required],
    agency: ['', Validators.required],
    agency_digit: ['', Validators.required],
    account: ['', Validators.required],
    account_digit: ['', Validators.required],
    auto_withdraw: ['', Validators.required],
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log('establishment', this.establishment)
  }

}
