import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DSharedSaunaComponent } from './d-shared-sauna.component';

const routes: Routes = [
  { path: 'dome-shared-sauna', component: DSharedSaunaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DSharedSaunaRoutingModule { }
