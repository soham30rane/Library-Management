import { Component,Input } from '@angular/core';

enum NavTabs {
  Home = "Home",
  Books = "Books",
  People = "People",
  Issues = "Issues"
}
var currentTab = {
  value:NavTabs.Home
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarLogoPath : string ;
  navbarSearchIconPath : string;
  @Input() navTitle: string;

  eNavTabs = NavTabs;
  workingTab = currentTab;  

  constructor(){
    this.navbarLogoPath = '../../assets/images/icons8-books-32.png';
    this.navbarSearchIconPath ='../../assets/images/icons8-search-16.png';
    this.navTitle = "Title";
  }

}

export { NavTabs,currentTab };