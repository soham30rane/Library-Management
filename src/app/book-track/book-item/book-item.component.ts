import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() bookID:number;
  @Input() bookImgFileName:string;
  @Input() bookTitle:string;
  @Input() bookAuthor:string;
  @Input() publishYear:number;
  @Input() bookStatus:boolean;
  @Input() bookRating:number;
  imgaesRelPath:string;

  constructor(){
    this.bookID =  0;
    this.bookImgFileName = "dummy-image-square.jpg";
    this.bookTitle = "Title";
    this.bookAuthor = "Author";
    this.publishYear = 2000;
    this.bookStatus = false;
    this.bookRating = 5 ;
    this.imgaesRelPath = "../../../assets/images/";
  }

  getStatusText(){
    return (this.bookStatus?"Available":"Unavailable")
  }

  getStatusImgPath(){
    let imgPath:string = (
      this.bookStatus?
      this.imgaesRelPath + "icons8-green-dot-16.png":
      this.imgaesRelPath + "icons8-red-dot-16.png"
    );
    return imgPath;
  }

  getBookImgPath(){
    return this.imgaesRelPath + "books/" + this.bookImgFileName;
  }

  getEditIconPath() {
    return this.imgaesRelPath + "icons8-edit-32.png"; 
  }

  getForumIconPath() {
    return this.imgaesRelPath + "icons8-forum-32.png";
  }

  getGiveBookIconPath(){
    return this.imgaesRelPath + "icons8-give-book-32.png";
  }

  getDeleteIconPath(){
    return this.imgaesRelPath + "icons8-delete-32.png";
  }

}
