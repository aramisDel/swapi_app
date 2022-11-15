import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private planetsURL = 'https://swapi.dev/api/planets'

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.planetsURL).pipe(
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
