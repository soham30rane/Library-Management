import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTrackComponent } from './book-track/book-track.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'book-track' , component:BookTrackComponent },
  { path: '' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
