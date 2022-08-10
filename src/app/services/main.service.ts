import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Book, CreateBook, ShortBookInfo, UpdateBook } from '../models/book';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpService) { }

  /*винести в конфіг */
  private apiUrl = "https://localhost:5000/api/books/";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  public OBooks: BehaviorSubject<ShortBookInfo[]> = new BehaviorSubject<ShortBookInfo[]>([]);

  public getBooks(order?: string): any {
    this.http.getBooks(order).subscribe(books => this.OBooks.next(books));
  }
  public getRecommeded(genre?: string): any {
    this.http.getRecommended(genre).subscribe(books => this.OBooks.next(books));
  }
  public getBook(id: number): Observable<Book> {
    return this.http.getBook(id);
  }

  public addBook(book: CreateBook): void {
    this.http.addBook(book).subscribe(data => {
      let newBook: ShortBookInfo = {
        ...book,
        id: data.id,
        rating: 0,
        reviewsNumber: 0
      };
      this.OBooks.next([...this.OBooks.value, newBook]);
    });

  }
  public updateBook(book: UpdateBook): void {
    this.http.updateBook(book).subscribe(data => {
      let updatedBookIndex = this.OBooks.value.findIndex(b => b.id === book.id);
      this.OBooks.value[updatedBookIndex] = {...this.OBooks.value[updatedBookIndex], ...book};
      this.OBooks.next(this.OBooks.value);
    });
  }
  public deleteBook(id: number): void {
    /* видалення книжки */
  }
}
