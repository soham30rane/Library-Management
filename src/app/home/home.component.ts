import { Component } from '@angular/core';
import { featuresData } from './dummy-data';
import { NavTabs, currentTab } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features;

  constructor(){
    this.features = featuresData;
    currentTab.value = NavTabs.Home;
  }

}
