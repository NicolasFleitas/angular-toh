import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

// importar el FormsModule
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- NgModel viene de ahí

// cada componente debe declararse exactamente en un NgModule
// al generar comp. con la CLI angular, esta declara el comp. de forma automatica

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // <-- agregar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
