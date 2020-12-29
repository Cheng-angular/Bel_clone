import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResortRentalComponent } from './resort-rental.component';
const routes: Routes = [
  { path: '', component: ResortRentalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResortRentalRoutingModule { }
