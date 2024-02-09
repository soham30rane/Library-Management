import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-home-item',
  template: `
    <section class="home-item">
        <div class="home-item-img">
            <img [src]="getFeatureImagePath()" alt="book track" >
        </div>
        <h3> {{featureName}} </h3>
        <p> {{featureDescription}} </p>
        <a href="#"><img [src]="openLinkIconPath" alt="icon" class="home-feature-link-icon" ></a>
    </section>
  `,
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent {
  @Input() featureName:string;
  @Input() featureDescription:string;
  @Input() featureImageFilename:string;
  openLinkIconPath:string;
  featureImagePath:string;

  constructor(){
    this.featureName = "Feature Name";
    this.featureDescription = "Feature Description";
    this.featureImageFilename = "dummy-image-square.jpg"
    this.featureImagePath = `../../assets/images/${this.featureImageFilename}`;
    this.openLinkIconPath = "../../assets/images/icons8-open-link-32.png"
  }

  getFeatureImagePath(){
    return `../../assets/images/${this.featureImageFilename}`;
  }
}
