import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { InfluencersComponent } from './influencers.component';
const routes: Routes = [
  { path: '', component: InfluencersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluencersRoutingModule { }
