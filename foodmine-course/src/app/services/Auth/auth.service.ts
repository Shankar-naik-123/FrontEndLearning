import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(user: User): Observable<any> {
    return this.httpClient
      .post('https://localhost:7019/api/Auth/Login', user, {
        responseType: 'text',
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status == 404) {
      localStorage.removeItem('authToken');
      alert('Invalid UserName  or password Provided!');
      return throwError(
        () => new Error('Invalid UserName  or password Provided!')
      );
    } else {
      return throwError(() => new Error(error.message));
    }
  }

  AddFood(food: any): Observable<any> {
    return this.httpClient
      .post('https://localhost:7019/api/FoodMine/addfood', null, {
        responseType: 'text',
      })
      .pipe(catchError(this.handleAddFoodError));
  }

  private handleAddFoodError(error: HttpErrorResponse) {
    if (error.status == 404) {
      alert('UnAuthorized!');
      return throwError(() => new Error('UnAuthorized'));
    } else {
      return throwError(() => new Error(error.message));
    }
  }
}
