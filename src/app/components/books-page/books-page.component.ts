import { Component, OnInit } from '@angular/core';
import { Book, ShortBookInfo } from 'src/app/models/book';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  constructor(private mainService: MainService) { }

  books: ShortBookInfo[]=[];
  ngOnInit(): void {
    this.mainService.getBooks();
    this.mainService.OBooks.subscribe( b => this.books = b);
  }
  getAllBooks():void{
    this.mainService.getBooks("author");
  }
  getRecomedations():void{
    this.mainService.getRecommeded("horror");
  }
}
