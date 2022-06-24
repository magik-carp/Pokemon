import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PlacesComponent } from './places/places.component';
import { SpecialEncountersComponent } from './special-encounters/special-encounters.component';
import { GymsComponent } from './gyms/gyms.component';
import { Eliet4Component } from './eliet4/eliet4.component';
import { PalletTownComponent } from './Pallet-town/pallet-town.component';
import { PlacesInfoComponent } from './places-info/places-info.component';
import { DataService } from './data.service';
import { GymLeadersComponent } from './gym-leaders/gym-leaders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    PokemonComponent,
    PlacesComponent,
    SpecialEncountersComponent,
    GymsComponent,
    Eliet4Component,
    PalletTownComponent,
    PlacesInfoComponent,
    GymLeadersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
