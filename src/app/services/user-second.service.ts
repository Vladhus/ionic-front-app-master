import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class User {
  UserName: string;
  Password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserSecondService {
  endpoint = 'http://localhost:5001/api/Account';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  loginUser(user: User): Observable<any> {
    return this.http.post<boolean>(this.endpoint + '/login' ,JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Update user'))
      );
  }

  registerUser(user: User): Observable<any> {
      return this.http.post<boolean>(this.endpoint + '/register',JSON.stringify(user), this.httpOptions)
        .pipe(
          catchError(this.handleError<any>(`Try user register`))
        );
    }
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    } 
}
