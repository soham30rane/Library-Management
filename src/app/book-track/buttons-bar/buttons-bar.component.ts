import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-bar',
  template: `
  <div class="option-buttons-container">
      <button class="book-filter-btn">
        <img [src]="getFilterIconPath()" alt="filter icon">
      </button>
      <button class="book-filter-btn">
        <img [src]="getSortIconPath()" alt="sort by">
      </button>
      <button class="book-scan-btn">
        <img [src]="getScanIconPath()" alt="qr icon">
      </button>
  </div>
  `,
  styleUrls: ['./buttons-bar.component.css']
})
export class ButtonsBarComponent {
  imagesRelPath:string;

  constructor(){
    this.imagesRelPath = "../../../assets/images/";
  }

  getSortIconPath(){
    return this.imagesRelPath + "icons8-sort-by-32.png"; 
  }

  getScanIconPath(){
    return this.imagesRelPath + "icons8-qr-32.png"; 
  }

  getFilterIconPath(){
    return this.imagesRelPath + "icons8-filter-32.png"; 
  }

}
