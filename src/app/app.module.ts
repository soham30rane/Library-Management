import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeItemComponent } from './home/home-item/home-item.component';
import { BookTrackComponent } from './book-track/book-track.component';
import { BookItemComponent } from './book-track/book-item/book-item.component';
import { StarRatingComponent } from './book-track/star-rating/star-rating.component';
import { ButtonsBarComponent } from './book-track/buttons-bar/buttons-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeItemComponent,
    BookTrackComponent,
    BookItemComponent,
    StarRatingComponent,
    ButtonsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
