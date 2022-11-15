import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Home/welcome/welcome.component';
import { CharactersComponent } from './Characters/characters.component';
import { PlanetsComponent } from './Planets/planets.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './Characters/character-details.component';
import { CharactersModule } from './Characters/characters.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CharactersComponent,
    PlanetsComponent,
    CharacterDetailsComponent
  ],
  imports: [
    FormsModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'planets', component: PlanetsComponent},
      {path: '', redirectTo: 'planets', pathMatch: 'full'},
      {path: '**', redirectTo:'planets',pathMatch: 'full'}
      
    ]),
    CharactersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
