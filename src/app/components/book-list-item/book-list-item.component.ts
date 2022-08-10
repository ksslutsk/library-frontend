import { Component, Input, OnInit } from '@angular/core';
import { Book, ShortBookInfo } from 'src/app/models/book';
import { MatDialog } from '@angular/material/dialog'
import { BookInfoComponent } from '../book-info/book-info.component';
import { UpdateBookComponent } from '../update-book/update-book.component';
@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {

  @Input() book?: ShortBookInfo;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showView(): void {
    this.dialog.open(BookInfoComponent,
      { data: this.book?.id }
    );
  }
  showUpdateWindow(): void {
    this.dialog.open(UpdateBookComponent,
      {data: this.book});
  }
}
