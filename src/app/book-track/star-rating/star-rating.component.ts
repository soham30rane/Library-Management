import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
  <span *ngFor="let i of numSequence(value)" class="fa fa-star checked" ></span>
  <span *ngFor="let i of numSequence(5-value)" class="fa fa-star " ></span>
  `,
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() value:number;

  constructor(){
    this.value = 0;
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
