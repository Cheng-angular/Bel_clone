import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FitnessComponent } from './fitness.component';

const routes: Routes = [
  { path: 'fitness-center', component: FitnessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitnessRoutingModule { }
