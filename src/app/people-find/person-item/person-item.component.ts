import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent {
  imagesRelPath:string;
  @Input() personImgName:string;
  @Input() personName:string;
  @Input() personPhone:string;
  @Input() personEmail:string;
  @Input() totalBooks:number;
  @Input() booksOverdue:number;
  @Input() dueThisWeek:number;
  @Input() personId:number;

  constructor(){
    this.imagesRelPath = "../../../assets/images/";
    this.personImgName = "dummy-user-profile-pic.webp";
    this.personName = "Dummy name";
    this.personPhone = "9999999999";
    this.personEmail = "abcde@example.com";
    this.totalBooks = 4;
    this.booksOverdue = 1;
    this.dueThisWeek = 2;
    this.personId = 14525;
  }

  getPersonImgPath(){
    return this.imagesRelPath + "people/" +this. personImgName;
  }

  getEditIconPath(){
    return this.imagesRelPath + "icons8-edit-32.png";
  }

  getPhoneIconPath(){
    return this.imagesRelPath + "icons8-phone-number-32.png";

  }

  getEmailIconPath(){
    return this.imagesRelPath + "icons8-email-32.png";
  }

  getRedDotIconPath(){
    return this.imagesRelPath + "icons8-red-dot-16.png";
  }

  getGreenDotIconPath(){
    return this.imagesRelPath + "icons8-green-dot-16.png";
  }

  getBlueDotIconPath(){
    return this.imagesRelPath + "icons8-blue-circle-16.png";
  }

  getIssueIconPath(){
    return this.imagesRelPath + "icons8-give-book-32.png";
  }

}
