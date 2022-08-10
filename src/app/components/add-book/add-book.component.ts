import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;
  constructor(private mainService: MainService) {
    this.addBookForm = new FormGroup({
      "title": new FormControl("", Validators.required),
      "author": new FormControl("", Validators.required),
      "cover": new FormControl("", Validators.required),
      "genre": new FormControl("", Validators.required),
      "content": new FormControl()
    });
  }

  private coverFile: File | null = null;
  private uploadedFile: boolean = false;
  ngOnInit(): void {
  }

  addBook(): void {
    if(!this.uploadedFile){
      this.mainService.addBook(this.addBookForm.value);
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(this.coverFile!);
    reader.onload = () => {
      
      //console.log(reader.result);
      this.mainService.addBook({...this.addBookForm.value, cover: reader.result});
    };
  }
  clearForm(): void {
    this.addBookForm.reset();
    this.uploadedFile = false;
  }
  fileUpload( target: EventTarget | null): void {
    if (target === null) return;
    let test = (target as HTMLInputElement);
    //console.dir(test);
    this.coverFile = test.files == null ? null : test.files[0];
    this.uploadedFile = true;
  }
}
