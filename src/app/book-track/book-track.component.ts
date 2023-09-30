import { Component } from '@angular/core';
import { booksData } from './dummy-data';
import { NavTabs,currentTab } from '../navbar/navbar.component';

@Component({
  selector: 'app-book-track',
  templateUrl: './book-track.component.html',
  styleUrls: ['./book-track.component.css']
})
export class BookTrackComponent {
  books;

  constructor(){
    this.books = booksData;
    currentTab.value = NavTabs.Books;
  }

}
