import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/book';
import { MainService } from 'src/app/services/main.service';
//import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  /* тут треба прийняти номер а потім через сервіс витягувати дані */
  constructor(public dialogRef: MatDialogRef<BookInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public bookId: number,
    private mainService: MainService) { 
  }

  book?: Book;
  
  ngOnInit(): void {
    this.mainService.getBook(this.bookId).subscribe(b => this.book = b);
  }
  close(): void{
    this.dialogRef.close();
  }
}
