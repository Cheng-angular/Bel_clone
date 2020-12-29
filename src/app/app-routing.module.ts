import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule), pathMatch: 'full' },
  { path: 'influencers', loadChildren: () => import('./pages/influencers/influencers.module').then(m => m.InfluencersModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
  { path: 'getting-here', loadChildren: () => import('./pages/getting-here/getting-here.module').then(m => m.GettingHereModule) },
  { path: 'resort-rentals', loadChildren: () => import('./pages/resort-rental/resort-rental.module').then(m => m.ResortRentalModule) },
  { path: 'for-2-people', loadChildren: () => import('./pages/d-shared-sauna/d-shared-sauna.module').then(m => m.DSharedSaunaModule) },
  { path: 'club-house', loadChildren: () => import('./pages/fitness/fitness.module').then(m => m.FitnessModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
