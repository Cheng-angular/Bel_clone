import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessRoutingModule } from './fitness-routing.module';
import { FitnessHeroComponent } from './fitness-hero/fitness-hero.component';
import { FitnessMainComponent } from './fitness-main/fitness-main.component';
import { FitnessComponent } from '../fitness/fitness.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FitnessAmenitiesComponent } from './fitness-amenities/fitness-amenities.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FitnessComponent,
    FitnessHeroComponent,
    FitnessMainComponent,
    FitnessAmenitiesComponent
  ],
  imports: [
    CommonModule,
    FitnessRoutingModule,
    NgxGalleryModule,
    SharedModule
  ]
})
export class FitnessModule { }
