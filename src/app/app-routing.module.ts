import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eliet4Component } from './eliet4/eliet4.component';
import { GymLeadersComponent } from './gym-leaders/gym-leaders.component';
import { GymsComponent } from './gyms/gyms.component';
import { PalletTownComponent } from './Pallet-town/pallet-town.component';
import { PlacesInfoComponent } from './places-info/places-info.component';
import { PlacesComponent } from './places/places.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { SpecialEncountersComponent } from './special-encounters/special-encounters.component';

const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'Towns-cities', component: PlacesComponent },
  { path: 'special-encounters', component: SpecialEncountersComponent },
  { path: 'gyms', component: GymsComponent },
  { path: 'eliet4', component: Eliet4Component },
  { path: 'pallet-town', component: PalletTownComponent },
  { path: 'places-info', component: PlacesInfoComponent },
  { path: 'gym-leaders', component: GymLeadersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
