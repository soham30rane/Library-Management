import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    {
      name:'Track Book',
      description:'Search or track any book',
      imgname:'track-book.jpg'
    },
    {
      name:'Scan QR',
      description:`Scan Qr code on the book to view it.`,
      imgname:'sacn-qr.jpg'
    },
    {
      name:'Issue Book',
      description:'Issue the book to any reader',
      imgname:'issue-book.jpg'
    },
    {
      name:'New Book',
      description:'Create a new book',
      imgname:'new-book.png'
    },
    {
      name:'New Person',
      description:'Register a new person',
      imgname:'new-person.png'
    },
    {
      name:'Find People',
      description:'Search a registered person',
      imgname:'find-people.jpg'
    },
  ]

}
