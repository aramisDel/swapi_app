import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { WelcomeComponent } from '../Home/welcome/welcome.component';
import { CharacterDetailsComponent } from './character-details.component';
import { CharacterDetailsGuard } from './character-details.guard';
import { PlanetsComponent } from '../Planets/planets.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path: 'characters', component: CharactersComponent},
      {path: 'characters/:id', 
      canActivate: [CharacterDetailsGuard],
       component: CharacterDetailsComponent},
      {path: 'planets', component: PlanetsComponent},
      {path: '', redirectTo: 'planets', pathMatch: 'full'},
      {path: '**', redirectTo:'planets',pathMatch: 'full'}

    ])
  ]
})
export class CharactersModule { }
