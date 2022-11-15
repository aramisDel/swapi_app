import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Character } from './character';
import { catchError, Observable, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  
  private url = 'https://swapi.py4e.com/api/people/';
  
  constructor(private http: HttpClient){

  }
  getCharacters(): Observable<Character[]> {
      return this.http.get<Character[]>(this.url).pipe(
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