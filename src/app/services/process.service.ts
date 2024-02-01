import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IProcess } from '../types/process';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProcessService {
  private processUrl = 'assets/api/process.json';

  constructor(private http: HttpClient) {}

  getProcess(): Observable<IProcess[]> {
    return this.http.get<IProcess[]>(this.processUrl).pipe(
      tap((data) => console.log(this.processUrl.length)),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
