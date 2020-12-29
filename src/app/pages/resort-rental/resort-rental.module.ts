import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { ResortRentalRoutingModule } from './resort-rental-routing.module';
import { ResortRentalComponent } from './resort-rental.component';
import { ResortHeroComponent } from './resort-hero/resort-hero.component';
import { ResortMainComponent } from './resort-main/resort-main.component';


@NgModule({
  declarations: [
    ResortRentalComponent,
    ResortHeroComponent,
    ResortMainComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    ResortRentalRoutingModule,
    NgxGalleryModule
  ]
})
export class ResortRentalModule { }
