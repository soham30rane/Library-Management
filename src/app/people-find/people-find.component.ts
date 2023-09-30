import { Component } from '@angular/core';
import { peopleData } from './dummy-data';

@Component({
  selector: 'app-people-find',
  templateUrl: './people-find.component.html',
  styleUrls: ['./people-find.component.css']
})
export class PeopleFindComponent {
  people;

  constructor(){
    this.people = peopleData;
  }
}
