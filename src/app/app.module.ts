import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GameComponent } from './game/game.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { FormsModule } from '@angular/forms';
import { StartingGameComponent } from './starting-game/starting-game.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    GameComponent,
    GamesListComponent,
    GameDetailsComponent,
    StartingGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
