import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingHereComponent } from './getting-here.component';

const routes: Routes = [
  { path: '', component: GettingHereComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GettingHereRoutingModule { }
