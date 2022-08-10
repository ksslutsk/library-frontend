import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { BookListItemComponent } from './components/book-list-item/book-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BooksPageComponent,
    BookListItemComponent,
    BookInfoComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
