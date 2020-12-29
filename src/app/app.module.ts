import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactModule } from './pages/contact/contact.module';
import { GettingHereModule } from './pages/getting-here/getting-here.module';
import { InfluencersModule } from './pages/influencers/influencers.module';
import { LandingModule } from './pages/landing/landing.module';
import { ResortRentalModule } from './pages/resort-rental/resort-rental.module';
import { DSharedSaunaModule } from './pages/d-shared-sauna/d-shared-sauna.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FitnessModule } from './pages/fitness/fitness.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactModule,
    GettingHereModule,
    InfluencersModule,
    LandingModule,
    ResortRentalModule,
    DSharedSaunaModule,
    SharedModule,
    NgbModule,
    FitnessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
