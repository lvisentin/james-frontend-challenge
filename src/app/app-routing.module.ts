import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishmentListComponent } from './modules/establishments/establishment-list/establishment-list.component';
import { EstablishmentPageComponent } from './modules/establishments/establishment-page/establishment-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: EstablishmentListComponent
  },
  {
    path: 'establishment/:id',
    component: EstablishmentPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
