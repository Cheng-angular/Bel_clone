import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { DSharedSaunaRoutingModule } from './d-shared-sauna-routing.module';
import { SaunaHeroComponent } from './sauna-hero/sauna-hero.component';
import { SaunaMainComponent } from './sauna-main/sauna-main.component';
import { DSharedSaunaComponent } from './d-shared-sauna.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DSharedSaunaComponent,
    SaunaHeroComponent,
    SaunaMainComponent
  ],
  imports: [
    CommonModule,
    DSharedSaunaRoutingModule,
    NgxGalleryModule,
    SharedModule
  ]
})
export class DSharedSaunaModule { }
