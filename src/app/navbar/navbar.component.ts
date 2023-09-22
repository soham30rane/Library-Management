import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarLogoPath : string ;
  navbarSearchIconPath : string;
  @Input() navTitle: string;

  constructor(){
    this.navbarLogoPath = '../../assets/images/icons8-books-32.png';
    this.navbarSearchIconPath ='../../assets/images/icons8-search-16.png';
    this.navTitle = "Title";
  }
}
