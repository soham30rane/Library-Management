import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTrackComponent } from './book-track/book-track.component';
import { HomeComponent } from './home/home.component';
import { PeopleFindComponent } from './people-find/people-find.component';

const routes: Routes = [
  { path: 'book-track' , component:BookTrackComponent },
  { path: 'find-people' , component:PeopleFindComponent },
  { path: '' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
