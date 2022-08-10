import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, CreateBook, ShortBookInfo, UpdateBook } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  /*винести в конфіг */
  private apiUrl = "https://localhost:5000/api/books/";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  public getBooks(order?: string): Observable<ShortBookInfo[]> {
    let parametr = `?order=${order}`;
    if(order ==undefined)
    {
      parametr = "";
    }
    return this.http.get<ShortBookInfo[]>(this.apiUrl + parametr);
  }
  public getRecommended(genre?: string): Observable<ShortBookInfo[]> {
    let parametr = `?genre=${genre}`;
    return this.http.get<ShortBookInfo[]>(this.apiUrl + parametr);
  }
  public getBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + `${id}`);
  }

  public addBook(book: CreateBook): Observable<Book> {
    //console.log(book);
    return this.http.post<Book>(this.apiUrl + "save", book, this.httpOptions);
  }
  public updateBook(book: UpdateBook): Observable<Book> {
    //console.log(book);
    return this.http.post<Book>(this.apiUrl + "save", book, this.httpOptions);
  }
  
  public deleteBook(id: number): void {
    /* видалення книжки */
  }
}
