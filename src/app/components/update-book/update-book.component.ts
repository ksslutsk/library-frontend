import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/book';
import { MainService } from 'src/app/services/main.service';
import { BookInfoComponent } from '../book-info/book-info.component';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  updateBookForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<BookInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book,
    private mainService: MainService) {

    this.updateBookForm = new FormGroup({
      "title": new FormControl(book.title, Validators.required),
      "author": new FormControl(book.author, Validators.required),
      "cover": new FormControl("", Validators.required),
      "genre": new FormControl(book.genre, Validators.required),
      "content": new FormControl(book.content)
    });
  }

  private coverFile: File | null = null;
  private fileUloaded: boolean = false;
  ngOnInit(): void {
  }
  updateBook():void{
    if (!this.fileUloaded){

      this.mainService.updateBook({...this.book, ...this.updateBookForm.value, cover: this.book.cover});
      this.dialogRef.close(); 
      return;
    }
    
    let reader = new FileReader();
    reader.readAsDataURL(this.coverFile!);
    reader.onload = () => {
      this.mainService.updateBook({...this.book, ...this.updateBookForm.value, cover: reader.result});
    };

    this.dialogRef.close();
  }
  close():void{
    this.dialogRef.close();
  }
  fileUpload( target: EventTarget | null): void {
    if (target === null) return;
    let test = (target as HTMLInputElement);
    console.dir(test);
    this.coverFile = test.files == null ? null : test.files[0];
    this.fileUloaded = true;
  }
}
