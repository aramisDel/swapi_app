import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, expand, Observable, reduce, tap, throwError } from 'rxjs';
import { Planet } from './planet';
import { Results } from './results';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private planetsURL = 'https://swapi.py4e.com/api/planets'

  constructor(private http: HttpClient) { }

public getAllPlanets(): Observable<Planet[]> {
  return  this.http.get<Results>(this.planetsURL).pipe(
    expand(response => response.next ? this.http.get<Results>(response.next) : EMPTY),
    reduce((accData, data) => accData.concat(data.results), [] as Planet[]),
    tap(data => console.log('All planets:: ', JSON.stringify(data))),
    catchError(this.handleError))
}


private handleError(err: HttpErrorResponse){
  let errorMessage = '';
  if(err.error instanceof ErrorEvent){
      errorMessage = `'Error: ${err.status}, error message: ${err.message}`;
  }
  return throwError(()=>errorMessage);
}
}
