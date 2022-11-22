import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatest, EMPTY, expand, map, merge, Observable, of, reduce, take, tap, throwError } from 'rxjs';
import { Planet } from './planet';
import { Results } from './results';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private planetsURL = 'https://swapi.py4e.com/api/planets'

  constructor(private http: HttpClient) { }

  results$ = this.http.get<Results>(this.planetsURL)
  .pipe(
    tap(data => console.log('planet Results : ', JSON.stringify(data))),
    catchError(this.handleError)
  );

  
  getPlanets(page: number): Observable<Results> {
    return this.http.get<Results>(this.planetsURL+ '?page=' + page).pipe(
        tap(data => console.log('All', JSON.stringify(data))),
        catchError(this.handleError)
    );
}




private handleError(err: HttpErrorResponse){
  let errorMessage = '';
  if(err.error instanceof ErrorEvent){
      errorMessage = `'Error: ${err.status}, error message: ${err.message}`;
  }
  return throwError(()=>errorMessage);
}
}
