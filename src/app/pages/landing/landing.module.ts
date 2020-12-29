import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingHeroComponent } from './landing-hero/landing-hero.component';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { LandingComponent } from './landing.component';
import { LandingGallaryComponent } from './landing-gallary/landing-gallary.component';
import { EnjoyGallaryComponent } from './enjoy-gallary/enjoy-gallary.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  declarations: [LandingComponent, LandingHeroComponent, LandingMainComponent, LandingGallaryComponent, EnjoyGallaryComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NgbNavModule,
    SharedModule,
    NgxGalleryModule
  ]
})
export class LandingModule { }
