import { Component } from '@angular/core';
import { booksData } from './dummy-data';

@Component({
  selector: 'app-book-track',
  templateUrl: './book-track.component.html',
  styleUrls: ['./book-track.component.css']
})
export class BookTrackComponent {
  books;

  constructor(){
    this.books = booksData;
  }

}
