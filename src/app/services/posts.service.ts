import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    //console.log(http);
  }

  getPosts() {
    //console.log(this.url);
    return this.http.get(this.url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  updatePost(post) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post))
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = err.error.message; 
 
    if (err.error instanceof ErrorEvent) {
      console.log('client error: ' + errMsg);
    } else {
      console.log(`backend error: status code: ${err.status} message: ${errMsg}`);
    }
    return throwError('Bilinmeyen bir hata oluştu.');

  }

}
